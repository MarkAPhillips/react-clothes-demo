import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/gridActions';
import {reportService} from '../../src/shared/services/ReportService';
import * as types from '../../src/actions/actionTypes';
import {actionUtils} from '../../src/actions/actionUtils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Grid actions specs', () => {
    let reportServiceStub;
    let actionUtilsStub;
    const response = {};

    const mockData = [{
        id: 1, name: 'Test Report', colDefs: [{
            headerName: 'Delivery Country',
            field: 'deliveryCountry',
            width: 200
        },
        {
            headerName: 'Manufacturer',
            field: 'manufacturer',
            width: 200
        }]
    }];

    const store = mockStore({
        reportId: '',
        colDefs: [{}],
        error: null
    });

    beforeEach(() => {
        response.data = mockData;
        reportServiceStub = sinon.stub(reportService, 'getReportById');
        actionUtilsStub = sinon.stub(actionUtils, 'transformColumnDefsByFilter');
    });

    afterEach(() => {
        reportServiceStub.restore();
        actionUtilsStub.restore();
    });

    it('should create a GRID_SELECTED_SUCCESS action when grid filters are successfully fetched ', () => {

        reportServiceStub.resolves(response);
        actionUtilsStub.returns(mockData);

        const expectedActions = [
            { type: types.GRID_SELECTED_START },
            { type: types.GRID_SELECTED_SUCCESS, reportId: 1, colDefs: [{}] }
        ];

        store.dispatch(actions.onSelect(1))
            .then(() => {
                const args = actionUtilsStub.getCall(0).args;
                args[0].should.equal(mockData);
                store.getActions().should.equal(expectedActions);
            });
    });

    it('should create a GRID_SELECTED_FAILED action when grid filters fail to be fetched ', () => {
        response.error = 'Error occurred';
        reportServiceStub.rejects(response);
        const expectedActions = [
            { type: types.GRID_SELECTED_FAILED, error: response }
        ];
        store.dispatch(actions.onSelect(1))
            .then(() => {
                actionUtilsStub.notCalled.should.equal(true);
                store.getActions().should.equal(expectedActions);
            });
    });

    it('should create a GRID_RESET action when resetting the filters for a grid', () => {
        const expectedAction = {
            type: types.GRID_RESET
        };
        actions.onReset().should.deep.equal(expectedAction);
    });
});
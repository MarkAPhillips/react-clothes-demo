import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/reportActions';
import {reportService} from '../../src/shared/services/ReportService';
import * as types from '../../src/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Report actions specs', () => {
    let reportServiceStub;
    const response = {};
    const store = mockStore({
        data: [],
        error: null
    });

    beforeEach(() => {
        response.data = [{ id: 1, name: 'Test Report' }];
        reportServiceStub = sinon.stub(reportService, 'getReports');
    });

    afterEach(() => {
        reportServiceStub.restore();
    });

    it('should create a REPORTS_FETCH_SUCCESS action when reports are successfully fetched ', () => {

        reportServiceStub.resolves(response);

        const expectedActions = [
            { type: types.REPORTS_FETCH_START },
            { type: types.REPORTS_FETCH_SUCCESS, data: [{ id: 1, name: 'Test Report' }] }
        ];

        store.dispatch(actions.onFetch())
            .then(() => {
                store.getActions().should.equal(expectedActions);
            });
    });

    it('should create a REPORTS_FETCH_FAILED action when orders fail to be fetched ', () => {
        response.error = 'Error occurred';
        reportServiceStub.rejects(response);
        const expectedActions = [
            { type: types.REPORTS_FETCH_FAILED, error: response }
        ];
        store.dispatch(actions.onFetch())
            .then(() => {
                store.getActions().should.equal(expectedActions);
            });
    });
});
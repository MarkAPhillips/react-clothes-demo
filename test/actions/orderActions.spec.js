import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/orderActions';
import {orderService} from '../../src/shared/services/OrderService';
import * as types from '../../src/actions/actionTypes';
import {actionUtils} from '../../src/actions/actionUtils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Order actions specs', () => {
    let orderServiceStub;
    let actionUtilsStub;
    const response = {};

    const mockData  = [ {
            id: 2626,
            orderDate: '2016-02-01T15:01:45Z',
            deliveryCountry: 'South Africa',
            manufacturer: 'G-Star',
            gender: 'F',
            size: 'XS',
            colour: 'Brown',
            style: 'Straight',
            count: 4
         }];

    const store = mockStore({
            data: [],
            error: null
        });

    beforeEach(() => {
        response.data = mockData;
        orderServiceStub = sinon.stub(orderService, 'getOrders');
        actionUtilsStub = sinon.stub(actionUtils, 'extendData');
    });

    afterEach(() => {
        orderServiceStub.restore();
        actionUtilsStub.restore();
    });

    it('should create a ORDERS_FETCH_SUCCESS action when orders are successfully fetched ', () => {

        orderServiceStub.resolves(response);
        actionUtilsStub.returns(mockData);
       
        const expectedActions = [
            { type: types.ORDERS_FETCH_START },
            { type: types.ORDERS_FETCH_SUCCESS, data: mockData }
        ];

        store.dispatch(actions.onFetch())
            .then(() => {
                const args = actionUtilsStub.getCall(0).args;
                args[0].should.equal(mockData);
                store.getActions().should.equal(expectedActions);
            });
    });

    it('should create a ORDERS_FETCH_FAILED action when orders fail to be fetched ', () => {
        response.error = 'Error occurred';
        orderServiceStub.rejects(response);
        const expectedActions = [
            { type: types.ORDERS_FETCH_FAILED, error: response }
        ];
        store.dispatch(actions.onFetch())
            .then(() => {
                actionUtilsStub.notCalled.should.equal(true);
                store.getActions().should.equal(expectedActions);
            });
    });
});
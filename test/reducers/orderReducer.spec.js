import reducer from '../../src/reducers/orderReducer';
import * as types from '../../src/actions/actionTypes';
import Immutable from 'immutable';

describe('Order reducer specs', () => {
    let ordersState;
    const initialState = Immutable.fromJS({
        data: [],
        error: null
    });

    it('should return the initial state', () => {
        ordersState = reducer(undefined, {});
        ordersState.should.have.keys('data','error');
        ordersState.should.deep.equal(initialState);
    });

    it('should handle ORDERS_FETCH_START', () => {
        ordersState = reducer({}, {
            type: types.ORDERS_FETCH_START
        });
        ordersState.should.deep.equal({});
    });

    it('should handle ORDERS_FETCH_SUCCESS', () => {
        ordersState = reducer(initialState, {
            type: types.ORDERS_FETCH_SUCCESS,
            data: [{
                id: 1,
                country: 'France'
            }]
        });
        
        const ordersStateObj = ordersState.toJS();
        ordersStateObj.should.deep.equal({
             data: [{
                id: 1,
                country: 'France'
            }],
            error:null
        });
    });

    it('should handle ORDERS_FETCH_FAILED', () => {
        ordersState = reducer(initialState, {
            type: types.ORDERS_FETCH_FAILED,
            error: 'Error occurred'
        });

        ordersState.should.have.property('error', 'Error occurred');
        ordersState.should.have.property('data').that.is.empty;
    });
});
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

        Immutable.is(ordersState, Immutable.fromJS({
            data: [{
                id: 1,
                country: 'France'
            }],
            error: null
        })).should.be.true;
    });

    it('should handle ORDERS_FETCH_FAILED', () => {
        ordersState = reducer(initialState, {
            type: types.ORDERS_FETCH_FAILED,
            error: 'Error occurred'
        });

        Immutable.is(ordersState, Immutable.fromJS({
            data: [],
            error: 'Error occurred'
        })).should.be.true;
    });
});
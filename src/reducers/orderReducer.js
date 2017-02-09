import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    data: [],
    error: null
});

export default function orders(state = initialState, action) {
    switch (action.type) {
        case types.ORDERS_FETCH_START:
            return state;
        case types.ORDERS_FETCH_SUCCESS:
            return state.mergeDeep({
                data: action.data
            });
        case types.ORDERS_FETCH_FAILED:
            return state.mergeDeep({
                error: action.error
            });
        default:
            return state;
    }
}
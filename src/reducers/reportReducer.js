import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    data: [],
    error: null
});

export default function orders(state = initialState, action) {
    switch (action.type) {
        case types.REPORTS_FETCH_START:
            return state;
        case types.REPORTS_FETCH_SUCCESS:
           return state.setIn(['data'], action.data);
        case types.REPORTS_FETCH_FAILED:
            return state.setIn(['error'], action.error);
        default:
            return state;
    }
}
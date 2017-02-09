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
            return state.mergeDeep({
                data: action.data
            });
        case types.REPORTS_FETCH_FAILED:
            return state.mergeDeep({
                error: action.error
            });
        case types.REPORTS_RESET:
            return initialState;
        default:
            return state;
    }
}
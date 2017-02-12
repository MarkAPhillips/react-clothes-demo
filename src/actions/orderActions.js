import * as types from './actionTypes';
import {orderService} from '../shared/services/OrderService';
import {actionUtils} from './actionUtils';

export function onSuccess(response) {
    const data = actionUtils.extendData(response.data);
    return {
        type: types.ORDERS_FETCH_SUCCESS,
        data
    };
}

export function onStart() {
    return {
        type: types.ORDERS_FETCH_START
    };
}

export function onError(response) {
    return {
        type: types.ORDERS_FETCH_FAILED,
        error: response
    };
};

export function onFetch() {
    return (dispatch) => {
        dispatch(onStart());
        orderService.getOrders().then((response) => {
            if (response != null) {
                dispatch(onSuccess(response));
            } else {
                dispatch(onError());
            }
        });
    };
}
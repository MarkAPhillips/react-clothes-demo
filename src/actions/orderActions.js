import * as types from '../actionTypes';
import {orderService} from '../../../shared/services/OrderService';


export function onSuccess(response) {
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

export function fetch() {
    return (dispatch) => {
        dispatch(onStart());
        orderService.getOrders().then((response) => {
            if (response != null ) {
                dispatch(onSuccess(response));
            } else {
                dispatch(onError());
            }
        });
    };
}
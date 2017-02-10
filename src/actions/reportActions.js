import * as types from './actionTypes';
import {reportService} from '../shared/services/ReportService';

export function onSuccess(response, type) {
    const data = response.data;
    return {type,data};
}

export function onStart(type) {
    return { type };
}

export function onError(response,type) {
    return { type,error: response};
};

export function onFetch() {
    return (dispatch) => {
        dispatch(onStart(types.REPORTS_FETCH_START));
        reportService.getReports().then((response) => {
            if (response != null) {
                dispatch(onSuccess(response,types.REPORTS_FETCH_SUCCESS));
            } else {
                dispatch(onError(types.REPORTS_FETCH_FAILED));
            }
        });
    };
}
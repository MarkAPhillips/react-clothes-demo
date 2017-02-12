import * as types from './actionTypes';
import {reportService} from '../shared/services/ReportService';
import {actionUtils} from './actionUtils';

export function onSuccess(response, reportId, type) {
    const colDefs = actionUtils.transformColumnDefsByFilter(response.data.filter);
    return { type, colDefs, reportId };
}

export function onStart(type) {
    return { type };
}

export function onError(response, type) {
    return { type, error: response };
};

export function onReset() {
    return { type: types.GRID_RESET };
}

export function onSelect(reportId) {
    return (dispatch) => {
        dispatch(onStart(types.GRID_SELECTED_START));
        reportService.getReportById(reportId).then((response) => {
            if (response != null) {
                dispatch(onSuccess(response, reportId, types.GRID_SELECTED_SUCCESS));
            } else {
                dispatch(onError(types.GRID_SELECTED_FAILED));
            }
        });
    };
}
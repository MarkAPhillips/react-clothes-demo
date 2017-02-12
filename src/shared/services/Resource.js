import axios from 'axios';
import AppConstants from '../../app.constants';

/** HTTP resource for handling asynchronous http methods */
const defaultHeader = {
    'Content-Type': 'application/json;charset=UTF-8'
};

function _validateStatus(status) {
    return status >= AppConstants.API.STATUS_CODES.OK && status < AppConstants.API.STATUS_CODES.INTERNAL_SERVER_ERROR;
};

class Resource {
    /** GET Http method */
    get(resource) {
        return this.createInstance().get(resource).then((response) => {
            return response;
        }).catch((error) => {
            /** TODO: Handle errors on API calls globally */
            console.log('Error response', error);
        });
    }

    /** Create axios instance based on default parameters */
    createInstance(){
        return axios.create({
            baseURL: AppConstants.API.URI,
            timeout: AppConstants.API.TIMEOUT_MS,
            headers: defaultHeader,
            validateStatus: _validateStatus
        });
    }
}

export const resource = new Resource();
import axios from 'axios';
import AppConstants from '../../app.constants';

/** HTTP resource for handling asynchronous http methods */
const defaultHeader = {
    'Content-Type': 'application/json;charset=UTF-8'
};

function _validateStatus(status) {
    return status >= AppConstants.STATUSCODES.OK && status < AppConstants.STATUSCODES.INTERNAL_SERVER_ERROR;
};

class Resource {
    constructor() {
        this.instance = axios.create({
            baseURL: AppConstants.API.URI,
            timeout: AppConstants.API.TIMEOUT_MS,
            headers: defaultHeader,
            validateStatus : _validateStatus
        });
    }

    /** GET Http method */
    get(resource) {
        return this.instance.get(resource).then((response) => {
            return response;
        }).catch((error) => {
            console.log('Error response', error);
        });
    }
}

export const resource = new Resource();
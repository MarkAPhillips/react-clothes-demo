import {resource} from './Resource';
import AppConstants from '../../app.constants';

class ReportService {
    constructor() {
        this.baseUri = `${AppConstants.API.URI}`;
    }

    /** Get all default reports to be generated  */
    getReports() {
        const api = `${this.baseUri}reports`;
        return resource.get(api);
    }
}

export const reportService = new ReportService();
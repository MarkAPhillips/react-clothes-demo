import {resource} from './Resource';
import AppConstants from '../../app.constants';

class OrderService {
    constructor() {
        this.baseUri = `${AppConstants.API.URI}`;
    }
    /** Get all orders for sales  */
    getOrders() {
        const api = `${this.baseUri}orders`;
        return resource.get(api, true);
    }

}

export const orderService = new OrderService();
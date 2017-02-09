import {orderService} from '../../../src/shared/services/OrderService';
import { resource} from '../../../src/shared/services/Resource';

describe('Order Service specs', () => {

    let resourceStub;

    beforeEach(() => {
        resourceStub = sinon.spy(resource, 'get');
    });

    afterEach(() => {
        resourceStub.restore();
    });


    describe('when getting all orders', () => {
        beforeEach(() => {
            orderService.getOrders();
        });

        it('should verify that resource get is called with the correct arguments', () => {
            const args = resourceStub.getCall(0).args;
            args[0].should.equal('http://localhost:3000/orders');
        });
    });
});
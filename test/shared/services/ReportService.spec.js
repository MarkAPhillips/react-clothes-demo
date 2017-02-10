import {reportService} from '../../../src/shared/services/ReportService';
import { resource} from '../../../src/shared/services/Resource';

describe('Report Service specs', () => {

    let resourceStub;

    beforeEach(() => {
        resourceStub = sinon.spy(resource, 'get');
    });

    afterEach(() => {
        resourceStub.restore();
    });

    describe('when getting all reports', () => {
        beforeEach(() => {
            reportService.getReports();
        });

        it('should verify that resource get is called with the correct arguments', () => {
            const args = resourceStub.getCall(0).args;
            args[0].should.equal('http://localhost:3000/reports');
        });
    });

    describe('when getting a report by Id', () => {
        beforeEach(() => {
            reportService.getReportById(1);
        });

        it('should verify that resource get is called with the correct arguments', () => {
            const args = resourceStub.getCall(0).args;
            args[0].should.equal('http://localhost:3000/reports/1');
        });
    });
});
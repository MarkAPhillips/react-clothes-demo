import {reportService} from '../../../src/shared/services/ReportService';
import { resource} from '../../../src/shared/services/Resource';

describe('Report Service specs', () => {

    let resourceStub;

    describe('when getting all reports', () => {

        afterEach(() => {
            resourceStub.restore();
        });

        beforeEach(() => {
            resourceStub = sinon.stub(resource, 'get').resolves([{}]);
            reportService.getReports();
        });

        it('should verify that resource get is called with the correct arguments', () => {
            const args = resourceStub.getCall(0).args;
            args[0].should.equal('http://localhost:3000/reports');
        });

        it('should return the correct value', () => {
            resourceStub().then((value) => {
                value.should.deep.equal([{}]);
            });
        });
    });

    describe('when getting a report by Id', () => {
        afterEach(() => {
            resourceStub.restore();
        });

        beforeEach(() => {
            resourceStub = sinon.stub(resource, 'get').resolves({});
            reportService.getReportById(1);
        });

        it('should verify that resource getbyId is called with the correct arguments', () => {
            const args = resourceStub.getCall(0).args;
            args[0].should.equal('http://localhost:3000/reports/1');
        });

        it('should return the correct value', () => {
            resourceStub().then((value) => {
                value.should.deep.equal({});
            });
        });
    });
});
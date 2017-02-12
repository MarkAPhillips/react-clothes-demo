import {actionUtils} from '../../src/actions/actionUtils';

describe('Action Utils specs', () => {

    describe('when extending sales data with an order date', () => {

        let extendedData;

        beforeEach(() => {
            const mockSalesData = [{
                id: 4099,
                orderDate: '2016-06-09T22:07:15Z',
                deliveryCountry: 'Indonesia',
                manufacturer: 'Hipster Jean Company',
                gender: 'M',
                size: 'S',
                colour: 'Navy',
                style: 'Slim',
                count: 10
            }];

            extendedData = actionUtils.extendData(mockSalesData);
        });

        it('should expect a valid month property added', () => {
            extendedData.forEach((item) => {
                item.month.should.equal('June');
            });
        });

        it('should expect a valid year property added', () => {
            extendedData.forEach((item) => {
                item.year.should.equal('2016');
            });
        });
    });

    describe('when transforming column definitions by a filter', () => {
        let filteredData;
        beforeEach(() => {
            const filter = {
                grouping: ['deliveryCountry', 'size'],
                aggregate: 'count'
            };
            filteredData = actionUtils.transformColumnDefsByFilter(filter);
        });

        it('should add an aggregate value to the count field', () => {
            const field = filteredData.find((item) => {
                return item.field === 'count';
            });

            field.aggFunc.should.equal('sum');
            field.sort.should.equal('desc');
        });

        it('should add an grouping value to the delivery Country field', () => {
            const field = filteredData.find((item) => {
                return item.field === 'deliveryCountry';
            });

            field.rowGroupIndex.should.equal(0);
        });

        it('should add an grouping value to the size field', () => {
            const field = filteredData.find((item) => {
                return item.field === 'size';
            });

            field.rowGroupIndex.should.equal(1);
        });
    });
});
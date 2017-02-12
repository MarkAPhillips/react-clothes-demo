import moment from 'moment';
import {columnDefsInitialState} from '../config/gridConfig';

/** Add aggregate on a field definition*/
function _createAggregate(item) {
    return Object.assign({}, item, {
        aggFunc: 'sum',
        sort: 'desc'
    });
}

/** Create grouping on a field definition */
function _createGrouping(filter, item) {
    if (filter.grouping != null && filter.grouping.length > 0) {
        const match = filter.grouping.find((fieldName) => {
            return item.field === fieldName;
        });
        if (match != null) {
            return Object.assign({}, item, {
                field: match,
                rowGroupIndex: filter.grouping.indexOf(match)
            });
        } else {
            return item;
        }
    }
}

const actionUtils = {

    /** Extend data to include Month and Year fields for grouping in reports 
     * TODO: Review if Ag-grid has a better way to implement this based on the orderDate
     * field 
     */
    extendData(data) {
        return data.map((item) => {
            if (item.orderDate != null) {
                item.month = moment(item.orderDate).format('MMMM');
                item.year = moment(item.orderDate).format('YYYY');
            }
            return item;
        });
    },

    /**
     *  Dependent on report apply filter to transform the col definitions structure
     *  TODO: Review if this can be implemented in Immutable
     * @param filter {
                "grouping": ["deliveryCountry", "size"],
                "aggregate": "count"
            } */
    transformColumnDefsByFilter(filter) {

        /** Ensure aggregate appears as the first column in the col defs */
        const initialState = [...columnDefsInitialState];
        let aggFieldIdx = columnDefsInitialState.findIndex((item) => {
            return item.field === filter.aggregate;
        });

        initialState.unshift(initialState[aggFieldIdx]);
        initialState.splice(++aggFieldIdx, 1);

        return initialState.map((item) => {
            return (item.field === filter.aggregate) ? _createAggregate(item) : _createGrouping(filter, item);
        });
    }
};


export {
    actionUtils
};
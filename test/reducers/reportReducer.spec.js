import reducer from '../../src/reducers/reportReducer';
import * as types from '../../src/actions/actionTypes';
import Immutable from 'immutable';

describe('Report reducer specs', () => {
    let reportState;
    const initialState = Immutable.fromJS({
        data: [],
        error: null
    });

    it('should return the initial state', () => {
        reportState = reducer(undefined, {});
        reportState.should.have.keys('data','error');
        reportState.should.deep.equal(initialState);
    });

    it('should handle REPORTS_FETCH_START', () => {
        reportState = reducer({}, {
            type: types.REPORTS_FETCH_START
        });
        reportState.should.deep.equal({});
    });

    it('should handle REPORTS_FETCH_SUCCESS', () => {
        reportState = reducer(initialState, {
            type: types.REPORTS_FETCH_SUCCESS,
            data: [{
                id: 1,
                name: 'Report 1'
            }]
        });

        const reportStateObj = reportState.toJS();
        reportStateObj.should.deep.equal({
            data: [{
                id: 1,
                name: 'Report 1'
            }],
            error: null
        });
    });

    it('should handle REPORTS_FETCH_FAILED', () => {
        reportState = reducer(initialState, {
            type: types.REPORTS_FETCH_FAILED,
            error: 'Error occurred'
        });

        reportState.should.have.property('error', 'Error occurred');
        reportState.should.have.property('data').that.is.empty;
    });
});
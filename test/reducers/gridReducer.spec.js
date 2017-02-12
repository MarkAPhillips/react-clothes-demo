import reducer from '../../src/reducers/gridReducer';
import * as types from '../../src/actions/actionTypes';
import { columnDefsInitialState} from '../../src/config/gridConfig';
import Immutable from 'immutable';

describe('Grid reducer specs', () => {
    let gridState;

    const initialState = Immutable.fromJS({
        reportId: '',
        colDefs: columnDefsInitialState,
        error: null
    });

    it('should return the initial state', () => {
        gridState = reducer(undefined, {});
        gridState.should.have.keys('reportId', 'colDefs', 'error');
        gridState.should.deep.equal(initialState);
    });

    it('should handle GRID_RESET', () => {
        gridState = reducer({}, {
            type: types.GRID_RESET
        });
        Immutable.is(gridState, initialState).should.be.true;
    });

    it('should handle GRID_SELECTED_START', () => {
        gridState = reducer({}, {
            type: types.GRID_SELECTED_START
        });
        gridState.should.deep.equal({});
    });

    it('should handle GRID_SELECTED_FAILED', () => {
        gridState = reducer(initialState, {
            type: types.GRID_SELECTED_FAILED,
            error: 'Error occurred'
        });

        gridState.should.have.property('error', 'Error occurred');
        gridState.should.have.property('reportId','');
        gridState.should.have.property('colDefs').to.have.size(10);

    });

    it('should handle GRID_SELECTED_SUCCESS', () => {
        gridState = reducer(initialState, {
            type: types.GRID_SELECTED_SUCCESS,
            reportId: '1',
            colDefs: [{
                headerName: 'Count',
                field: 'count',
                width: 100,
                aggFunc: 'sum',
                sort: 'desc'
            }]
        });

        gridState.should.have.property('reportId', '1');
        gridState.should.have.property('error').that.is.equal(null);
        gridState.should.have.deep.property('colDefs').that.equals([{
                headerName: 'Count',
                field: 'count',
                width: 100,
                aggFunc: 'sum',
                sort: 'desc'
            }]);
    });
});
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/reportActions';

//import * as types from '../../src/actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Report actions specs', () => {

    xit('creates REPORTS_FETCH_SUCCESS when reports are successfully fetched ', () => {
        beforeEach(() => {

        });
        const store = mockStore({
            colDefs: []
        });
        return store.dispatch(actions.onFetch())
            .then(() => { // return of async actions
               // TODO:
            });
    });
});
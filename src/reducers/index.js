import {combineReducers} from 'redux';
import orders from './orderReducer';
import reports from './reportReducer';
import grid from './gridReducer';

const rootReducer = combineReducers({
    orders, reports, grid
});

export default rootReducer;
import {combineReducers} from 'redux';
import orders from './orderReducer';
import reports from './reportReducer';

const rootReducer = combineReducers({
    orders, reports
});

export default rootReducer;
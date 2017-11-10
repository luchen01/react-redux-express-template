import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';
import modalReducer from './toggleloginmodal';

const rootReducer = combineReducers({
    modalReducer,
    routing
});

export default rootReducer;

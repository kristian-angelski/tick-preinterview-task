import { combineReducers } from 'redux';
import companiesReducer from './Companies/companiesReducer';

const rootReducer = combineReducers({
  companies: companiesReducer,
});

export default rootReducer;

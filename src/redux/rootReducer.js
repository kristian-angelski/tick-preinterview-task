import { combineReducers } from 'redux';
import companiesReducer from './Companies/companiesReducer';
import addressesReducer from './Addresses/addressesReducer';
import employeesReducer from './Employees/employeesReducer';

const rootReducer = combineReducers({
  companies: companiesReducer,
  addresses: addressesReducer,
  employees: employeesReducer,
});

export default rootReducer;

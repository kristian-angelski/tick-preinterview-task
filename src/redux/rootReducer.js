import { combineReducers } from 'redux';
import companiesReducer from './Companies/companiesReducer';
import addressesReducer from './Addresses/addressesReducer';
import employeesReducer from './Employees/employeesReducer';
import projectsReducer from './Projects/projectsReducer';

const rootReducer = combineReducers({
  companies: companiesReducer,
  addresses: addressesReducer,
  employees: employeesReducer,
  projects: projectsReducer,
});

export default rootReducer;

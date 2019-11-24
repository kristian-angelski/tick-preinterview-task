import { combineReducers } from 'redux';
import companiesReducer from './Companies/companiesReducer';
import addressesReducer from './Addresses/addressesReducer';

const rootReducer = combineReducers({
  companies: companiesReducer,
  addresses: addressesReducer,
});

export default rootReducer;

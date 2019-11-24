import axios from 'axios';
import {
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_ERROR,
} from './companiesActionTypes';

const COMPANIES_API_KEY = 'https://api.myjson.com/bins/hrhxu';

const fetchCompaniesRequest = () => {
  return {
    type: FETCH_COMPANIES_REQUEST,
  };
};

const fetchCompaniesSuccess = companies => {
  return {
    type: FETCH_COMPANIES_SUCCESS,
    payload: companies,
  };
};

const fetchCompaniesError = error => {
  return {
    type: FETCH_COMPANIES_ERROR,
    payload: error,
  };
};

export const fetchCompanies = () => {
  return dispatch => {
    dispatch(fetchCompaniesRequest());
    axios
      .get(COMPANIES_API_KEY)
      .then(response => {
        const { data } = response;
        dispatch(fetchCompaniesSuccess(data));
      })
      .catch(error => {
        dispatch(fetchCompaniesError(error.message));
      });
  };
};

import axios from 'axios';
import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
} from './employeesActionTypes';

const EMPLOYEES_API_KEY = 'https://api.myjson.com/bins/yhs1e';

const fetchEmployeesRequest = () => {
  return {
    type: FETCH_EMPLOYEES_REQUEST,
  };
};

const fetchEmployeesSuccess = employees => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees,
  };
};

const fetchEmployeesError = error => {
  return {
    type: FETCH_EMPLOYEES_ERROR,
    payload: error,
  };
};

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(fetchEmployeesRequest());
    axios
      .get(EMPLOYEES_API_KEY)
      .then(response => {
        const { data } = response;
        dispatch(fetchEmployeesSuccess(data));
      })
      .catch(error => {
        dispatch(fetchEmployeesError(error.message));
      });
  };
};

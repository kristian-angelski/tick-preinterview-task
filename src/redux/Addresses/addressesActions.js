import axios from 'axios';
import {
  FETCH_ADDRESSES_REQUEST,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_ERROR,
} from './addressesActionTypes';

const COMPANIES_API_KEY = 'https://api.myjson.com/bins/1f5wz6';

const fetchAddressesRequest = () => {
  return {
    type: FETCH_ADDRESSES_REQUEST,
  };
};

const fetchAddressesSuccess = addresses => {
  return {
    type: FETCH_ADDRESSES_SUCCESS,
    payload: addresses,
  };
};

const fetchAddressesError = error => {
  return {
    type: FETCH_ADDRESSES_ERROR,
    payload: error,
  };
};

export const fetchAddresses = () => {
  return dispatch => {
    dispatch(fetchAddressesRequest());
    axios
      .get(COMPANIES_API_KEY)
      .then(response => {
        const { data } = response;
        dispatch(fetchAddressesSuccess(data));
      })
      .catch(error => {
        dispatch(fetchAddressesError(error.message));
      });
  };
};

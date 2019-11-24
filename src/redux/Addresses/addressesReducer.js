import {
  FETCH_ADDRESSES_REQUEST,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_ERROR,
} from './addressesActionTypes';

const initialState = {
  loading: false,
  addresses: [],
  error: '',
};

const addressesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ADDRESSES_SUCCESS:
      return {
        loading: false,
        addresses: action.payload,
        error: '',
      };
    case FETCH_ADDRESSES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addressesReducer;

import {
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_ERROR,
} from './companiesActionTypes';

const initialState = {
  loading: false,
  companies: [],
  error: '',
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMPANIES_SUCCESS:
      return {
        loading: false,
        companies: action.payload,
        error: '',
      };
    case FETCH_COMPANIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companiesReducer;

import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} from './projectsActionTypes';

const initialState = {
  loading: false,
  projects: [],
  error: '',
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
        error: '',
      };
    case FETCH_PROJECTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;

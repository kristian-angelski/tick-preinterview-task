import axios from 'axios';
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} from './projectsActionTypes';

const PROJECTS_API_KEY = 'https://api.myjson.com/bins/hvzz6';

const fetchProjectsRequest = () => {
  return {
    type: FETCH_PROJECTS_REQUEST,
  };
};

const fetchProjectsSuccess = projects => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects,
  };
};

const fetchProjectsError = error => {
  return {
    type: FETCH_PROJECTS_ERROR,
    payload: error,
  };
};

export const fetchProjects = () => {
  return dispatch => {
    dispatch(fetchProjectsRequest());
    axios
      .get(PROJECTS_API_KEY)
      .then(response => {
        const { data } = response;
        dispatch(fetchProjectsSuccess(data));
      })
      .catch(error => {
        dispatch(fetchProjectsError(error.message));
      });
  };
};

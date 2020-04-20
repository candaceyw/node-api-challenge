import axios from 'axios';

export const PROJECT_START = 'PROJECT_START';
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS';
export const PROJECT_FAIL = 'PROJECT_FAIL';
export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAIL = 'ADD_PROJECT_FAIL';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const SET_LOADING = 'SET_LOADING';

export const getProject = () => (dispatch) => {
	dispatch({ type: PROJECT_START });

	// GET project

	return axios
		.get('http://localhost:4500/projects')
		.then((res) => {
			console.log(res.data);
			dispatch({ type: PROJECT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log('err', err);

			dispatch({
				type: PROJECT_FAIL,
				payload: err,
			});
		});
};

// Add Post to db
export const addProject = (projects) => (dispatch) => {
	dispatch({ type: ADD_PROJECT });
	axios
		.post(`http://localhost:4500/projects`, projects)
		.then((res) => {
			console.log('add Project', res);
			dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ADD_PROJECT_FAIL, payload: err });
		});
};

//Delete  project from server
export const deleteProject = (id) => (dispatch) => {
	console.log('delete project', id);
	dispatch({ type: DELETE_PROJECT });

	axios
		.delete(`http://localhost:4500/projects/${id}`)
		.then((res) => {
			console.log('delete user:', res.data);
			dispatch({ type: DELETE_PROJECT, payload: id });
		})
		.catch((err) => {
			dispatch({ type: PROJECT_FAIL, payload: err });
		});
};

// Set current user
export const setCurrent = (project) => {
	return {
		type: SET_CURRENT,
		payload: project,
	};
};

// Clear current user
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

// Set Loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

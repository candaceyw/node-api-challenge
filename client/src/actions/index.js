import axios from 'axios';

export const PROJECT_START = 'PROJECT_START';
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS';
export const PROJECT_FAIL = 'PROJECT_FAIL';
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

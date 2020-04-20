import {
	PROJECT_SUCCESS,
	PROJECT_START,
	PROJECT_FAIL,
	ADD_PROJECT,
	ADD_PROJECT_SUCCESS,
	ADD_PROJECT_FAIL,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOADING,
	DELETE_PROJECT,
} from '../actions/index';

const initialState = {
	projects: [],
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PROJECT_START:
			return {
				...state,
				loading: true,
				error: null,
			};
		case PROJECT_SUCCESS:
			return {
				...state,
				projects: action.payload,
				loading: false,
				error: null,
			};
		case PROJECT_FAIL:
			return {
				...state,
				projects: [],
				loading: false,
				error: action.payload,
			};
		case ADD_PROJECT_FAIL:
			return {
				...state,
				loading: true,
				error: '',
			};
		case ADD_PROJECT_SUCCESS:
			return {
				...state,
				loading: false,
				projects: [...state.projects, action.payload],
			};
		case ADD_PROJECT_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter(
					(project) => project.id !== action.payload
				),
				loading: false,
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};

		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

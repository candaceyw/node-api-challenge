import {
	PROJECT_SUCCESS,
	PROJECT_START,
	PROJECT_FAIL,
	SET_CURRENT,
	CLEAR_CURRENT,
	SET_LOADING,
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

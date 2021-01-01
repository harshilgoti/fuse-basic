import { createSlice } from '@reduxjs/toolkit';
// import axios from '../../../config/axios';

const initialState = {
	fetchAreasListLoading: false,
	fetchAreasList: [
		{
			image_url: 'as',
			name: 'hello',
			pincord: '123456',
			created_at: '11-11-1111',
			updated_at: '11-11-1111',
			_id: 1
		}
	],
	fetchAreasListError: null
};

const areasSlice = createSlice({
	name: 'areas',
	initialState,
	reducers: {
		areasFetchAllAreas: (state, action) => {
			return {
				...state,
				loading: true
			};
		},
		areasFetchAllAreasSuccess: (state, action) => {
			return {
				...state,
				loading: false,
				user: action.payload
			};
		},
		areasFetchAllAreasFailure: (state, action) => {
			return {
				...state,
				loading: false,
				error: action.payload
			};
		}
	},
	extraReducers: {}
});

export const getAreasList = (body, handleLoginSuccess) => async dispatch => {
	dispatch(areasFetchAllAreas());

	// await axios
	// 	.post('/v1/login', body)
	// 	.then(response => {
	// 		console.log('response', response);
	// 		if (!response.data.error) {
	// 			dispatch(areasFetchAllAreasSuccess(response.data.data));
	// 			localStorage.setItem('user-token', response.data.data.token);
	// 			handleLoginSuccess && handleLoginSuccess();
	// 		} else {
	// 			dispatch(areasFetchAllAreasFailure(response.data.msg));
	// 		}
	// 	})
	// 	.catch(error => dispatch(areasFetchAllAreasFailure(error.toString())));
};

export const { areasFetchAllAreas, areasFetchAllAreasSuccess, areasFetchAllAreasFailure } = areasSlice.actions;

export default areasSlice.reducer;

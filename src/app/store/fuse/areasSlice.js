import { createSlice } from '@reduxjs/toolkit';
import axios from '../../../config/axios';

const initialState = {
	fetchAreasListLoading: false,
	fetchAreasList: [],
	fetchAreasListError: null
};

const areasSlice = createSlice({
	name: 'areas',
	initialState,
	reducers: {
		areasFetchAllAreas: (state, action) => {
			return {
				...state,
				fetchAreasListLoading: true
			};
		},
		areasFetchAllAreasSuccess: (state, action) => {
			return {
				...state,
				fetchAreasListLoading: false,
				fetchAreasList: action.payload
			};
		},
		areasFetchAllAreasFailure: (state, action) => {
			return {
				...state,
				fetchAreasListLoading: false,
				fetchAreasListError: action.payload
			};
		}
	},
	extraReducers: {}
});

export const getAreasList = () => async dispatch => {
	dispatch(areasFetchAllAreas());

	await axios
		.get('/api/v1/areas')
		.then(response => {
			console.log('response', response);
			if (!response.data.error) {
				dispatch(areasFetchAllAreasSuccess(response.data.data));
			} else {
				dispatch(areasFetchAllAreasFailure(response.data.msg));
			}
		})
		.catch(error => dispatch(areasFetchAllAreasFailure(error.toString())));
};

export const { areasFetchAllAreas, areasFetchAllAreasSuccess, areasFetchAllAreasFailure } = areasSlice.actions;

export default areasSlice.reducer;

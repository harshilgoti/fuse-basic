import { createSlice } from '@reduxjs/toolkit';
import axios from "../../../config/axios"


const initialState = {
	loading:false,
	user:null,
	error:""
};

const loginSlice = createSlice({
	name: 'auth/login',
	initialState,
	reducers: {
		login:(state, action) => {
			console.log("pay",action.payload)
			return{
				...state,
				loading:true
			}
		},
		loginSuccess: (state, action) => {
			console.log("pay1",action.payload)
			return{
				...state,
				loading:false,
				user:action.payload
			}
		},
		loginError: (state, action) => {
			console.log("pay2",action.payload)
			
			return{
				...state,
				loading:false,
				error:action.payload
			}
		},
		authClearError: (state, action) => {
			return{
				...state,
				error:""
			}
		}
	},
	extraReducers: {}
});

 export const userLogin = (body,handleLoginSuccess) => async dispatch => {
	dispatch(login())

	        await axios.post('/v1/login',body)
				.then((response) =>{
					console.log("response",response)
					if (!response.data.error) {
						dispatch(loginSuccess(response.data.data))
						localStorage.setItem("user-token",response.data.data.token)
						handleLoginSuccess && handleLoginSuccess()
					  } else {
						dispatch(loginError(response.data.msg));
					  }
					
				})
				.catch((error)=>dispatch(loginError(error.toString())))
	   
	}

export const { loginSuccess, loginError,login,authClearError } = loginSlice.actions;

export default loginSlice.reducer;

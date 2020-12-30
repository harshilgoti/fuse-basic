import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, authClearError } from '../../auth/store/loginSlice';
import { TextField, InputAdornment, IconButton, Icon, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import history from '@history';

const useStyles = makeStyles(theme => ({
	error: {
		textAlign: 'center',
		color: 'red'
	}
}));

function JWTLoginTab(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { loading, error } = useSelector(({ auth }) => auth.auth);

	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		dispatch(authClearError());
	}, []); // eslint-disable-line

	const { register, handleSubmit, errors } = useForm({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		shouldFocusError: true
	});

	function handleLoginSuccess() {
		history.push('/dashboard');
	}

	function onSubmit(data) {
		dispatch(authClearError());
		const { email, password } = data;
		const body = {
			email,
			password,
			type: 'normal',
			platform: 'mobile'
		};
		dispatch(userLogin(body, handleLoginSuccess));
	}

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col justify-center w-full">
					<TextField
						className="mb-16"
						type="text"
						name="email"
						label="Email"
						inputRef={register({
							required: true,
							pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
						})}
						error={
							(errors.email && errors.email.type === 'required') ||
							(errors.email && errors.email.type === 'pattern')
						}
						helperText={
							(errors.email && errors.email.type === 'required' && 'Please Enter email') ||
							(errors.email && errors.email.type === 'pattern' && 'Please enter a valid email')
						}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Icon className="text-20" color="action">
										email
									</Icon>
								</InputAdornment>
							)
						}}
						variant="outlined"
					/>

					<TextField
						className="mb-16"
						type="password"
						name="password"
						label="Password"
						inputRef={register({ required: true, minLength: 8 })}
						error={
							(errors.password && errors.password.type === 'required') ||
							(errors.password && errors.password.type === 'minLength')
						}
						helperText={
							(errors.password && errors.password.type === 'required' && 'Please Enter password') ||
							(errors.password &&
								errors.password.type === 'minLength' &&
								'Please enter a valid 8 character password')
						}
						InputProps={{
							className: 'pr-2',
							type: showPassword ? 'text' : 'password',
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={() => setShowPassword(!showPassword)}>
										<Icon className="text-20" color="action">
											{showPassword ? 'visibility' : 'visibility_off'}
										</Icon>
									</IconButton>
								</InputAdornment>
							)
						}}
						variant="outlined"
					/>

					{error && <div className={classes.error}>{error}</div>}

					<Button
						type="submit"
						variant="contained"
						color="primary"
						className="w-full mx-auto mt-16 normal-case"
						aria-label="LOG IN"
						disabled={loading}
					>
						{loading ? <CircularProgress size={22} color="primary" /> : 'LOG IN'}
					</Button>
				</div>
			</form>
		</div>
	);
}

export default JWTLoginTab;

import React, {
	useState
	//  useEffect
} from 'react';
// import axios from 'config/axios';
import { TextField, Button, Dialog, Typography, Toolbar, AppBar, CircularProgress } from '@material-ui/core';
import {
	// useDispatch,
	useSelector
} from 'react-redux';
// import { addAreas, editAreas, uploadImage, uploadImageUrlHandling } from 'app/store/actions';
// import GoogleMap from '../../components/GeneralMap';
import { useForm } from 'react-hook-form';

function TagsDialog(props) {
	// const dispatch = useDispatch();
	const {
		addAreasLoading,
		// fetchAreasList,
		editAreasLoading
	} = useSelector(({ fuse }) => fuse.areas);
	const [
		isEditMode
		// setEditMode
	] = useState(false);
	const defaultValues = {
		name: '',
		reactSelect: []
	};
	const { register, handleSubmit, errors } = useForm({ defaultValues });

	const onSubmit = data => {
		// console.log('data', data);
	};
	// console.log('values', values);

	return (
		<Dialog
			classes={{
				paper: 'm-24'
			}}
			open={props.open}
			onClose={props.close}
			fullWidth
			maxWidth="xs"
		>
			<AppBar position="static" elevation={1}>
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{isEditMode ? 'Edit Tag' : 'Add Tag'}
					</Typography>
				</Toolbar>
			</AppBar>
			<form className="flex flex-wrap justify-between w-full p-16" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className="mb-16" // w-full md:w-1/2 ml-0 md:ml-8
					label="Tag"
					autoFocus
					id="name"
					name="name"
					inputRef={register({
						required: true
					})}
					error={errors.name && errors.name.type === 'required'}
					helperText={errors.name && errors.name.type === 'required' && 'Please Enter Tag'}
					// onChange={handleChange}
					variant="outlined"
					fullWidth
					size="small"
				/>

				<div className="flex justify-end align-center w-full">
					<Button
						className="mr-8"
						variant="outlined"
						onClick={() => props.close()}
						disabled={addAreasLoading || editAreasLoading}
					>
						cancel
					</Button>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						style={{
							marginLeft: '10px',
							minWidth: '80px',
							minHeight: '36px',
							alignSelf: 'flex-end'
						}}
						disabled={addAreasLoading || editAreasLoading}
					>
						{addAreasLoading && !isEditMode && <CircularProgress size={18} />}
						{editAreasLoading && isEditMode && <CircularProgress size={18} />}
						{!addAreasLoading && !isEditMode && 'add'}
						{!editAreasLoading && isEditMode && 'save'}
					</Button>
				</div>
			</form>
		</Dialog>
	);
}
export default TagsDialog;

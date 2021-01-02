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
import { makeStyles } from '@material-ui/core/styles';
import ImageUpload from '../../components/ImageUpload';

const useStyles = makeStyles(theme => ({
	columnLeft: {
		marginBottom: 16,
		[theme.breakpoints.up('md')]: {
			width: '49%',
			marginRight: 4
		},
		[theme.breakpoints.down('md')]: {
			width: '100%',
			marginRight: 0
		}
	},
	columnRight: {
		marginBottom: 16,
		[theme.breakpoints.up('md')]: {
			width: '49%',
			marginLeft: 4
		},
		[theme.breakpoints.down('md')]: {
			width: '100%',
			marginLeft: 0
		}
	}
}));

function AdsDialog(props) {
	// const dispatch = useDispatch();
	const classes = useStyles();
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
			maxWidth="sm"
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
					className={classes.columnLeft} // w-full md:w-1/2 ml-0 md:ml-8
					label="Type"
					autoFocus
					id="type"
					name="type"
					inputRef={register({
						required: true
					})}
					error={errors.type && errors.type.type === 'required'}
					helperText={errors.type && errors.type.type === 'required' && 'Please Enter Type'}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<TextField
					className={classes.columnRight} // w-full md:w-1/2 ml-0 md:ml-8
					label="Client Name"
					id="client_name"
					name="client_name"
					inputRef={register({
						required: true
					})}
					error={errors.client_name && errors.client_name.type === 'required'}
					helperText={
						errors.client_name && errors.client_name.type === 'required' && 'Please Enter Client Name'
					}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<TextField
					className={classes.columnLeft} // w-full md:w-1/2 ml-0 md:ml-8
					id="start_date"
					label="Start Date"
					type="date"
					name="start_date"
					InputLabelProps={{
						shrink: true
					}}
					inputRef={register({
						required: true
					})}
					error={errors.start_date && errors.start_date.type === 'required'}
					helperText={errors.start_date && errors.start_date.type === 'required' && 'Please Enter Start Date'}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<TextField
					className={classes.columnRight} // w-full md:w-1/2 ml-0 md:ml-8
					id="end_date"
					label="End Date"
					type="date"
					name="end_date"
					InputLabelProps={{
						shrink: true
					}}
					inputRef={register({
						required: true
					})}
					error={errors.end_date && errors.end_date.type === 'required'}
					helperText={errors.end_date && errors.end_date.type === 'required' && 'Please Enter End Date'}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<TextField
					className={classes.columnLeft} // w-full md:w-1/2 ml-0 md:ml-8
					label="code"
					id="code"
					name="code"
					inputRef={register({
						required: true
					})}
					error={errors.code && errors.code.type === 'required'}
					helperText={errors.code && errors.code.type === 'required' && 'Please Enter code'}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<TextField
					className={classes.columnRight} // w-full md:w-1/2 ml-0 md:ml-8
					label="Link URL"
					id="link_url"
					name="link_url"
					inputRef={register({
						required: true
					})}
					error={errors.link_url && errors.link_url.type === 'required'}
					helperText={errors.link_url && errors.link_url.type === 'required' && 'Please Enter Link URL'}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<TextField
					className={classes.columnLeft} // w-full md:w-1/2 ml-0 md:ml-8
					label="Total Impression"
					id="total_impression"
					name="total_impression"
					type="number"
					inputRef={register({
						required: true
					})}
					error={errors.total_impression && errors.total_impression.type === 'required'}
					helperText={
						errors.total_impression &&
						errors.total_impression.type === 'required' &&
						'Please Enter Total Impression'
					}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<TextField
					className={classes.columnRight} // w-full md:w-1/2 ml-0 md:ml-8
					label="Total Clicks"
					id="total_clicks"
					name="total_clicks"
					type="number"
					inputRef={register({
						required: true
					})}
					error={errors.total_clicks && errors.total_clicks.type === 'required'}
					helperText={
						errors.total_clicks && errors.total_clicks.type === 'required' && 'Please Enter Total Clicks'
					}
					variant="outlined"
					fullWidth
					size="small"
				/>
				<ImageUpload
					className="mb-16"
					// handleImageId={handleImageId}
					// handleClearImageId={handleClearImageId}
					// position="spouseData"
					// admin={(admin && admin) || {}}
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
export default AdsDialog;

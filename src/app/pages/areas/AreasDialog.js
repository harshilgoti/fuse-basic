import React, { useState, useEffect } from 'react';
// import axios from 'config/axios';
import { TextField, Button, Dialog, Typography, Toolbar, AppBar, CircularProgress } from '@material-ui/core';
import { useForm } from '@fuse/hooks';
import {
	// useDispatch,
	useSelector
} from 'react-redux';
// import IntlMessages from "../../../util/IntlMessages";
// import { addAreas, editAreas, uploadImage, uploadImageUrlHandling } from 'app/store/actions';
import ImageUpload from '../../components/ImageUpload';
import GoogleMap from '../../components/GeneralMap';

function AreasDialog(props) {
	// const dispatch = useDispatch();
	const { addAreasLoading, fetchAreasList, editAreasLoading } = useSelector(({ fuse }) => fuse.areas);

	// const { uploadImageLoading, uploadImageUrl } = useSelector(({ fuse }) => fuse.common);

	// const [imageFile, setImageFile] = useState();
	// const [imageFileURL, setImageFileURL] = useState();
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);

	const [isEditMode, setEditMode] = useState(false);
	const defaultFormState = {
		name: '',
		pincord: '',
		image_url: ''
	};

	const { form, handleChange, setInForm } = useForm(defaultFormState);
	useEffect(() => {
		//dispatch(uploadImageUrlHandling());

		Object.keys(props.area).length ? setEditMode(true) : setEditMode(false);
		if (isEditMode) {
			const { name, pincord, image_url } = props.area;
			setInForm('name', name || '');
			setInForm('pincord', pincord || '');
			setInForm('image_url', image_url || '');
		}
	}, [props.area, isEditMode, fetchAreasList]); // eslint-disable-line
	useEffect(() => {
		//setInForm('image_url', uploadImageUrl || props.area.image_url || '');
	}, []); // eslint-disable-line

	function canBeSubmitted() {
		return form.name && form.pincord;
	}

	// function handleAddLanguageSuccess() {
	// 	props.close();
	// }

	function handleLanguageDetail(ev) {
		ev.preventDefault();

		// const body = {
		// 	name: form.name,
		// 	pincord: form.pincord,
		// 	image_url: form.image_url,
		// 	_id: isEditMode ? props.area._id : 2
		// };
		// isEditMode
		// 	? dispatch(editAreas(body, handleAddLanguageSuccess))
		// 	: dispatch(addAreas(body, handleAddLanguageSuccess));
	}

	function handleLocation(l, n) {
		setLat(l);
		setLng(n);
	}

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
						{isEditMode ? 'Edit Area' : 'Add Area'}
					</Typography>
				</Toolbar>
			</AppBar>
			<form
				name="employerForm"
				noValidate
				className="flex flex-wrap justify-between w-full p-16"
				onSubmit={handleLanguageDetail}
			>
				<TextField
					className="mb-16" // w-full md:w-1/2 ml-0 md:ml-8
					label="Name"
					autoFocus
					id="name"
					name="name"
					value={form.name}
					onChange={handleChange}
					variant="outlined"
					required
					fullWidth
					size="small"
				/>
				<TextField
					className="mb-16" // w-full md:w-1/2 ml-0 md:ml-8
					label="Pincord"
					id="pincord"
					name="pincord"
					value={form.pincord}
					onChange={handleChange}
					variant="outlined"
					required
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
				<GoogleMap handleLocation={handleLocation} lat={lat} lng={lng} />

				<div className="flex justify-end align-center">
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
						disabled={!canBeSubmitted() || addAreasLoading || editAreasLoading}
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

export default AreasDialog;

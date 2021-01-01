import React, { useState, useEffect } from 'react';
// import axios from 'config/axios';
import { TextField, Button, Dialog, Typography, Toolbar, AppBar, CircularProgress } from '@material-ui/core';
import FuseChipSelect from '@fuse/core/FuseChipSelect';
import {
	// useDispatch,
	useSelector
} from 'react-redux';
// import IntlMessages from "../../../util/IntlMessages";
// import { addAreas, editAreas, uploadImage, uploadImageUrlHandling } from 'app/store/actions';
import ImageUpload from '../../components/ImageUpload';
// import GoogleMap from '../../components/GeneralMap';
import { useForm } from 'react-hook-form';
const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
];
function AreasDialog(props) {
	// const dispatch = useDispatch();
	const {
		addAreasLoading,
		// fetchAreasList,
		editAreasLoading
	} = useSelector(({ fuse }) => fuse.areas);
	// const { uploadImageLoading, uploadImageUrl } = useSelector(({ fuse }) => fuse.common);
	// const [imageFile, setImageFile] = useState();
	// const [imageFileURL, setImageFileURL] = useState();
	// const [lat, setLat] = useState(null);
	// const [lng, setLng] = useState(null);
	const [
		isEditMode
		// setEditMode
	] = useState(false);
	const defaultValues = {
		name: '',
		reactSelect: []
	};
	const { register, handleSubmit, setValue } = useForm({ defaultValues });
	// useEffect(() => {
	// 	//dispatch(uploadImageUrlHandling());
	// 	Object.keys(props.area).length ? setEditMode(true) : setEditMode(false);
	// 	if (isEditMode) {
	// 		const { name, pincord, image_url } = props.area;
	// 		setInForm('name', name || '');
	// 		setInForm('pincord', pincord || '');
	// 		setInForm('image_url', image_url || '');
	// 	}
	// }, [props.area, isEditMode, fetchAreasList]); // eslint-disable-line
	function canBeSubmitted() {
		return true;
	}
	// function handleAddLanguageSuccess() {
	// 	props.close();
	// }
	// function handleLanguageDetail(ev) {
	// 	ev.preventDefault();
	// 	const body = {
	// 		name: form.name,
	// 		pincord: form.pincord,
	// 		image_url: form.image_url,
	// 		_id: isEditMode ? props.area._id : 2
	// 	};
	// 	isEditMode
	// 		? dispatch(editAreas(body, handleAddLanguageSuccess))
	// 		: dispatch(addAreas(body, handleAddLanguageSuccess));
	// }
	// function handleLocation(l, n) {
	// 	setLat(l);
	// 	setLng(n);
	// }
	const [values, setReactSelect] = useState({
		selectedOption: []
	});
	const handleMultiChange = selectedOption => {
		setValue('reactSelect', selectedOption);
		setReactSelect({ selectedOption });
	};
	useEffect(() => {
		//setInForm('image_url', uploadImageUrl || props.area.image_url || '');
		// if (true) {
		// 	setValue('reactSelect', [...options.filter(el => el.value === 'vanilla')]);
		// 	setReactSelect({ selectedOption: [...options.filter(el => el.value === 'vanilla')] });
		// }
	}, []); // eslint-disable-line
	//   useEffect(() => {
	// 	register({ name: 'reactSelect' });
	//   }, []); // eslint-disable-line
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
						{isEditMode ? 'Edit Area' : 'Add Area'}
					</Typography>
				</Toolbar>
			</AppBar>
			<form className="flex flex-wrap justify-between w-full p-16" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className="mb-16" // w-full md:w-1/2 ml-0 md:ml-8
					label="Name"
					autoFocus
					id="name"
					name="name"
					inputRef={register}
					// onChange={handleChange}
					variant="outlined"
					required
					fullWidth
					size="small"
				/>
				<FuseChipSelect
					className="w-full mb-16"
					placeholder="Select multiple pincode*"
					inputRef={register}
					name="reactSelect"
					textFieldProps={{
						variant: 'outlined'
					}}
					value={values.selectedOption}
					options={options}
					onChange={handleMultiChange}
					isMulti
				/>
				<ImageUpload
					className="mb-16"
					// handleImageId={handleImageId}
					// handleClearImageId={handleClearImageId}
					// position="spouseData"
					// admin={(admin && admin) || {}}
				/>
				{/* <GoogleMap handleLocation={handleLocation} lat={lat} lng={lng} /> */}
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

import React, { useState, useRef } from 'react';

import { Button, Card, Icon, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import axios from 'config/axios';
// import PropTypes from 'prop-types';
// import { addAreas, editAreas, uploadImage, uploadImageUrlHandling } from 'app/store/actions';
import // useDispatch,
// useSelector
'react-redux';

const useStyles = makeStyles(theme => ({
	avatar: {
		width: '300px',
		height: '200px',
		borderRadius: '4px'
	},
	howToTakeAvatar: {
		width: '300px',
		height: '120px',
		borderRadius: '4px'
		// marginBottom:"8px"
	},
	card: {
		minHeight: '170px',
		minWidth: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		backgroundColor: 'lightgray',
		marginBottom: '16px'
	},
	howToTakePhoto: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		height: '100%',
		width: '100%'
	},
	closeIcon: {
		position: 'absolute',
		top: '6px',
		right: '10px',
		cursor: 'pointer'
	},
	button: {
		height: '32px',
		bottom: '0px'
	},
	howToTakeAvatarButton: {
		height: '32px',
		bottom: '0px',
		marginBottom: '24px'
	}
}));

function ImageUpload(props) {
	const classes = useStyles();
	// const dispatch = useDispatch();

	const inputFileRef = useRef(null);
	const [imageFileURL, setImageFileURL] = useState();
	const [
		loading
		//  setLoading
	] = useState();

	const handleChangeImage = e => {
		e.preventDefault();

		let file = e.target.files[0];

		if (!file) {
			return;
		}

		//	dispatch(uploadImage(file, 'employee'));
		setImageFileURL(file);
	};

	function handleClearImageUrl() {
		setImageFileURL('');
		props.handleClearImageId(props.position, props.index);
	}

	const handleInputIconClick = () => {
		inputFileRef.current.click();
	};
	return (
		<Card className={classes.card}>
			{loading && <CircularProgress />}
			{imageFileURL ? (
				<>
					<Icon className={classes.closeIcon} onClick={handleClearImageUrl}>
						close
					</Icon>

					<img className={classes.avatar} src={imageFileURL} alt="avatar" />
				</>
			) : (
				<>
					<input
						ref={inputFileRef}
						id="myInput"
						style={{ display: 'none' }}
						type="file"
						onChange={handleChangeImage}
						accept="image/*"
					/>
					{!loading && (
						<Button
							onClick={handleInputIconClick}
							variant="contained"
							color="primary"
							className={classes.button}
							startIcon={<CloudUploadIcon />}
						>
							upload image
						</Button>
					)}
				</>
			)}
		</Card>
	);
}

// ImageUpload.propTypes = {
//   admin: PropTypes.object.isRequired
// };

export default ImageUpload;

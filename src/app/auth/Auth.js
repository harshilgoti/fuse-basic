import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { hideMessage, showMessage } from 'app/store/fuse/messageSlice';

import { setUserDataFirebase, setUserDataAuth0, setUserData, logoutUser } from './store/userSlice';

class Auth extends Component {
	state = {
		waitAuthCheck: true
	};


	render() {
		return <>{this.props.children}</>;
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			logout: logoutUser,
			setUserData,
			setUserDataAuth0,
			setUserDataFirebase,
			showMessage,
			hideMessage
		},
		dispatch
	);
}

export default connect(null, mapDispatchToProps)(Auth);

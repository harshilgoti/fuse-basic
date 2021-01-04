import FuseUtils from '@fuse/utils';
import AppContext from 'app/AppContext';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';

class FuseAuthorization extends Component {
	constructor(props, context) {
		super(props);
		const { routes } = context;
		this.state = {
			accessGranted: true,
			routes
		};
	}

	componentDidMount() {
		if (!this.state.accessGranted) {
			this.redirectRoute();
		}
	}
	componentDidUpdate() {
		if (!this.state.accessGranted) {
			this.redirectRoute();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.accessGranted !== this.state.accessGranted;
	}

	static getDerivedStateFromProps(props, state) {
		const { location, userRole } = props;
		const { pathname } = location;

		const matched = matchRoutes(state.routes, pathname)[0];

		const isTokenAvialable = FuseUtils.hasPermission(matched.route.auth, userRole)
			? localStorage.getItem('user-token')
				? false
				: true
			: false;

		if (
			(matched && matched.route.isAuth && isTokenAvialable) ||
			(matched && !matched.route.isAuth && !isTokenAvialable)
		) {
			return {
				accessGranted: false
			};
		} else {
			return {
				accessGranted: matched ? FuseUtils.hasPermission(matched.route.auth, userRole) : true
			};
		}
	}

	redirectRoute() {
		// 		const { location, userRole, history } = this.props;
		// 		const { pathname, state } = location;
		// 		const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';
		// console.log("redirectRoute",userRole,redirectUrl)
		// 		/*
		//         User is guest
		//         Redirect to Login Page
		//         */
		// 		if (!userRole || userRole.length === 0) {
		// 			history.push({
		// 				pathname: '/login',
		// 				state: { redirectUrl: pathname }
		// 			});
		// 		} else {
		// 			/*
		//         User is member
		//         User must be on unAuthorized page or just logged in
		//         Redirect to dashboard or redirectUrl
		//         */
		// 			history.push({
		// 				pathname: redirectUrl
		// 			});
		// 		}

		const { location, history, userDetails } = this.props;
		const { pathname, state } = location;
		const matched = matchRoutes(this.state.routes, pathname)[0];
		const redirectUrl = state && state.redirectUrl && userDetails ? state.redirectUrl : pathname;
		if (matched) {
			if (matched.route.isAuth && !localStorage.getItem('user-token')) {
				history.push({
					pathname: '/login'
				});
			}
			//add first line conditions for email verify route
			if (
				// matched.route.path !== "/verify/email" &&
				!matched.route.isAuth &&
				localStorage.getItem('user-token')
			) {
				history.push({
					pathname: '/areas'
				});
			}
		} else {
			/*
		         User is member
		         User must be on unAuthorized page or just logged in
		         Redirect to dashboard or redirectUrl
		        */
			history.push({
				pathname: redirectUrl
			});
		}
	}

	render() {
		// console.info('Fuse Authorization rendered', accessGranted);
		return this.state.accessGranted ? <>{this.props.children}</> : null;
	}
}

function mapStateToProps({ auth }) {
	return {
		userRole: ['admin'],
		userDetails: auth.auth.user
	};
}

FuseAuthorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(FuseAuthorization));

import React from 'react';
import { authRoles } from 'app/auth';

const PincodesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/pincodes',
			component: React.lazy(() => import('./Pincodes')),
			isAuth: true
		}
	]
};

export default PincodesConfig;

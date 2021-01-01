import React from 'react';
import { authRoles } from 'app/auth';

const AreasConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/areas',
			component: React.lazy(() => import('./Areas')),
			isAuth: true
		}
	]
};

export default AreasConfig;

import React from 'react';
import { authRoles } from 'app/auth';

const CategoriesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/categories',
			component: React.lazy(() => import('./Categories')),
			isAuth: true
		}
	]
};

export default CategoriesConfig;

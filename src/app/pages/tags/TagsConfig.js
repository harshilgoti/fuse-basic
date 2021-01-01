import React from 'react';
import { authRoles } from 'app/auth';

const TagsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/tags',
			component: React.lazy(() => import('./Tags')),
			isAuth: true
		}
	]
};

export default TagsConfig;

import React from 'react';
import { authRoles } from 'app/auth';

const AdsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/ads',
			component: React.lazy(() => import('./Ads')),
			isAuth: true
		}
	]
};

export default AdsConfig;

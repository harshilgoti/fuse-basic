import React from 'react';
import { authRoles } from 'app/auth';

const AnalyticsDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/dashboard',
			component: React.lazy(() => import('./AnalyticsDashboardApp')),
			isAuth:true
		}
	]
};

export default AnalyticsDashboardAppConfig;

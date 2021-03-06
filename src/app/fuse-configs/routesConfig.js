import FuseUtils from '@fuse/utils';
import LoginConfig from 'app/pages/login/LoginConfig';
import AreasConfig from 'app/pages/areas/AreasConfig';
import CategoriesConfig from 'app/pages/categories/CategoriesConfig';
import PincodesConfig from 'app/pages/pincodes/PincodesConfig';
import AdsConfig from 'app/pages/ads/AdsConfig';
import TagsConfig from 'app/pages/tags/TagsConfig';
import React from 'react';
import { Redirect } from 'react-router-dom';

const routeConfigs = [LoginConfig, AreasConfig, CategoriesConfig, PincodesConfig, AdsConfig, TagsConfig];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/login" />
	},
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;

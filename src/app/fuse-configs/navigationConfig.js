import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'areas',
				title: 'Areas',
				translate: 'Areas',
				icon: 'language',
				type: 'item',
				url: '/areas'
			},
			{
				id: 'categorys',
				title: 'Categorys',
				translate: 'Categorys',
				icon: 'language',
				type: 'item',
				url: '/categories'
			},
			{
				id: 'pincodes',
				title: 'Pincodes',
				translate: 'Pincodes',
				icon: 'language',
				type: 'item',
				url: '/pincodes'
			},
			{
				id: 'tags',
				title: 'Tags',
				translate: 'Tags',
				icon: 'language',
				type: 'item',
				url: '/tags'
			},
			{
				id: 'ads',
				title: 'Ads',
				translate: 'Ads',
				icon: 'language',
				type: 'item',
				url: '/ads'
			}
		]
	}
];

export default navigationConfig;

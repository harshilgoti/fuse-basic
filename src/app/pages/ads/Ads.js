import FusePageCarded from '@fuse/core/FusePageCarded';
import React, { useState } from 'react';
import AdsHeader from './AdsHeader';
import AdsTable from './AdsTable';
import AdsDialog from './AdsDialog';

function Ads() {
	const [isOpenAdsDialog, setOpenAdsDialog] = useState(false);
	const [currentAds, setCurrentLanguage] = useState({});
	const [searchText, setSearchText] = useState('');

	function handleOpenAdsDialog() {
		setOpenAdsDialog(true);
		setCurrentLanguage({});
	}

	function handleCloseAdsDialog() {
		setOpenAdsDialog(false);
	}
	function handleCurrentAds(ads) {
		setCurrentLanguage(ads);
		setOpenAdsDialog(true);
	}
	function handleSearchText(value) {
		setSearchText(value);
	}
	return (
		<React.Fragment>
			<FusePageCarded
				classes={{
					content: 'flex',
					contentCard: 'overflow-hidden',
					header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
				}}
				header={<AdsHeader isOpenAdsDialog={handleOpenAdsDialog} searchText={handleSearchText} />}
				content={<AdsTable currentAds={handleCurrentAds} searchText={searchText} />}
				innerScroll
			/>
			{isOpenAdsDialog && <AdsDialog open={isOpenAdsDialog} close={handleCloseAdsDialog} tag={currentAds} />}
		</React.Fragment>
	);
}

export default Ads;

import FusePageCarded from '@fuse/core/FusePageCarded';
import React, { useState } from 'react';
import AreasHeader from './PincodesHeader';
import AreasTable from './PincodesTable';
import AreasDialog from './PincodesDialog';

function Pincodes() {
	const [isOpenPincodeDialog, setOpenPincodeDialog] = useState(false);
	const [currentPincode, setCurrentPincode] = useState({});
	const [searchText, setSearchText] = useState('');

	function handleOpenAreaDialog() {
		setOpenPincodeDialog(true);
		setCurrentPincode({});
	}

	function handleClosePincodeDialog() {
		setOpenPincodeDialog(false);
	}
	function handleCurrentPincode(pincode) {
		setCurrentPincode(pincode);
		setOpenPincodeDialog(true);
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
				header={<AreasHeader isOpenPincodeDialog={handleOpenAreaDialog} searchText={handleSearchText} />}
				content={<AreasTable currentPincode={handleCurrentPincode} searchText={searchText} />}
				innerScroll
			/>
			{isOpenPincodeDialog && (
				<AreasDialog open={isOpenPincodeDialog} close={handleClosePincodeDialog} pincode={currentPincode} />
			)}
		</React.Fragment>
	);
}

export default Pincodes;

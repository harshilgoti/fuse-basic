import FusePageCarded from '@fuse/core/FusePageCarded';
import React, { useState } from 'react';
import PincodesHeader from './PincodesHeader';
import PincodesTable from './PincodesTable';
import PincodesDialog from './PincodesDialog';

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
				header={<PincodesHeader isOpenPincodeDialog={handleOpenAreaDialog} searchText={handleSearchText} />}
				content={<PincodesTable currentPincode={handleCurrentPincode} searchText={searchText} />}
				innerScroll
			/>
			{isOpenPincodeDialog && (
				<PincodesDialog open={isOpenPincodeDialog} close={handleClosePincodeDialog} pincode={currentPincode} />
			)}
		</React.Fragment>
	);
}

export default Pincodes;

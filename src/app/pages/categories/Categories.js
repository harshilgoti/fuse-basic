import FusePageCarded from '@fuse/core/FusePageCarded';
import React, { useState } from 'react';
import CategoriesHeader from './CategoriesHeader';
import CategoriesTable from './CategoriesTable';
import CategoriesDialog from './CategoriesDialog';

function Categories() {
	const [isOpenCategorieDialog, setOpenCategorieDialog] = useState(false);
	const [currentCategorie, setCurrentLanguage] = useState({});
	const [searchText, setSearchText] = useState('');

	function handleOpenCategorieDialog() {
		setOpenCategorieDialog(true);
		setCurrentLanguage({});
	}

	function handleCloseCategoriesDialog() {
		setOpenCategorieDialog(false);
	}
	function handleCurrentCategorie(categorie) {
		setCurrentLanguage(categorie);
		setOpenCategorieDialog(true);
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
				header={
					<CategoriesHeader isOpenCategorieDialog={handleOpenCategorieDialog} searchText={handleSearchText} />
				}
				content={<CategoriesTable currentCategorie={handleCurrentCategorie} searchText={searchText} />}
				innerScroll
			/>
			{isOpenCategorieDialog && (
				<CategoriesDialog
					open={isOpenCategorieDialog}
					close={handleCloseCategoriesDialog}
					categorie={currentCategorie}
				/>
			)}
		</React.Fragment>
	);
}

export default Categories;

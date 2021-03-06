import FusePageCarded from '@fuse/core/FusePageCarded';
import React, { useState } from 'react';
import TagsHeader from './TagsHeader';
import TagsTable from './TagsTable';
import TagsDialog from './TagsDialog';

function Tags() {
	const [isOpenTagDialog, setOpenTagDialog] = useState(false);
	const [currentTag, setCurrentLanguage] = useState({});
	const [searchText, setSearchText] = useState('');

	function handleOpenTagDialog() {
		setOpenTagDialog(true);
		setCurrentLanguage({});
	}

	function handleCloseTagDialog() {
		setOpenTagDialog(false);
	}
	function handleCurrentTag(tag) {
		setCurrentLanguage(tag);
		setOpenTagDialog(true);
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
				header={<TagsHeader isOpenTagDialog={handleOpenTagDialog} searchText={handleSearchText} />}
				content={<TagsTable currentTag={handleCurrentTag} searchText={searchText} />}
				innerScroll
			/>
			{isOpenTagDialog && <TagsDialog open={isOpenTagDialog} close={handleCloseTagDialog} tag={currentTag} />}
		</React.Fragment>
	);
}

export default Tags;

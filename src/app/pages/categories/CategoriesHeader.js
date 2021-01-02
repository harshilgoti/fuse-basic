import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import {
	//  useDispatch,
	useSelector
} from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
function AreasHeader({ isOpenCategorieDialog }) {
	const mainTheme = useSelector(selectMainTheme);
	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex flex-1 items-center justify-start px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideDownIn" delay={300}>
						<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8 shadow">
							<Icon color="action">search</Icon>
							<Input
								placeholder="Search"
								className="flex flex-1 mx-8"
								disableUnderline
								fullWidth
								//value={searchText}
								inputProps={{
									'aria-label': 'Search'
								}}
								//onChange={ev => dispatch(setProductsSearchText(ev))}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>
			<FuseAnimate animation="transition.slideRightIn" delay={300}>
				<Button
					className="whitespace-nowrap normal-case"
					variant="contained"
					color="secondary"
					onClick={() => isOpenCategorieDialog(true)}
				>
					<span className="hidden sm:flex">Add New Categorie</span>
					<span className="flex sm:hidden">New</span>
				</Button>
			</FuseAnimate>
		</div>
	);
}
export default AreasHeader;

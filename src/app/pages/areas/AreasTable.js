import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import AreasTableHead from './AreasTableHead';
import { getAreasList } from '../../store/fuse/areasSlice';
function AreasTable(props) {
	const dispatch = useDispatch();
	const { fetchAreasListLoading, fetchAreasList } = useSelector(({ fuse }) => fuse.areas);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});
	let filteredData = fetchAreasList;
	useEffect(() => {
		!fetchAreasList.length && dispatch(getAreasList());
	}, [filteredData.length]); // eslint-disable-line
	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';
		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}
		setOrder({
			direction,
			id
		});
	}
	function handleChangePage(event, value) {
		setPage(value);
	}
	function handleChangeRowsPerPage(event) {
		setRowsPerPage(event.target.value);
	}
	if (fetchAreasListLoading) {
		return <FuseLoading />;
	}
	if (filteredData.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There are no areas!
					</Typography>
				</div>
			</FuseAnimate>
		);
	}
	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
					<AreasTableHead order={order} onRequestSort={handleRequestSort} rowCount={filteredData.length} />
					<TableBody>
						{_.orderBy(
							filteredData,
							[
								o => {
									switch (order.id) {
										case 'categories': {
											return o.categories[0];
										}
										default: {
											return o[order.id];
										}
									}
								}
							],
							[order.direction]
						)
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((n, i) => {
								return (
									<TableRow
										className="h-64 cursor-pointer"
										// hover
										tabIndex={-1}
										key={i}
									>
										<TableCell
											className="w-52 px-4 md:px-0"
											component="th"
											scope="row"
											padding="none"
										>
											<img
												className="w-full block rounded"
												src="assets/images/ecommerce/product-image-placeholder.png"
												alt={n.name}
											/>
										</TableCell>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											1
										</TableCell>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											1
										</TableCell>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											1
										</TableCell>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											1
										</TableCell>
										<TableCell className="p-4 md:p-16" component="th" scope="row">
											1
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</FuseScrollbars>
			<TablePagination
				className="flex-shrink-0 border-t-1"
				component="div"
				count={filteredData.length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page'
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page'
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
}
export default withRouter(AreasTable);

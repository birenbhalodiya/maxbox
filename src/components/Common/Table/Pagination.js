import { Box, TablePagination } from '@mui/material'
import React from 'react'

const Pagination = ({ totalData, page, setPage, rowsPerPage, setRowsPerPage }) => {

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box>
            <TablePagination
                component="div"
                count={totalData}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[]}
            />
        </Box>
    )
}

export default Pagination
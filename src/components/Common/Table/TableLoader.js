import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableLoader = ({ colspan }) => {
  const rows = 10;  // Fixed number of rows

  return Array.from({ length: rows }).map((row, rowIndex) => (
    <TableRow key={rowIndex} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {Array.from({ length: colspan }).map((col, colIndex) => (
        <TableCell key={colIndex}>
          <Skeleton animation="wave" variant="text" width={'100%'} height={30} />
        </TableCell>
      ))}
    </TableRow>
  ));
};

export default TableLoader;

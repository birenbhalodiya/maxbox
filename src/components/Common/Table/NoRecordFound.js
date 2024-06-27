import { TableCell, TableRow } from "@mui/material";
import React from "react";

function NoRecordFound({ colspan }) {
  return (
    <TableRow>
      <TableCell
        className="no_found_data"
        sx={{
          color: "silver",
          textAlign: "center",
          borderBottom: "none",
          fontSize: "30px",
        }}
        colSpan={colspan}
      >
        No records to display
      </TableCell>
    </TableRow>
  );
}

export default NoRecordFound;

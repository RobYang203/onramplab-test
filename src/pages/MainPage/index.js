import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import { Paper, Table, TableCell, TableHead, TableRow } from '@material-ui/core';

const HEADERS = ['State', 'City', 'Houses', 'Avg. Price'];

function MainPage() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {HEADERS.map((header, i) => {
            return <TableCell id={`table-header-${i}`}>{header}</TableCell>;
          })}
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default MainPage;

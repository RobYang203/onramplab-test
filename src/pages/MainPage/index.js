import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

const HEADERS = ['State', 'City', 'Houses', 'Avg. Price'];

function MainPage() {
  const properties = useSelector(({ properties }) => properties);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {HEADERS.map((header, i) => {
              return (
                <TableCell key={`table-header-${header}`}>{header}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.list.map(({ state, city, totalCount, avg }) => {
            return (
              <TableRow key={`table-row-${state}-${city}`}>
                <TableCell>{state}</TableCell>
                <TableCell>{city}</TableCell>
                <TableCell>{totalCount}</TableCell>
                <TableCell>{avg}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MainPage;

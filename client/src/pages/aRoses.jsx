import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(f1, plus, f2, equals, f3) {
  return { f1, plus, f2, equals, f3 };
}

const rows = [
  createData('Roses-Red',     '+', 'Roses-Yellow',  '=', 'Roses-Orange'),
  createData('Roses-Red',     '+', 'Roses-Red',     '=', 'Roses-Black'),
  createData('Roses-Red',     '+', 'Roses-Red',     '=', 'Roses-Pink'),
  createData('Roses-Red',     '+', 'Roses-White',   '=', 'Roses-Pink'),
  createData('Roses-White',   '+', 'Roses-White',   '=', 'Roses-Purple'),
  createData('Roses-Black',   '+', 'Roses-Yellow',  '=', 'Roses-Orange'),
  createData('Roses-Orange',  '+', 'Roses-Purple',  '=', 'Roses-Red2'),
  createData('Roses-Red2',    '+', 'Roses-Red2',    '=', 'Roses-Blue'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">{row.f1}</TableCell>
              <TableCell align="right">{row.plus}</TableCell>
              <TableCell align="right">{row.f2}</TableCell>
              <TableCell align="right">{row.equals}</TableCell>
              <TableCell align="right">{row.f3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

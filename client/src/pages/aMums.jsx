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
  createData('Mums-Red',    '+', 'Mums-White',  '=', 'Mums-Pink'),
  createData('Mums-White',  '+', 'Mums-White',  '=', 'Mums-Purple'),
  createData('Mums-Red',    '+', 'Mums-Yellow', '=', 'Mums-Yellow'),
  createData('Mums-Yellow', '+', 'Mums-Yellow', '=', 'Mums-Green'),
  createData('Mums-Yellow', '+', 'Mums-Yellow', '=', 'Mums-Purple'),
  createData('Mums-Purple', '+', 'Mums-Purple', '=', 'Mums-Green'),
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

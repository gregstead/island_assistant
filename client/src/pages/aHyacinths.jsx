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
  createData('Hyacinth-Red',    '+', 'Hyacinth-Yellow', '=', 'Hyacinth-Orange'),
  createData('Hyacinth-Red',    '+', 'Hyacinth-White',  '=', 'Hyacinth-Pink'),
  createData('Hyacinth-White',  '+', 'Hyacinth-White',  '=', 'Hyacinth-Blue'),
  createData('Hyacinth-Orange', '+', 'Hyacinth-Orange', '=', 'Hyacinth-Purple'),
  createData('Hyacinth-Blue',   '+', 'Hyacinth-Blue',   '=', 'Hyacinth-Purple'),
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

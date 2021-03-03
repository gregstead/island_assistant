import React, { useEffect, useState } from "react";
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@material-ui/core";
import "../../pages/pages.css"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(f1, plus, f2, equals, f3) {
  return { f1, plus, f2, equals, f3 };
}

export default function FlowerTab({ flowers = [] }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(flowers.map((flower) => createData(<img id="flower-size" src={flower.f1Path} />, "+", <img id="flower-size" src={flower.f2Path} />, "=", <img id="flower-size" src={flower.f3Path} />)));
  }, [flowers]);

  return (
    <TableContainer id="card-background" component={Paper}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map((row) => (
          <TableRow>
            <TableCell id="sign" align="right">{row.f1}</TableCell>
            <TableCell id="sign" align="right">{row.plus}</TableCell>
            <TableCell id="sign" align="right">{row.f2}</TableCell>
            <TableCell id="sign" align="right">{row.equals}</TableCell>
            <TableCell id="sign" align="right">{row.f3}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

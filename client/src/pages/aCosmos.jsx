import React, { useEffect, useState } from "react";
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@material-ui/core";
import flowers from "../utils/flowers.json";
import "./pages.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(f1, plus, f2, equals, f3) {
  return { f1, plus, f2, equals, f3 };
}

export default function BasicTable(props) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const newRows = [];
    flowers.filter((flower) => {
      if (flower.category === props.category) {
        newRows.push(createData(<img id="flower-size" src={flower.f1Path} />, "+", <img id="flower-size" src={flower.f2Path} />, "=", <img id="flower-size" src={flower.f3Path} />));
      }
    });
    setRows(newRows);
  }, []);

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

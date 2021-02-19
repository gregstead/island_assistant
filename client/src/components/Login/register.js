import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function RegisterTextFields() {
  const classes = useStyles();

  return (
    //<div className={classes.root}>
    <Container maxWidth='sm'>
      <TextField
        id="outlined-full-width" label="First Name" style={{margin: 12}} placeholder="First Name" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
         <TextField
        id="outlined-full-width" label="Last Name" style={{margin: 12}} placeholder="Last Name" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
         <TextField
        id="outlined-full-width" label="User Name" style={{margin: 12}} placeholder="User Name" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
      <TextField
        id="outlined-full-width" label="Email" style={{ margin: 12 }} placeholder="Email" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
      <TextField
        id="outlined-full-width" label="Password" style={{ margin: 12 }} placeholder="Password" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
      <TextField
        id="outlined-full-width" label="Friend Code" style={{ margin: 12 }} placeholder="Friend Code" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
      <TextField
        id="outlined-full-width" label="Dream Address" style={{ margin: 12 }} placeholder="Dream Address" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
      <TextField
        id="outlined-full-width" label="Location" style={{ margin: 12 }} placeholder="Location" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
     <Button variant="contained" style={{ margin: 12 }} color="Primary">Enter</Button>
    </Container>
    //</div>
  );
}

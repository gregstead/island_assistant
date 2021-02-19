import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';


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

export default function LoginTextFields() {
    
  const classes = useStyles();

  return (
  //  <div className={classes.root}>
  <Container maxWidth='sm'>
      <TextField
        id="outlined-full-width" label="User Name" style={{margin: 12}} placeholder="User Name" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
     <TextField
        id="outlined-full-width" label="Password" style={{ margin: 12 }} placeholder="Password" helperText="" fullWidth margin="normal" InputLabelProps={{shrink: true}} variant="outlined"/>
       <Button variant="contained" style={{ margin: 12 }} color="Primary">Enter</Button>
 </Container>
  //  </div>
  );
}
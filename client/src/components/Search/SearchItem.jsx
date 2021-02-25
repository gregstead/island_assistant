import React from "react";
import { Box, Button, Container, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1), width: "25ch" },
}));

export default function SearchItem(props) {
  const classes = useStyles();

  return (
    //  <div className={classes.root}>
      <Container maxWidth="sm" style={{ alignItems: "center" }}>
        <Box style={{ fontSize: "50px", height: "50px", marginBottom: "30px", marginTop: "50px", textAlign: "center" }}>Items</Box>
        
        <TextField style={{ alignItems: "center" }}
          onChange={props.handleInputChange} 
          value={props.search} 
          placeholder="Search for Items Here" 
          helperText="" 
          InputLabelProps={{ shrink: true }} 
          variant="outlined" 
          style={{ justifyContent: "center" }}
        />

        <Button 
          onClick={props.handleClick} 
          variant="contained" 
          color="Primary" 
          style={{ height: "55px" }}>Enter
        </Button>

      </Container>
    //  </div>
  );
}

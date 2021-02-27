import React from "react";
import { Box, Container, makeStyles, TextField } from "@material-ui/core";
import BtnStyle from "../Button/Button";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1), width: "25ch" },
}));

export default function SearchVillager(props) {
  const classes = useStyles();

  return (
    //  <div className={classes.root}>
      <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box style={{ fontFamily: "FinkHeavy", fontSize: "50px", height: "50px", marginBottom: "30px", marginTop: "90px", textAlign: "center" }}>Villager</Box>
        
        <TextField
          helperText=""
          InputLabelProps={{ shrink: true }} 
          onChange={props.handleInputChange}
          placeholder="Search for Villager Here" 
          value={props.search} 
          variant="outlined" 
          style={{ backgroundColor: "mintcream", justifyContent: "center", margin: "auto" }}
        />

        <BtnStyle 
          onClick={props.handleClick} 
          variant="contained" 
        >
          Enter
        </BtnStyle>

      </Container>
    //  </div>
  );
}

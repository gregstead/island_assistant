import React from "react";
import { Box, Container, makeStyles, TextField } from "@material-ui/core";
import BtnStyle from "../Button/Button";
import "../../pages/pages.css"

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1), width: "25ch" },
}));

export default function SearchVillager(props) {
  const classes = useStyles();

  return (
    <Container id="villager-search" maxWidth="sm">
      <Box id="page-header">Villager</Box>
      
      <TextField
        helperText=""
        InputLabelProps={{ shrink: true }} 
        onChange={props.handleInputChange}
        placeholder="Search for Villager Here" 
        value={props.search} 
        variant="outlined" 
        // id="villager-input"
        style={{ backgroundColor: "mintcream", justifyContent: "center", margin: "auto" }}
      />

      <BtnStyle 
        onClick={props.handleClick} 
        variant="contained" 
      >
      </BtnStyle>

    </Container>
  );
}

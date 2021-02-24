import React, { useState } from "react";
import { Box, Container, makeStyles, TextField } from "@material-ui/core";
import Image from "material-ui-image";
import BtnStyle from "../Button/Button";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1), width: "25ch" },
}));

export default function RegisterTextFields() {
  const [registerState, setRegisterState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    friendCode: "",
    dreamAddress: "",
  });
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
    API.userRegister(registerState);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterState({
      ...registerState,
      [name]: value,
    });
  }

  return (
    // <div className={classes.root}>
    <Container maxWidth="sm">
      <Box style={{ fontSize: "50px", height: "50px", marginBottom: "15px", textAlign: "center" }}>Registration</Box>

      {/* <Image src="../../images/welcome.jpg" style={{ border: "solid", height: "50%", marginBottom: "20px" }} /> */}
      <Image src="../../images/welcome.jpg" style={{ border: "solid", height: "50%", marginBottom: "20px" }} />
      
      <TextField
        fullWidth margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="First Name"
        onChange={handleChange}
        placeholder="First Name"
        variant="outlined"
      />
      <TextField
        fullWidth margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Last Name"
        onChange={handleChange}
        placeholder="Last Name"
        variant="outlined"
      />
      <TextField
        fullWidth margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Username"
        onChange={handleChange}
        placeholder="Username"
        variant="outlined"
      />
      <TextField
        fullWidth margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Email"
        onChange={handleChange}
        placeholder="Email"
        variant="outlined"
      />
      <TextField
        fullWidth margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        variant="outlined"
      />
      <TextField
        fullWidth margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Friend Code"
        onChange={handleChange}
        placeholder="Friend Code"
        variant="outlined"
      />
      <TextField
        fullWidth margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Dream Address"
        onChange={handleChange}
        placeholder="Dream Address"
        variant="outlined"
      />

      <BtnStyle onClick={handleSubmit} variant="contained"></BtnStyle>

    </Container>
    // </div>
  );
}

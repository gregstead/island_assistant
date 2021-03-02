import React, { useState } from "react";
import { Box, Container, makeStyles, TextField } from "@material-ui/core";
// import Image from "material-ui-image";
import BtnStyle from "../Button/Button";
import API from "../../utils/API";
import "../../pages/pages.css"

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
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
    console.log(registerState);
    API.userRegister(registerState);

    setRegisterState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      friendCode: "",
      dreamAddress: "",
    });
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
      <Box id="page-header">Registration</Box>

      {/* <Image src="../../images/welcome.jpg" style={{ border: "solid", height: "50%", marginBottom: "20px" }} /> */}

      <TextField
        id="register-input"
        fullWidth
        margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="First Name"
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
        variant="outlined"
      />
      <TextField
        id="register-input"
        fullWidth
        margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
        variant="outlined"
      />
      <TextField
        id="register-input"
        fullWidth
        margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Username"
        name="username"
        onChange={handleChange}
        placeholder="Username"
        variant="outlined"
      />
      <TextField
        id="register-input"
        fullWidth
        margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        variant="outlined"
      />
      <TextField
        id="register-input"
        fullWidth
        margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
        variant="outlined"
      />
      <TextField
        id="register-input"
        fullWidth
        margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Friend Code"
        name="friendCode"
        onChange={handleChange}
        placeholder="Friend Code"
        variant="outlined"
      />
      <TextField
        id="register-input"
        fullWidth
        margin="normal"
        helperText=""
        InputLabelProps={{ shrink: true }}
        label="Dream Address"
        name="dreamAddress"
        onChange={handleChange}
        placeholder="Dream Address"
        variant="outlined"
      />

      <BtnStyle onClick={handleSubmit} variant="contained"></BtnStyle>
    </Container>
    // </div>
  );
}

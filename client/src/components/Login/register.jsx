import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  makeStyles,
  Row,
  TextField,
} from "@material-ui/core";
import Image from "material-ui-image";
import API from "../../utils/API";

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
      <Box
        style={{
          fontSize: "50px",
          height: "50px",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        Registration
      </Box>

      <Image
        src="../../images/welcome.jpg"
        style={{ border: "solid", height: "50%", marginBottom: "20px" }}
      />
      <TextField
        name="firstName"
        label="First Name"
        placeholder="First Name"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email"
        placeholder="Email"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="password"
        label="Password"
        placeholder="Password"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleChange}
        type="password"
      />
      <TextField
        name="friendCode"
        label="Friend Code"
        placeholder="Friend Code"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="dreamAddress"
        label="Dream Address"
        placeholder="Dream Address"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        onChange={handleChange}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        color="Primary"
        style={{ marginTop: "15px" }}
      >
        Enter
      </Button>
    </Container>
    // </div>
  );
}

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Card from "../Animation";
import API from "../../utils/API";
// import "./Login.css";

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

function LoginTextFields() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    API.userLogin(loginState);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  }

  const classes = useStyles();
  //ref, handlechange, handlesubmit
  // have a reference - does library allow us to reference textfield as an object
  //
  return (
    <div className="login-container">
      <form action="">
        <Card />

        <Container maxWidth="sm">
          <FormControl>
            <TextField
              name="email"
              value={loginState.email}
              onChange={handleChange}
              id="email"
              label="Email"
              style={{ margin: 12 }}
              placeholder="Email"
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <TextField
              name="password"
              value={loginState.password}
              onChange={handleChange}
              id="password"
              label="Password"
              type="password"
              style={{ margin: 12 }}
              placeholder="Password"
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </FormControl>
          <Button
            variant="contained"
            style={{ margin: 12 }}
            color="primary"
            onClick={handleSubmit}
          >
            Enter
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default LoginTextFields;

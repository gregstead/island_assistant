import React, { useState } from "react";
import { Container, FormControl, makeStyles, TextField } from "@material-ui/core";
import Animation from "../Animation/Animation";
import BtnStyle from "../Button/Button";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  textField: { marginLeft: theme.spacing(1), marginRight: theme.spacing(1), width: "25ch" },
}));

function LoginTextFields() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    API.userLogin(loginState);
    setLoginState({
      email: "",
      password: "",
    });
    window.location.replace("/home");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  }

  const classes = useStyles();
  //ref, handleChange, handleSubmit
  //have a reference - does library allow us to reference textfield as an object

  return (
    <div className="login-container" style={{ display: "block", marginTop: "10%" }}>
      <Animation />

      <Container maxWidth="sm"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(4px)",
          borderRadius: "1em",
          boxShadow: "0px 10px 10px 0px grey",
          display: "flex",
          flexDirection: "column",
          marginTop: "12em", 
          padding: "1em",
          position: "relative",
        }}
      >

        <FormControl>
          <TextField
            id="email"
            label="Email"
            fullWidth margin="normal"
            helperText=""
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            placeholder="Email"
            value={loginState.email}
            variant="outlined"
          />
        </FormControl>

        <FormControl>
          <TextField
            id="password"
            label="Password"
            fullWidth margin="normal"
            helperText=""
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            value={loginState.password}
            variant="outlined"
          />
        </FormControl>

        <BtnStyle onClick={handleSubmit} variant="contained"></BtnStyle>

      </Container>
    </div>
  );
}

export default LoginTextFields;

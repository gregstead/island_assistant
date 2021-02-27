import React, { useState } from "react";
import { useHistory } from "react-router";
import { Box, Container, FormControl, makeStyles, TextField } from "@material-ui/core";
import { useAuth } from "../../userContext";
import Animation from "../Animation/Animation";
import BtnStyle from "../Button/Button";
import API from "../../utils/API";


const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexWrap: "wrap" },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function LoginTextFields() {
  const { setAuthTokens } = useAuth();
  const history = useHistory();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState({
    state: false,
  });
  const [isError, setIsError] = useState({
    state: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`I work`);
    API.userLogin(loginState)
      .then((result) => {
        console.log("result.status :>> ", typeof result.status);
        setLoginState({
          email: "",
          password: "",
        });
        if (result.status === 200) {
          setAuthTokens(result.data);

          setIsLoggedIn({
            state: true,
          });
          history.push("/home");

          console.log(isLoggedIn.state);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
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
    <div className="login-container" style={{ display: "block" }}>
      <Box
        style={{
          fontFamily: "FinkHeavy",
          fontSize: "50px",
          height: "50px",
          marginBottom: "30px",
          marginTop: "90px",
          textAlign: "center",
        }}
      >
        Login
      </Box>

      <Container
        maxWidth="xs"
        style={{
          backgroundColor: "rgba(244,244,244,0.5)",
          backdropFilter: "blur(3px)",
          borderRadius: "1em",
          boxShadow: "0px 14px 14px 8px lightgrey",
          display: "flex",
          flexDirection: "column",
          marginTop: "8em",
          padding: "1em",
          position: "relative",
        }}
      >
        <Animation />
        <h2
          className="page-name"
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontFamily: "Helvetica",
            marginTop: "1rem",
          }}
        >
          Login
        </h2>
        <FormControl>
          <TextField
            id="email"
            label="Email"
            fullWidth
            margin="normal"
            helperText=""
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            value={loginState.email}
            variant="outlined"
          />
        </FormControl>

        <FormControl>
          <TextField
            id="password"
            label="Password"
            fullWidth
            margin="normal"
            name="password"
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

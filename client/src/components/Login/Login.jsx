import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Animation from "../Animation";
import API from "../../utils/API";
import BtnStyle from '../Button/index';

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
  //ref, handlechange, handlesubmit
  // have a reference - does library allow us to reference textfield as an object
  //
  return (
    <div className="login-container" style={{marginTop: '10%', display: 'block'}}>
 

        <Animation />
        <Container style={{ display: 'flex', 
                            flexDirection: 'column',
                            position: 'relative',
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            backdropFilter: 'blur(4px)',
                            boxShadow: '0px 10px 10px 0px grey',
                            borderRadius: '1em',
                            padding: '1em',
                            marginTop: '12em' }} maxWidth="sm">
          <FormControl >
            <TextField
              name="email"
              value={loginState.email}
              onChange={handleChange}
              id="email"
              label="Email"
              placeholder="Email"
              helperText=""
              fullWidth margin="normal"
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
              placeholder="Password"
              helperText=""
              fullWidth margin="normal"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </FormControl>
          <BtnStyle
            variant="contained"
            onClick={handleSubmit}
          >
          </BtnStyle>
        </Container>
  
    </div>
  );
}

export default LoginTextFields;

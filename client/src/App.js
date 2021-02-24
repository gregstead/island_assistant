import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import { Wrapper, Login, Register, Flowers } from "./components";
import AppBar from "./components/Navbar/Navbar";
//import Container from "./components/Container/Container";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Accordion from "./pages/Home";
import Flowers from "./pages/Flowers";
import ProtectedRoute from "./components/ProtectedRoute";
import Villagers from "./pages/Villagers";


function App() {
  return (
    <Router>
      <div>
        <AppBar />
        {/* <Container> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute path="/home" component={Accordion} />
          <Redirect exact from="/flowers" to="/flowers/about" />
          <Route
            path="/flowers/:page?"
            render={(props) => <Flowers {...props} />}
          />
          {/* <Route exact path="/Villagers" component={Villagers} /> */}
        </Switch>
        
        {/* </Container> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

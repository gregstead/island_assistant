import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Cosmos from "./Pages/aCosmos"
// import { Wrapper, Login, Register, Flowers } from "./components";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import Login from "./components/Login/FormLogin";
import Register from "./components/Register/FormRegister";
import Flowers from "./Pages/Flowers";
import Villagers from "./components/Card/VillagerCard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Container> */}
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route exact path="/Register" component={Register} /> */}
          <Switch>
            <Redirect exact from="/flowers" to="/flowers/about" />
            <Route path="/Flowers/:page?" render={props => <Flowers {...props} />} />
            <Route exact path="/Villagers" component={Villagers} />
          </Switch>
          {/* <Route exact path="/search" component={Search} /> */}
        {/* </Container> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

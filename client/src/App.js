import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import MiniDrawer from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Accordion from "./pages/Home";
import Flowers from "./pages/Flowers";
import Villagers from "./pages/Villagers";
import Items from "./pages/Items";
import { userContext } from "./userContext";

function App() {
  // either a token or null - checks to see if there is a token in local storage
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  // sets authTokens default
  const [authTokens, setAuthTokens] = useState(existingTokens);

  function setTokens(data) {
    localStorage.setItem("tokens", JSON.stringify(data.id));
    setAuthTokens(data);
  }

  const value = {
    authTokens,
    setAuthTokens: setTokens,
  };
  return (
    <Router>
      <div>
        <MiniDrawer />

        <userContext.Provider value={value}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/home" component={Accordion} />
            <Redirect from="/flowers" to="/flowers/about" />
            <Route
              path="/flowers/:page?"
              render={(props) => <Flowers {...props} />}
            />
            <ProtectedRoute path="/Villagers" component={Villagers} />
            <ProtectedRoute path="/items" component={Items} />
          </Switch>
        </userContext.Provider>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

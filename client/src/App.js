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
import Items from "./pages/Items";
import Villagers from "./pages/Villagers";
import Favorites from "./pages/Favorites";
import StickyFooter from "./components/Footer/Footer";
import { userContext } from "./userContext";

function App() {
  // either a token or null - checks to see if there is a token in local storage
  const existingTokens = localStorage.getItem("tokens");
  // sets authTokens default
  const [authTokens, setAuthTokens] = useState(existingTokens);

  function setTokens(data) {
    localStorage.setItem("tokens", data.id);
    setAuthTokens(data);
  }

  const value = {
    authTokens,
    setAuthTokens: setTokens,
  };

  return (
    <Router>
      <div>
        <userContext.Provider value={value}>
          <MiniDrawer />

          {/* <userContext.Provider value={{ authTokens, setAuthTokens: setTokens }}> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/home" component={Accordion} />
            <Route
              path="/flowers/:flowerName?"
              render={(props) => <Flowers {...props} />}
            />
            <ProtectedRoute path="/items" component={Items} />
            <ProtectedRoute path="/Villagers" component={Villagers} />
            <ProtectedRoute path="/favorites" component={Favorites} />
          </Switch>
        </userContext.Provider>

        <StickyFooter />
      </div>
    </Router>
  );
}

export default App;

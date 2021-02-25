import React from "react";
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
  const [userState, setUserState] = useState({
    user: {},
  });
  return (
    <Router>
      <div>
        <MiniDrawer />

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
          <Route path="/Villagers" component={Villagers} />
          <ProtectedRoute path="/items" component={Items} />
        </Switch>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

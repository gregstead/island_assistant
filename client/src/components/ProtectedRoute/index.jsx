import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../userContext";

function ProtectedRoute({ component: Component, ...rest }) {
  // usercontext at the global level -- inject usercontext and see if they're signed in
  // determine how they will be authenticated
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default ProtectedRoute;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RoutesWhithSubRoutes {...route} key={index} />
        ))}
      </Switch>
    </Router>
  );
}

function RoutesWhithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component route={route.subroutes} {...props} />}
    />
  );
}

export default App;

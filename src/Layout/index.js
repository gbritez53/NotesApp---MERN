import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function index({ route }) {
  return (
    <>
      <Header />
      <main style={{ height: "100vh" }}>
        <LoadRoutes routes={route} />
      </main>
      <Footer />
    </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

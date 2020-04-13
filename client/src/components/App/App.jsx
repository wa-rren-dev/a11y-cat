import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { SpecificationList } from "../SpecificationList/SpecificationList";
import { Specification } from "../Specification/Specification";
import { Home } from "../Home/Home";
import { Header } from "../Header/Header";

import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:3000/admin/api",
});

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/specifications" exact>
            <SpecificationList />
          </Route>
          <Route path="/specifications/:id" exact>
            <Specification />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export const AppConnected = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

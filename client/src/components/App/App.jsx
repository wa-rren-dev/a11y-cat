import React, { useState } from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { SpecificationList } from "../SpecificationList/SpecificationList";
import { Specification } from "../Specification/Specification";
import { Navigation } from "../Navigation/Navigation";

import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:3000/admin/api",
});

function App() {
  return (
    <main>
      <Grid>
        <GridItem cols={12}>
          <h1>NICE Accessibility Checklist</h1>
          <Navigation />
        </GridItem>
      </Grid>

      <SpecificationList />
      <Specification />
    </main>
  );
}

export const AppConnected = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

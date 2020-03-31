import React, { useState } from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { v4 as uuid } from "uuid";

import { Checklist } from "./Checklist";
import Navigation from "./components/Navigation";

import spec from "./spec.json";

import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:3000/admin/api",
});

function App() {
  const uniqueId = uuid();
  const [url, setUrl] = useState("");

  return (
    <main>
      <Grid>
        <GridItem cols={12}>
          <h1>NICE Accessibility Checklist</h1>
          <h2>Sections</h2>
          <p>
            The checklist covers five key areas as a starting point for your
            testing:
          </p>
          <Navigation />
        </GridItem>
      </Grid>

      <Checklist key={url} checklistId={uniqueId} spec={spec} />
    </main>
  );
}

const AppConnected = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppConnected;

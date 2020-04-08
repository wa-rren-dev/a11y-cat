import React, { useState } from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
    </main>
  );
}

const SPECIFICATIONS = gql`
  {
    allSpecifications {
      name
      id
    }
  }
`;

function SpecificationList() {
  const { loading, error, data } = useQuery(SPECIFICATIONS);

  if (loading) return <div>Loading...</div>;

  if (error) return <pre>Error: {JSON.stringify(error)}</pre>;

  const { allSpecifications } = data;

  return (
    <Grid>
      <GridItem cols={12}>
        <h2>Specifications</h2>
        <ul>
          {allSpecifications.map(({ name, id }) => (
            <li>
              {name} ({id})
            </li>
          ))}
        </ul>
      </GridItem>
    </Grid>
  );
}

export const AppConnected = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

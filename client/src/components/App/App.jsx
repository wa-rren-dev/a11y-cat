import React from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { SpecificationList } from "../SpecificationList/SpecificationList";
import { Specification } from "../Specification/Specification";
import { Header } from "../Header/Header";

import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:3000/admin/api",
});

// go and get the id of the first specification (presuming there's only one for the time being)
const FIRSTSPECIFICATION = gql`
  {
    allSpecifications(first: 1) {
      id
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(FIRSTSPECIFICATION);
  if (loading) return null;
  if (error) return <pre>Error: {JSON.stringify(error)}</pre>;
  const { id } = data.allSpecifications[0];
  return (
    <main>
      <Header />
      <SpecificationList />
      <Specification id={id} />
    </main>
  );
}

export const AppConnected = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

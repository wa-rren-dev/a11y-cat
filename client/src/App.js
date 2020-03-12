import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Checklist } from "./Checklist";
import { v4 as uuid } from "uuid";

import spec from "./spec.json";

import "./App.scss";

function App() {
  const uniqueId = uuid();

  return (
    <main>
      <Grid>
        <GridItem cols={12}>
          <h1>NICE Accessibility Checklist</h1>
          <pre>{uniqueId}</pre>
          <p>
            The checklist covers five key areas as a starting point for your
            testing:
          </p>
          <ul>
            <li>In-browser automated tests</li>
            <li>Markup review</li>
            <li>Keyboard access</li>
            <li>Screen reader</li>
            <li>Visual inspection</li>
          </ul>
        </GridItem>
      </Grid>
      <hr />
      <Checklist key={uniqueId} checklistId={uniqueId} spec={spec} />
    </main>
  );
}

export default App;

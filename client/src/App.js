import React, { useState } from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Checklist } from "./Checklist";
import { v4 as uuid } from "uuid";

import spec from "./spec.json";

import "./App.scss";
import slugify from "slugify";

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
          <ul>
            {spec.map(item => {
              const slug = slugify(item.title, { lower: true });
              return (
                <li key={slug}>
                  <a href={`#${slug}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </GridItem>
      </Grid>

      <Checklist key={url} checklistId={uniqueId} spec={spec} />
    </main>
  );
}

export default App;

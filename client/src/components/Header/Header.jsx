import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { useParams, Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <Grid>
        <GridItem cols={12}>
          <h1>A11y-Cat</h1>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem cols={12} elementType="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/specifications">Specification List</Link>
            </li>
          </ul>
        </GridItem>
      </Grid>
    </>
  );
}

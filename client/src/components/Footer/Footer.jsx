import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { useParams, Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.container}>
      <Grid>
        <GridItem cols={4}>
          <p>Footer</p>
        </GridItem>
        <GridItem cols={4}>
          <p>Footer</p>
        </GridItem>
        <GridItem cols={4}>
          <p>Footer</p>
        </GridItem>
      </Grid>
    </div>
  );
}

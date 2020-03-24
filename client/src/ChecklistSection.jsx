import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import slugify from "slugify";
import { Criterion } from "./Criterion";

export const ChecklistSection = ({ title, criteria, slug }) => {
  return (
    <Grid>
      <GridItem cols={12}>
        <h2 id={slug}>{title}</h2>
        {criteria.map(criterion => {
          const localSlug = slugify(slug + "-" + criterion.title, {
            lower: true
          });
          return (
            <Criterion
              key={localSlug}
              slug={localSlug}
              section={title}
              {...criterion}
            />
          );
        })}
      </GridItem>
    </Grid>
  );
};

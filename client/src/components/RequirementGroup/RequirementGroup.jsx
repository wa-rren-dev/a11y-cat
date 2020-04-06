import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import slugify from "slugify";
import { Requirement } from "../Requirement/Requirement";

export const RequirementGroup = ({ title, criteria, slug }) => {
  return (
    <Grid>
      <GridItem cols={12}>
        <h2 id={slug}>{title}</h2>
        {criteria.map(criterion => {
          const localSlug = slugify(slug + "-" + criterion.title, {
            lower: true,
          });
          return (
            <Requirement
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

import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";
import slugify from "slugify";

export const Criterion = props => {
  const { title, description, slug } = props;
  const localSlug = slugify(slug + title);
  return (
    <Grid>
      <GridItem cols={9}>
        <h3>{title}</h3>
        <p>{description}</p>
      </GridItem>
      <GridItem cols={3}>
        <FormGroup legend="Result" name={localSlug}>
          <Radio value="Pass" />
          <Radio value="Fail" />
          <Radio value="Not Sure" />
        </FormGroup>
      </GridItem>
    </Grid>
  );
};

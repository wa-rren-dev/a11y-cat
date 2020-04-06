import React from "react";
import { RequirementGroup } from "../RequirementGroup/RequirementGroup";
import slugify from "slugify";

export const Specification = ({ spec }) => {
  if (!spec) throw new Error("Hey! Nothing supplied to the checklist");
  return spec.map(section => {
    const localSlug = slugify(section.title, { lower: true });
    return <RequirementGroup key={localSlug} slug={localSlug} {...section} />;
  });
};

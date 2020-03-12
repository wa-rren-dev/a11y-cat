import React from "react";
import { ChecklistSection } from "./ChecklistSection";
import slugify from "slugify";

export const Checklist = ({ spec }) => {
  if (!spec) throw new Error("Hey! Nothing supplied to the checklist");
  return spec.map(section => {
    const localSlug = slugify(section.title, { lower: true });
    return <ChecklistSection key={localSlug} slug={localSlug} {...section} />;
  });
};

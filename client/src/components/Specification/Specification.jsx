import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import slugify from "slugify";
import { RequirementGroup } from "../RequirementGroup/RequirementGroup";

const SPECIFICATION_DETAILS = gql`
  {
    allSpecifications {
      name
      id
    }
  }
`;

export const Specification = ({ specificationId }) => {
  const { loading, error, data } = useQuery(SPECIFICATION_DETAILS);

  if (loading) return <div>Loading...</div>;

  if (error) return <pre>Error: {JSON.stringify(error)}</pre>;

  const { allSpecifications } = data;
  return (
    <>
      <h2>Specifications</h2>
      <ul>
        {allSpecifications.map(({ name, id }) => (
          <li>
            {name} ({id})
          </li>
        ))}
      </ul>
    </>
  );
  // return spec.map(section => {
  //   const localSlug = slugify(section.title, { lower: true });
  //   return <RequirementGroup key={localSlug} slug={localSlug} {...section} />;
  // });
};

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import slugify from "slugify";

const REQUIREMENT_GROUP_NAMES = gql`
  {
    allRequirementGroups {
      id
      name
    }
  }
`;

export const Navigation = () => {
  const { loading, error, data } = useQuery(REQUIREMENT_GROUP_NAMES);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  const { allRequirementGroups } = data;

  return (
    <>
      <h2>Sections</h2>
      <p>
        The checklist covers five key areas as a starting point for your
        testing:
      </p>
      <ul>
        {allRequirementGroups.map(({ name, id }) => {
          const slug = slugify(name, { lower: true });
          return (
            <li key={id}>
              <a href={`#${slug}`}>{name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

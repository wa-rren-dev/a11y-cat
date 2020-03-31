import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import slugify from "slugify";

const REQUIREMENT_GROUP_NAMES = gql`
  {
    allRequirementGroups {
      name
    }
  }
`;

const Navigation = () => {
  const { loading, error, data } = useQuery(REQUIREMENT_GROUP_NAMES);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  const { allRequirementGroups } = data;

  return (
    <ul>
      {allRequirementGroups.map(({ name }) => {
        const slug = slugify(name, { lower: true });
        return (
          <li key={slug}>
            <a href={`#${slug}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;

import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const SPECIFICATION = gql`
  {
    Specification(where: { id: "5e8e3e6cae5c0c06e8b16e85" }) {
      name
      id
      comments
      requirements {
        name
        section {
          name
        }
      }
    }
  }
`;

export const Specification = () => {
  const { loading, error, data } = useQuery(SPECIFICATION);

  if (loading) return <div>Loading...</div>;

  if (error) return <pre>Error: {JSON.stringify(error)}</pre>;

  const { Specification } = data;
  const { name, requirements, comments } = Specification;
  return (
    <>
      <h2>Specification Details</h2>
      <ul>
        <li>{name}</li>
        <li>{comments}</li>
        <li>{JSON.stringify(requirements)}</li>
      </ul>
    </>
  );
  // return spec.map(section => {
  //   const localSlug = slugify(section.title, { lower: true });
  //   return <RequirementGroup key={localSlug} slug={localSlug} {...section} />;
  // });
};

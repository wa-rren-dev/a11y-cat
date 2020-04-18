import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";

const SPECIFICATIONS = gql`
	{
		allSpecifications {
			name
			id
		}
	}
`;

export function SpecificationList() {
	const { loading, error, data } = useQuery(SPECIFICATIONS);

	if (loading) return <div>Loading...</div>;

	if (error) return <pre>Error: {JSON.stringify(error)}</pre>;

	const { allSpecifications } = data;

	return (
		<>
			<Breadcrumbs>
				<Breadcrumb>Specifications</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12}>
					<h1>Specifications</h1>
					<ul>
						{allSpecifications.map(({ name, id }) => (
							<li key={id}>
								<Link to={`/specifications/${id}`}>{name}</Link>
							</li>
						))}
					</ul>
				</GridItem>
			</Grid>
		</>
	);
}

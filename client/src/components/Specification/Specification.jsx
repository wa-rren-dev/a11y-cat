import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams as useRouterParams } from "react-router-dom";
import parse from "html-react-parser";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { map, uniq, path, pipe } from "ramda";

const GETSPECIFICATION = gql`
	query Specification($id: ID!) {
		Specification(where: { id: $id }) {
			name
			description
			requirements {
				name
				id
				section {
					name
				}
			}
		}
	}
`;

export function Specification() {
	let { id } = useRouterParams();

	const { loading, error, data } = useQuery(GETSPECIFICATION, {
		variables: { id }
	});

	if (loading) return <div>Loading...</div>;

	if (error) throw new Error(error);

	const { name, requirements, description } = data.Specification;

	const createRequirementGroup = requirements => section => ({
		name: section,
		requirements: requirements.filter(
			requirement => requirement.section.name === section
		)
	});

	const sortedRequirements = pipe(
		map(path(["section", "name"])),
		uniq,
		map(createRequirementGroup(requirements))
	);

	return (
		<>
			<Helmet>
				<title>Details for specification - {name}</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb tag={Link} to="/specifications">
					Specifications
				</Breadcrumb>
				<Breadcrumb>{name}</Breadcrumb>
			</Breadcrumbs>
			<h1>{name}</h1>
			<p>{parse(description)}</p>

			<Grid>
				{sortedRequirements(requirements).map(({ name, requirements }) => (
					<>
						<GridItem cols={12}>
							<h2 className="h4">{name}</h2>
							<ul>
								{requirements.map(item => (
									<li>{item.name}</li>
								))}
							</ul>
						</GridItem>
					</>
				))}
			</Grid>
		</>
	);
}

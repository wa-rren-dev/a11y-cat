import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams as useRouterParams } from "react-router-dom";
import parse from "html-react-parser";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Grid, GridItem } from "@nice-digital/nds-grid";

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

function sortRequirements(requirements) {
	let sections = [];

	for (let requirement of requirements) {
		const section = requirement.section.name;
		sections.push(section);
	}

	let uniqueSections = [...new Set(sections)];

	let sortedRequirements = [];

	for (let section of uniqueSections) {
		sortedRequirements.push({
			name: section,
			requirements: requirements.filter(i => i.section.name === section)
		});
	}

	return sortedRequirements;
}

export function Specification() {
	let { id } = useRouterParams();

	const { loading, error, data } = useQuery(GETSPECIFICATION, {
		variables: { id }
	});

	if (loading) return <div>Loading...</div>;

	if (error)
		return (
			<>
				<p>Error: {JSON.stringify(error)}</p>
			</>
		);

	const { name, requirements, description } = data.Specification;

	const sortedRequirements = sortRequirements(requirements);

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
				{sortedRequirements.map(({ name, requirements }) => (
					<>
						<GridItem cols={12}>
							<h2 class="h4">{name}</h2>
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

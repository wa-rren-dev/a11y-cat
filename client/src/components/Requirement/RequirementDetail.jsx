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

const GETREQUIREMENT = gql`
	query Requirement($id: ID!) {
		Requirement(where: { id: $id }) {
			name
			#			description
			#			requirements {
			#				name
			#				id
			#				section {
			#					name
			#				}
			#			}
		}
	}
`;

export function RequirementDetail() {
	let { id } = useRouterParams();

	const { loading, error, data } = useQuery(GETREQUIREMENT, {
		variables: { id }
	});

	if (loading) return <div>Loading...</div>;

	if (error)
		return (
			<>
				<p>Error: {JSON.stringify(error)}</p>
			</>
		);

	const { name } = data.Requirement;

	return (
		<>
			<Helmet>
				<title>Details for requirement - {name}</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb tag={Link} to="/requirements">
					Requirements
				</Breadcrumb>
				<Breadcrumb>{name}</Breadcrumb>
			</Breadcrumbs>
			<h1>{name}</h1>
		</>
	);
}

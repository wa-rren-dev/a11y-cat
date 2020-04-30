import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams as useRouterParams } from "react-router-dom";
import parse from "html-react-parser";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const GETREQUIREMENT = gql`
	query Requirement($id: ID!) {
		Requirement(where: { id: $id }) {
			name
			section {
				name
			}
			shortSupport
			longSupport
			shortDescription
			longDescription
		}
	}
`;

export function RequirementDetail() {
	let { id } = useRouterParams();

	const { loading, error, data } = useQuery(GETREQUIREMENT, {
		variables: { id }
	});

	if (loading) return <div>Loading...</div>;

	if (error) {
		throw new Error(error);
	}

	const {
		name,
		shortSupport,
		longSupport,
		shortDescription,
		longDescription,
		section
	} = data.Requirement;

	return (
		<>
			<Helmet>
				<title>Details for requirement - {name}</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb tag={Link} to="/">
					Home
				</Breadcrumb>
				<Breadcrumb tag={Link} to="/requirements">
					Requirements
				</Breadcrumb>
				<Breadcrumb>{name}</Breadcrumb>
			</Breadcrumbs>
			<h1>{name}</h1>
			{section?.name && (
				<p>
					Requirements group: <b>{section.name}</b>
				</p>
			)}
			{(longDescription || shortDescription) && (
				<>
					<h3>Description</h3>
					{parse(longDescription ? longDescription : shortDescription)}
				</>
			)}
			{(longSupport || shortSupport) && (
				<>
					<h3>Support</h3>
					{parse(longSupport ? longSupport : shortSupport)}
				</>
			)}
		</>
	);
}

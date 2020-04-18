import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams as useRouterParams } from "react-router-dom";
import parse from "html-react-parser";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { Link } from "react-router-dom";
import "./specification.module.scss";

const GETSPECIFICATION = gql`
	query Specification($id: ID!) {
		Specification(where: { id: $id }) {
			name
			description
			requirements {
				name
				id
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

	if (error)
		return (
			<>
				<p>Error: {JSON.stringify(error)}</p>
			</>
		);

	const { name, requirements, description } = data.Specification;

	return (
		<>
			<Breadcrumbs>
				<Breadcrumb tag={Link} to="/specifications">
					Specifications
				</Breadcrumb>
				<Breadcrumb>{name}</Breadcrumb>
			</Breadcrumbs>
			<h1>Specification Details</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Requirements</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{name}</td>
						<td>{parse(description)}</td>
						<td>
							<ul>
								{requirements.map(({ name, id }) => (
									<li key={id}>{name}</li>
								))}
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { Card } from "@nice-digital/nds-card";
import { Helmet } from "react-helmet";

const SPECIFICATIONS = gql`
	{
		allSpecifications {
			name
			id
			_requirementsMeta {
				count
			}
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
			<Helmet>
				<title>Specifications list</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb>Specifications</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12}>
					<h1>Specifications</h1>
					<ul className="list--unstyled">
						{allSpecifications.map(({ name, id, _requirementsMeta }) => (
							<Card
								elementType="li"
								headingText={name}
								headingElementType="h2"
								link={{
									destination: `/specifications/${id}`,
									elementType: Link
								}}
								metadata={[
									{
										value: `${_requirementsMeta.count} requirements`
									}
								]}
							/>
						))}
					</ul>
				</GridItem>
			</Grid>
		</>
	);
}

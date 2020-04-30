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

	if (error) throw new Error(error);

	const { allSpecifications } = data;

	return (
		<>
			<Helmet>
				<title>Specifications list</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb elementType={Link} to="/">
					Home
				</Breadcrumb>
				<Breadcrumb>Specifications</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12}>
					<h1>Specifications</h1>
					<p>
						When you create a <b>test</b>, you choose the <b>specification</b> that
						you would like to test against.
					</p>
					<p>
						<b>Specifications</b> are collections of <b>requirements</b> (requirements
						being individual "checklist" items to test against). Multiple{" "}
						<b>specifications</b> can reference the same <b>requirements</b>.
					</p>
					<hr />
					<ul className="list--unstyled">
						{allSpecifications.map(({ name, id, _requirementsMeta }) => (
							<Card
								key={id}
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

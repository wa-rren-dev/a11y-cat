import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import s from "./RequirementList.module.scss";

const REQUIREMENTS = gql`
	{
		allRequirements {
			name
			id
			shortDescription
		}
	}
`;

export function RequirementList() {
	const { loading, error, data } = useQuery(REQUIREMENTS);

	if (loading) return <div>Loading...</div>;

	if (error) throw new Error(error);

	const { allRequirements } = data;

	return (
		<>
			<Helmet>
				<title>Requirements List</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb elementType={Link} to="/">
					Home
				</Breadcrumb>
				<Breadcrumb>Requirements</Breadcrumb>
			</Breadcrumbs>
			<Grid>
				<GridItem cols={12}>
					<h1>Requirements</h1>
					<p>
						<b>Requirements</b> are individual "checklist" items that can be easily
						tested in isolation.
					</p>
					<p>
						Requirements are grouped together into a <b>specification</b>. Multiple{" "}
						<b>specifications</b> can reference the same <b>requirement</b>. This is a
						list of all the individual requirements stored on the site. Click through
						to see the detail of the requirement along with help on how to test
						against it and external resources.
					</p>
					<hr />
					<Grid>
						<dl>
							{allRequirements.map(({ name, id, shortDescription }) => (
								<div key={id} className={s.descriptionList}>
									<GridItem
										cols={12}
										md={{ cols: 2 }}
										elementType="dt"
										className={s.descriptionList__term}
									>
										<h2 className="h5">
											<Link to={`/requirements/${id}`}>{name}</Link>
										</h2>
									</GridItem>
									<GridItem
										elementType="dd"
										cols={12}
										md={{ cols: 7 }}
										className={s.descriptionList__description}
									>
										{parse(shortDescription)}
									</GridItem>
								</div>
							))}
						</dl>
					</Grid>
				</GridItem>
			</Grid>
		</>
	);
}

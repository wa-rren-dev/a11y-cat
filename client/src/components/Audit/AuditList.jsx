import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Tag } from "@nice-digital/nds-tag";
import { Breadcrumb, Breadcrumbs } from "@nice-digital/nds-breadcrumbs";
import { Button } from "@nice-digital/nds-button";
import { Card } from "@nice-digital/nds-card";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const AUDITS = gql`
	{
		allAudits {
			name
			id
			service {
				name
			}
			_testsMeta {
				count
			}
		}
	}
`;

export function AuditList() {
	const { loading, error, data } = useQuery(AUDITS);

	if (loading) return <div>Loading...</div>;

	if (error) throw new Error(error);

	const { allAudits } = data;

	return (
		<>
			<Helmet>
				<title>List of audits</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb>Audits</Breadcrumb>
			</Breadcrumbs>
			<h1>Audits</h1>
			<p>
				An <b>audit</b> is a set of <b>tests</b>. An <b>audit</b> can contain one or
				many <b>tests</b>. When you create an <b>audit</b>, you're asked which{" "}
				<b>service</b> the <b>audit</b> refers to.
			</p>
			<Button to="/audits/create" elementType={Link} variant="cta">
				Create a new audit
			</Button>
			<ul className="list--unstyled">
				{allAudits.map(({ name, id, _testsMeta, service }) => (
					<Card
						key={id}
						elementType="li"
						headingElementType="h2"
						headingText={name}
						link={{
							destination: `/audits/${id}`,
							elementType: Link
						}}
						metadata={[
							{
								value: <Tag>{service?.name || "Unassigned"}</Tag>,
								label: "Service"
							},
							{
								value: `${_testsMeta.count} ${
									_testsMeta.count === 1 ? "test" : "tests"
								} in this audit`
							}
						]}
					/>
				))}
			</ul>
		</>
	);
}

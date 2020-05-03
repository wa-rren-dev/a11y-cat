import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { FormGroup } from "@nice-digital/nds-form-group";
import { Input } from "@nice-digital/nds-forms";
import { Radio } from "@nice-digital/nds-radio";
import { Button } from "@nice-digital/nds-button";

const GET_SERVICES = gql`
	{
		allServices {
			name
			id
			baseUrl
		}
	}
`;

const ADD_AUDIT = gql`
	mutation CreateAudit($data: AuditCreateInput) {
		createAudit(data: $data) {
			name
			id
		}
	}
`;

const DELETE_AUDIT = gql`
	mutation DeleteAudit($id: ID!) {
		deleteAudit(id: $id) {
			name
		}
	}
`;

export const AuditCreate = () => {
	const {
		loading: loadingServices,
		error: errorServices,
		data: dataServices
	} = useQuery(GET_SERVICES);

	const { register, handleSubmit, errors } = useForm();

	const [addAudit, { data, loading, error }] = useMutation(ADD_AUDIT);

	const [
		deleteAudit,
		{ data: deleteData, loading: deleteLoading, error: deleteError }
	] = useMutation(DELETE_AUDIT);

	const onSubmit = ({ auditName }) =>
		addAudit({ variables: { data: { name: auditName } } });

	const handleDelete = () =>
		deleteAudit({ variables: { id: data.createAudit.id } });

	if (loadingServices) return <h1>Loading...</h1>;

	if (errorServices) throw new Error(errorServices);

	if (error) throw new Error(error);

	const { allServices } = dataServices;

	return (
		<>
			<Helmet>
				<title>Create a new audit</title>
			</Helmet>
			<Breadcrumbs>
				<Breadcrumb elementType={Link} to="/">
					Home
				</Breadcrumb>
				<Breadcrumb elementType={Link} to="/audits">
					Audits
				</Breadcrumb>
				<Breadcrumb>Create a new audit</Breadcrumb>
			</Breadcrumbs>
			<h1>Create a new audit</h1>
			<p>
				An <b>audit</b> is a set of <b>tests</b>. An <b>audit</b> can contain one or
				many <b>tests</b>. When you create an <b>audit</b>, you're asked which{" "}
				<b>service</b> the <b>audit</b> refers to.
			</p>

			<Grid>
				<GridItem cols={12} md={8}>
					<form>
						<Input
							label="Audit name"
							unique="name"
							name="name"
							type="text"
							ref={register({ required: true })}
						/>
						<FormGroup
							legend="Select the service that this audit will test"
							name="service"
						>
							{allServices.map(({ id, name, baseUrl }) => (
								<Radio hint={baseUrl} key={id} value={id} name={id} label={name} />
							))}
						</FormGroup>
						<Button variant="cta" type="submit">
							Create audit
						</Button>
					</form>
				</GridItem>
			</Grid>

			{/*{!data ? (*/}
			{/*	<form onSubmit={handleSubmit(onSubmit)}>*/}
			{/*		<label htmlFor="auditName">Name</label>*/}
			{/*		<input*/}
			{/*			type="text"*/}
			{/*			id="auditName"*/}
			{/*			name="auditName"*/}
			{/*			ref={register({ required: true })}*/}
			{/*		/>*/}
			{/*		{errors.auditName && <span>This field is required</span>}*/}
			{/*		{loading ? (*/}
			{/*			<p>Creating audit...</p>*/}
			{/*		) : (*/}
			{/*			<button type="submit">Create</button>*/}
			{/*		)}*/}
			{/*	</form>*/}
			{/*) : (*/}
			{/*	<>*/}
			{/*		{!deleteData && (*/}
			{/*			<>*/}
			{/*				<p>Audit {data.createAudit.name} created</p>*/}
			{/*				<Link to={`/audits/${data.createAudit.id}/edit`}>Edit</Link>*/}
			{/*			</>*/}
			{/*		)}*/}
			{/*		{!deleteData ? (*/}
			{/*			<button type="button" onClick={handleDelete}>*/}
			{/*				Delete*/}
			{/*			</button>*/}
			{/*		) : (*/}
			{/*			<p>{deleteData.deleteAudit.name} successfully deleted</p>*/}
			{/*		)}*/}
			{/*	</>*/}
			{/*)}*/}
		</>
	);
};

import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller as FormController } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Helmet } from "react-helmet";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Breadcrumbs, Breadcrumb } from "@nice-digital/nds-breadcrumbs";
import { FormGroup } from "@nice-digital/nds-form-group";
import { Input, Textarea } from "@nice-digital/nds-forms";
import { Radio } from "@nice-digital/nds-radio";
import { Button } from "@nice-digital/nds-button";
import { DevTool } from "react-hook-form-devtools";

const GET_SERVICES = gql`
	{
		allServices {
			name
			id
			baseUrl
		}
	}
`;

const CREATE_AUDIT = gql`
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

	const { register, handleSubmit, errors, control } = useForm();

	const [createAudit, { data, loading, error }] = useMutation(CREATE_AUDIT);

	const onSubmit = ({ name, description, service }) => {
		console.log(`Need to log service ID ${service}`);
		createAudit({ variables: { data: { name, description } } });
	};

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
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormController
							as={Input}
							name="name"
							control={control}
							label="Audit name"
							defaultValue=""
							required
							unique="name"
						/>
						<div className="textarea">
							<label htmlFor="description" className="textarea__label">
								Description
							</label>
							<textarea
								ref={register}
								className="textarea__input"
								name="description"
								id="description"
							/>
						</div>
						<FormGroup legend="Select the service that this audit will test">
							{allServices.map(({ id, name, baseUrl }) => (
								<div className="radio" key={id}>
									<input
										ref={register}
										className="radio__input"
										name="service"
										type="radio"
										id={`service-${id}`}
										value={id}
									/>
									<label className="radio__label" htmlFor={`service-${id}`}>
										{name}
									</label>
									<span className="checkbox__hint">{baseUrl}</span>
								</div>
							))}
						</FormGroup>
						<Button variant="cta" type="submit">
							Create audit
						</Button>
					</form>
				</GridItem>
			</Grid>
			<DevTool control={control} /> {/* set up the dev tool */}
		</>
	);
};

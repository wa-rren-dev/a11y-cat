import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

	return (
		<div>
			{error && <p>Something went wrong</p>}
			{!data ? (
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="auditName">Name</label>
					<input
						type="text"
						id="auditName"
						name="auditName"
						ref={register({ required: true })}
					/>
					{errors.auditName && <span>This field is required</span>}
					{loading ? (
						<p>Creating audit...</p>
					) : (
						<button type="submit">Create</button>
					)}
				</form>
			) : (
				<>
					{!deleteData && (
						<>
							<p>Audit {data.createAudit.name} created</p>
							<Link to={`/audits/${data.createAudit.id}/edit`}>Edit</Link>
						</>
					)}
					{!deleteData ? (
						<button type="button" onClick={handleDelete}>
							Delete
						</button>
					) : (
						<p>{deleteData.deleteAudit.name} successfully deleted</p>
					)}
				</>
			)}
		</div>
	);
};

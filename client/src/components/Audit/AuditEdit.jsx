import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_AUDIT = gql`
	query Audit($id: ID!) {
		Audit(where: { id: $id }) {
			name
			id
		}
	}
`;

const UPDATE_AUDIT = gql`
	mutation UpdateAudit($data: AuditUpdateInput!, $id: ID!) {
		updateAudit(data: $data, id: $id) {
			name
		}
	}
`;

export const AuditEdit = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_AUDIT, { variables: { id } });
	const { register, handleSubmit, errors } = useForm();
	const [
		updateAudit,
		{ data: updateData, loading: updateLoading, error: updateError }
	] = useMutation(UPDATE_AUDIT);
	const onSubmit = ({ auditName }) =>
		updateAudit({ variables: { data: { name: auditName }, id } });

	if (loading) return <div>Loading...</div>;

	if (error) throw new Error(error);

	const {
		Audit: { name }
	} = data;
	return (
		<div>
			{updateError && <p>Something went wrong</p>}
			{!updateData ? (
				<>
					<p>Edit {name} using form below</p>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor="auditName">Name</label>
						<input
							type="text"
							id="auditName"
							name="auditName"
							ref={register({ required: true })}
						/>
						{errors.auditName && <span>This field is required</span>}
						{updateLoading ? (
							<p>Updating audit...</p>
						) : (
							<button type="submit">Update</button>
						)}
					</form>
				</>
			) : (
				<p>Audit name updated to {updateData.updateAudit.name}</p>
			)}
		</div>
	);
};

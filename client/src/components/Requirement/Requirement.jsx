import React, { useState } from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { FormGroup } from "@nice-digital/nds-form-group";
import { Radio } from "@nice-digital/nds-radio";
import { Panel } from "@nice-digital/nds-panel";
import { Tag } from "@nice-digital/nds-tag";
import slugify from "slugify";

export const Requirement = props => {
	const possibleResults = [
		{ label: "Pass", value: "pass" },
		{ label: "Fail", value: "fail" },
		{ label: "Not sure", value: "not_sure" },
		{ label: "Untested", value: "untested" }
	];
	const [result, setResult] = useState("untested");
	const [comments, setComments] = useState("");
	const { title, description, slug } = props;
	const localSlug = slugify(slug + title);
	return (
		<>
			<Grid>
				<hr />
				<GridItem cols={9}>
					<h3>
						{title} {result === "pass" && <Tag success>Passed</Tag>}
					</h3>
					<p>{description}</p>
					{(result === "fail" || result === "not_sure") && (
						<Panel>
							<h4>
								{result === "fail"
									? "Please give any details you can"
									: "Why aren't you sure?"}
							</h4>
							<textarea
								onChange={e => setComments(e.target.value)}
								value={comments}
							/>
						</Panel>
					)}
				</GridItem>
				<GridItem cols={3}>
					<FormGroup legend="Result" name={localSlug}>
						{possibleResults.map(item => (
							<Radio
								key={item.value}
								value={item.value}
								label={item.label}
								checked={result === item.value}
								onChange={e => setResult(item.value)}
							/>
						))}
					</FormGroup>
				</GridItem>
			</Grid>
		</>
	);
};

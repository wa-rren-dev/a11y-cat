import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Navigation } from "./../Navigation/Navigation";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export function Header() {
	return (
		<div className={styles.container}>
			<Grid>
				<GridItem cols={12}>
					<p>
						<Link to="/">a11y-cat</Link>
					</p>
				</GridItem>
			</Grid>
			<Grid>
				<GridItem cols={12}>
					<Navigation />
				</GridItem>
			</Grid>
		</div>
	);
}

import React from "react";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<div className={styles.container}>
			<Grid>
				<GridItem cols={12}></GridItem>
			</Grid>
		</div>
	);
}

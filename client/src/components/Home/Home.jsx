import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@nice-digital/nds-button";
import { Hero } from "@nice-digital/nds-hero";
import { PhaseBanner } from "@nice-digital/nds-phase-banner";
import { Grid, GridItem } from "@nice-digital/nds-grid";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<>
			<Helmet>
				<title>A11y-Cat - Accessibility audit tracker and reporter</title>
			</Helmet>
			<Hero
				title="A11y-Cat"
				intro="Accessibility audit tracker and reporter"
				actions={ActionButtons}
				header={Header}
				footer={footerLinks}
			/>
			<Grid>
				<GridItem cols={12}>
					<h2>How to use A11y-Cat</h2>
					<p>Information coming soon...</p>
				</GridItem>
			</Grid>
		</>
	);
}

const ActionButtons = (
	<Button to="/audits/create" elementType={Link} variant="cta">
		Create a new audit
	</Button>
);

const Header = (
	<PhaseBanner alpha>
		Problems?{" "}
		<a href="https://github.com/wa-rren-dev/a11y-cat/issues">
			File issues on Github
		</a>
		!
	</PhaseBanner>
);

const links = [
	{
		label: "Specifications",
		to: "/specifications"
	},
	{
		label: "Audits",
		to: "/audits"
	},
	{
		label: "Requirements",
		to: "/requirements"
	}
];

const footerLinks = (
	<nav>
		<ul className="list list--piped">
			{links.map(({ to, label }) => (
				<li key={label}>
					<Link to={to}>{label}</Link>
				</li>
			))}
		</ul>
	</nav>
);

import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@nice-digital/nds-button";
import { Hero } from "@nice-digital/nds-hero";
import { PhaseBanner } from "@nice-digital/nds-phase-banner";
import { Navigation } from "./../Navigation/Navigation";

const ActionButtons = (
	<Button href="/" elementType="a">
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
			>
				<Navigation />
			</Hero>
		</>
	);
}

import React from "react";
import { Button } from "@nice-digital/nds-button";
import { Hero } from "@nice-digital/nds-hero";
import { PhaseBanner } from "@nice-digital/nds-phase-banner";
import { Navigation } from "./../Navigation/Navigation";

const ActionButtons = (
	<Button href="/" elementType="a">
		Create a new audit
	</Button>
);

const Header = <PhaseBanner alpha />;

export function Home() {
	return (
		<>
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

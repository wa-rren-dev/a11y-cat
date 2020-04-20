import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
	const nav = [
		{
			label: "Specifications",
			to: "/specifications"
		},
		{
			label: "Audits",
			to: "/audits"
		},
		{
			label: "Tests",
			to: "/tests"
		}
	];
	return (
		<nav>
			<ul>
				{nav.map(({ to, label }) => (
					<li key={label}>
						<Link to={to}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

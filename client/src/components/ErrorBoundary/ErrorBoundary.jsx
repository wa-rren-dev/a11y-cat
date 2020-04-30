import React, { Component } from "react";
import { Alert } from "@nice-digital/nds-alert";

export class ErrorBoundary extends Component {
	state = {
		hasError: false,
		error: null,
		stack: null
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		this.setState({
			error: error.message,
			stack: info.componentStack
		});
	}

	render() {
		if (this.state.hasError) {
			const { error, stack } = this.state;
			return (
				<Alert type="error">
					<h1>Something went awry...</h1>
					<h2 className="h4">{error}</h2>
					<pre>{stack}</pre>
				</Alert>
			);
		}

		return this.props.children;
	}
}

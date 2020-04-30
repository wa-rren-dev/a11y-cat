import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SpecificationList } from "../Specification/SpecificationList";
import { Specification } from "../Specification/Specification";
import { AuditCreate } from "../Audit/AuditCreate";
import { AuditEdit } from "../Audit/AuditEdit";
import { Home } from "../Home/Home";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import "./App.scss";
import { AuditList } from "../Audit/AuditList";
import { RequirementDetail } from "../Requirement/RequirementDetail";
import { RequirementList } from "../Requirement/RequirementList";

const client = new ApolloClient({
	uri: "http://localhost:3000/admin/api"
});

function App() {
	return (
		<main>
			<Router>
				<Header />
				<ErrorBoundary>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/specifications" exact>
							<SpecificationList />
						</Route>
						<Route path="/specifications/:id" exact>
							<Specification />
						</Route>
						<Route path="/audits" exact>
							<AuditList />
						</Route>
						<Route path="/audits/create" exact>
							<AuditCreate />
						</Route>
						<Route path="/audits/:id/edit" exact>
							<AuditEdit />
						</Route>
						<Route path="/requirements" exact>
							<RequirementList />
						</Route>
						<Route path="/requirements/:id" exact>
							<RequirementDetail />
						</Route>
					</Switch>
				</ErrorBoundary>
				<Footer />
			</Router>
		</main>
	);
}

export const AppConnected = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

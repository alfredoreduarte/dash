/** @format */

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import AddTodo from "./containers/AddTodo"
import VisibleTodoList from "./containers/VisibleTodoList"
import { actions as userActions } from "./containers/Users/store"
import UsersContainer from "./containers/Users/"

let BasicExample = ({ actions }) => (
	<Router>
		<div>
			<Nav />
			<div className="content-wrapper">
				<div className="container-fluid">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/redux">Redux Example</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>

					<hr />

					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/redux" component={ReduxExample} />
					<Route path="/Users" component={UsersContainer} />
					<Route path="/topics" component={Topics} />
				</div>
			</div>
			<Dashboard />
			<Form />
		</div>
	</Router>
)

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<Helmet>
			<title>About</title>
		</Helmet>
		<h2>About</h2>
	</div>
)

const ReduxExample = () => (
	<div>
		<Helmet>
			<title>Redux Example</title>
		</Helmet>
		<h2>Redux Example</h2>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

const Topics = ({ match }) => (
	<div>
		<Helmet>
			<title>Topics</title>
		</Helmet>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route
			exact
			path={match.url}
			render={() => <h3>Please select a topic.</h3>}
		/>
	</div>
)

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
)

BasicExample = connect(
	state => ({}),
	dispatch => ({})
)(BasicExample)

export default BasicExample

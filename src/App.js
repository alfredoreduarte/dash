/** @format */

import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import AddTodo from "./containers/AddTodo"
import VisibleTodoList from "./containers/VisibleTodoList"

import Home from "./routes/Home"
import Users from "./Users/routes"

let BasicExample = ({ actions }) => (
	<Router>
		<div>
			<Nav />
			<div className="content-wrapper">
				<div className="container-fluid">
					<Route exact path="/" component={Home} />
					<Route path="/users" component={Users} />
					<Route path="/redux" component={ReduxExample} />
					<Route path="/topics" component={Topics} />
				</div>
			</div>
		</div>
	</Router>
)

const ReduxExample = () => (
	<div>
		<Helmet>
			<title>Redux Example</title>
		</Helmet>
		<p>
			<Link to="/">Back</Link>
		</p>
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
		<p>
			<Link to="/">Back</Link>
		</p>
		<h2>
			Topics <small>React-router demo</small>
		</h2>
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
		<Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
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

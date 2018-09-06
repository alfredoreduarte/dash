/** @format */

import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import { Route, Switch } from "react-router-dom"

import { bindActionCreators } from "redux"
import { actions as userActions } from "./store"

import Index from "../screens/users/"
import New from "../screens/users/New"
import Edit from "../screens/users/Edit"
import Show from "../screens/users/Show"

class UsersContainer extends Component {
	componentDidMount() {
		this.props.didInvalidateUsers && this.props.actions.fetchUsers()
	}
	render() {
		return (
			<div>
				<Helmet>
					<title>Users</title>
				</Helmet>
				<Switch>
					<Route exact path="/users" component={Index} />
					<Route exact path="/users/new" component={New} />
					<Route exact path="/users/:id" component={Show} />
					<Route exact path="/users/:id/edit" component={Edit} />
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	didInvalidateUsers: state.users.didInvalidate,
})

const mapDispatchToProps = (dispatch, props) => ({
	actions: bindActionCreators({ ...userActions }, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersContainer)

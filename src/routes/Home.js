/** @format */

import React, { Component } from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"

import { bindActionCreators } from "redux"
import { actions as userActions } from "../Users/store"

import Index from "../screens/Home"

class Home extends Component {
	componentDidMount() {
		this.props.didInvalidateUsers && this.props.actions.fetchUsers()
	}
	render() {
		return (
			<div>
				<Route exact path="/" component={Index} />
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
)(Home)

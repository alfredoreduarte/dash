/** @format */

import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import Breadcrumb from "../../Users/Breadcrumb/"
import User from "../../Users/components/User"

const Users = ({ user }) => (
	<div className="container-fluid">
		<Helmet>
			<title>{user ? user.name : "Showing user"}</title>
		</Helmet>
		<Breadcrumb />
		<div className="row">
			<div className="col-6">
				{user && <User user={user} />}
				{!user && <p>User not available</p>}
			</div>
		</div>
	</div>
)

const mapStateToProps = (state, props) => ({
	user: state.users.items.filter(t => t.id === parseInt(props.match.params.id))[0],
})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users)

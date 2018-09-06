/** @format */

import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { editFormName } from "../../Users/"
import Breadcrumb from "../../Users/Breadcrumb/"
import Form from "../../Users/Form/"

const Users = ({ user }) => (
	<div className="">
		<Helmet>
			<title>Edit User</title>
		</Helmet>
		<Breadcrumb />
		<div className="row">
			<div className="col-6">
				<Form form={editFormName} initialValues={user} />
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

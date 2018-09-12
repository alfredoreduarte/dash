/** @format */

import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { createFormName } from "../../Users/"
import Breadcrumb from "../../Users/Breadcrumb/"
import Form from "../../Users/Form/"

const Users = ({ actions }) => (
	<div className="container-fluid">
		<Helmet>
			<title>Create User</title>
		</Helmet>
		<Breadcrumb />
		<div className="row">
			<div className="col-6">
				<Form form={createFormName} />
			</div>
		</div>
	</div>
)

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users)

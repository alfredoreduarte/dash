/** @format */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const User = ({ id, name, username, email, website, actions }) => (
	<div className="media mb-4">
		<div className="mr-3 rounded-circle bg-turquoise st-alphabet">
			{name.substring(0, 1)}
			<span className="status bg-success" />
		</div>
		<div className="media-body list-widget-border">
			<div className="float-left">
				<h6 className="text-uppercase mb-2" title={`ID: ${id}`}>
					{name}
					<span
						className="pl-3 
				 	text-success
				 "
					>
						{username}
					</span>
				</h6>
				<span className="text-muted">{email}</span>
				<br />
			</div>
			<div className=" float-right">
				<small className="text-muted">{website}</small>
				<br />
				<Link to={`/users/${id}`}>
					<small>
						<u>View</u>
					</small>
				</Link>{" "}
				<Link to={`/users/${id}/edit`}>
					<small>
						<u>Edit</u>
					</small>
				</Link>{" "}
				<a href="javascript:void(0)" onClick={() => actions.deleteUser({ id })}>
					<small className="text-danger">
						<u>Delete</u>
					</small>
				</a>
			</div>
		</div>
	</div>
)

User.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
}

export default User

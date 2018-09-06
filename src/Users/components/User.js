/** @format */

import React from "react"
import PropTypes from "prop-types"

const User = ({ user: { id, name, email } }) => (
	<div className="card card-shadow mb-4">
		<div className="card-header border-0">
			<div className="custom-title-wrap bar-danger">
				<div className="custom-title">{name}</div>
				<div className="custom-post-title">{email}</div>
			</div>
		</div>
		<div className="card-body" />
	</div>
)

User.propTypes = {
	user: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			email: PropTypes.string,
		}).isRequired
	).isRequired,
}

export default User

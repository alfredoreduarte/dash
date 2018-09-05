/** @format */

import React from "react"
import humps from "humps"
import PropTypes from "prop-types"
import User from "./User"
import { types } from "../containers/Users/store"

const Users = ({ users, actions }) => (
	<div>
		<h2>Users</h2>
		<button onClick={actions.fetchUsers}>fetch users</button>
		<ul>{users.map(user => <User key={user.id} {...user} />)}</ul>
	</div>
)

Users.propTypes = {
	users: PropTypes.array.isRequired,
}

export default Users

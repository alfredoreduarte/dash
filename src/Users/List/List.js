/** @format */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ListItem from "../ListItem/"

const UserList = ({ users, isDeleting }) => (
	<div className="">
		<div className="card card-shadow mb-4">
			<div className="card-header border-0">
				<div className="custom-title-wrap bar-danger">
					<div className="custom-title">
						Users
						<ul className="nav nav-pills nav-pill-primary nav-pill-custom nav-pills-sm float-right">
							<li className="nav-item">
								<Link to="/users/new" className="nav-link active">
									New user
								</Link>
							</li>
						</ul>
					</div>
					<div className="custom-post-title">Users list</div>
				</div>
			</div>
			<div className="card-body">
				<ul
					className="list-unstyled mb-0 list-widget"
					style={{
						opacity: isDeleting ? 0.5 : 1,
					}}
				>
					{users.map(item => (
						<li key={item.id}>
							<ListItem {...item} />
						</li>
					))}
					<li className="text-center">
						<a href="javascript:;" className="more-list">
							<i className="vl_ellipsis-fill-h" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
)

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	isDeleting: PropTypes.bool.isRequired,
}

export default UserList

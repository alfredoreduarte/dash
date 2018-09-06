/** @format */

import React from "react"
import { Route, Link } from "react-router-dom"

const Breadcrumb = ({ actions }) => (
	<div className="page-title mb-4 d-flex align-items-center">
		<div className="mr-auto">
			<h4 className="weight500 d-inline-block pr-3 mr-3 border-right">Users</h4>
			<nav aria-label="breadcrumb" className="d-inline-block ">
				<ol className="breadcrumb p-0">
					<li className="breadcrumb-item">
						<Link to="/">Home</Link>
					</li>
					<Route
						exact
						path="/users/new"
						component={() => (
							<li className="breadcrumb-item active" aria-current="page">
								New
							</li>
						)}
					/>
					<Route
						exact
						path="/users/:id"
						component={() => (
							<li className="breadcrumb-item active" aria-current="page">
								Show
							</li>
						)}
					/>
					<Route
						exact
						path="/users/:id/edit"
						component={() => (
							<li className="breadcrumb-item active" aria-current="page">
								Edit
							</li>
						)}
					/>
				</ol>
			</nav>
		</div>
		<Route
			exact
			path="/users"
			component={() => (
				<button onClick={actions.fetchUsers} className="btn btn-sm btn-primary float-right">
					Fetch users
				</button>
			)}
		/>
	</div>
)

export default Breadcrumb

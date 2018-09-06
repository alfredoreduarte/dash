/** @format */

import React from "react"
import PropTypes from "prop-types"
import { Field } from "redux-form"
import { Link } from "react-router-dom"
import { editFormName } from "../"

const Form = ({ handleSubmit, submitting, form }) => (
	<div className="card card-shadow mb-4">
		<div className="card-header border-0">
			<div className="custom-title-wrap bar-danger">
				<div className="custom-title">
					{form === editFormName ? "Editing User" : "New user"}
					<ul className="nav nav-pills nav-pill-secondary nav-pill-custom nav-pills-sm float-right">
						<li className="nav-item">
							<Link to="/users" className="nav-link active">
								Cancel
							</Link>
						</li>
					</ul>
				</div>
				<div className="custom-post-title">
					{form === editFormName ? "Update an existing User" : "Create a new User"}
				</div>
			</div>
		</div>
		<div className="card-body">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name</label>
					<Field
						name="name"
						className="form-control"
						component="input"
						type="text"
						placeholder="Full name"
					/>
				</div>
				<div className="form-group">
					<label>Email address</label>
					<Field
						name="email"
						className="form-control"
						component="input"
						type="email"
						placeholder="Enter email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label>Password</label>
					<Field
						name="password"
						className="form-control"
						component="input"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div className="form-check form-group">
					<label className="form-check-label">
						<Field
							name="subscribe"
							className="form-check-input"
							component="input"
							type="checkbox"
						/>Check me out
					</label>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-purple" disabled={submitting}>
						{submitting ? "Please wait..." : "Submit"}
					</button>
					<Link to="/users" href="javascript:;" className="btn btn-outline-secondary">
						Cancel
					</Link>
				</div>
			</form>
		</div>
	</div>
)

Form.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	form: PropTypes.string.isRequired,
}

export default Form

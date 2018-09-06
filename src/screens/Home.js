/** @format */

import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import UserList from "../Users/List/"
import UserForm from "../Users/Form/"

const mapStateToProps = (state, props) => ({
	usersCount: state.users.items.length,
})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(({ usersCount }) => (
	<div className="">
		<Helmet>
			<title>Dash</title>
		</Helmet>
		<div className="row">
			<div className="col-xl-6 col-md-12">
				<div className="row">
					<div className="col-sm-6">
						<Link to="/users" className="card card-shadow mb-4">
							<div className="card-body">
								<div className="media d-flex align-items-center">
									<div className="mr-4 rounded-circle bg-warning sr-icon-box bubble-shadow-small">
										<i className="vl_user-male" />
									</div>
									<div className="media-body">
										<h4 className="text-uppercase mb-0 weight500 text-dark">
											{usersCount}
										</h4>
										<span className="text-muted">Users</span>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className=" col-sm-6">
						<div className="card card-shadow mb-4">
							<div className="card-body">
								<div className="media d-flex align-items-center">
									<div className="mr-4 rounded-circle bg-purple sr-icon-box bubble-shadow-small">
										<i className="vl_download" />
									</div>
									<div className="media-body">
										<h4 className="text-uppercase mb-0 weight500 text-dark">
											4,87,654
										</h4>
										<span className="text-muted">Dummy data</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=" col-sm-6">
						<div className="card card-shadow mb-4">
							<div className="card-body">
								<div className="media d-flex align-items-center">
									<div className="mr-4 rounded-circle bg-danger sr-icon-box bubble-shadow-small">
										<i className="vl_shopping-bag2" />
									</div>
									<div className="media-body">
										<h4 className="text-uppercase mb-0 weight500 text-dark">
											4,87,654
										</h4>
										<span className="text-muted">Dummy data</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card card-shadow mb-4">
							<div className="card-body">
								<div className="media d-flex align-items-center">
									<div className="mr-4 rounded-circle bg-purple-light sr-icon-box bubble-shadow-small">
										<i className="vl_cart-empty" />
									</div>
									<div className="media-body">
										<h4 className="text-uppercase mb-0 weight500 text-dark">
											4,87,654
										</h4>
										<span className="text-muted">Dummy data</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-4">
				<UserList />
			</div>
			<div className="col-4">
				<UserForm form="createUser" />
			</div>
			<div className="col-4">
				<div className="card card-shadow mb-4">
					<div className="card-header border-0">
						<div className="custom-title-wrap bar-danger">
							<div className="custom-title">Demos</div>
						</div>
					</div>
					<div className="card-body">
						<ul className="list-unstyled mb-0 list-widget">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/redux">Redux TODO App</Link>
							</li>
							<li>
								<Link to="/users">Users CRUD</Link>
							</li>
							<li>
								<Link to="/topics">react-router</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
))
/** @format */

import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import Tabs from "../components/Tabs"
import TabList from "../components/TabList"
import Tab from "../components/Tab"
import TabPane from "../components/TabPane"
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
					<div className="col-sm-12">
						<div className="card card-shadow mb-4">
							<div className="card-header border-0">
								<div className="custom-title-wrap bar-danger">
									<div className="custom-title">Dropdowns</div>
									<div className="widget-action-link">
										<Link
											to="/users"
											className="btn btn-transparent text-secondary p-0 text-muted"
										>
											Subtle link
										</Link>
									</div>
								</div>
							</div>
							<div className="card-body">
								<p className="text-muted mt-3">Button Variant</p>
								{[
									"danger",
									"info",
									"warning",
									"success",
									"primary",
									"secondary",
									"outline-primary",
								].map(btnStyle => (
									<div key={btnStyle} className="btn-group">
										<Dropdown
											title={btnStyle}
											className={`btn-${btnStyle}`}
											arrow
										>
											<a href="#">Action</a>
											<div className="dropdown-divider" />
											<a href="#">Action2</a>
											<a href="#">Action3</a>
										</Dropdown>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-6 col-md-12">
				<div className="card card-shadow mb-4">
					<div className="card-header border-0">
						<div className="custom-title-wrap bar-danger">
							<div className="custom-title">Tabs</div>
							<div className="widget-action-link">
								<Dropdown
									title={<i className="vl_ellipsis-fill-h" />}
									className="btn-transparent text-secondary p-0"
									menuClassName="dropdown-menu-right vl-dropdown"
								>
									<a href="#">Action</a>
									<a href="#">Action2</a>
									<a href="#">Action3</a>
								</Dropdown>
							</div>
						</div>
					</div>
					<div className="card-body">
						<p className="text-muted mt-3">Tabs</p>
						<Tabs>
							<TabList className="mb-3 nav-tabs">
								<Tab>Tab 1</Tab>
								<Tab>Tab 2</Tab>
							</TabList>
							<TabPane>
								<img src="/images/trump-left.jpg" style={{ width: "100px" }} />
							</TabPane>
							<TabPane>
								<img src="/images/trump-right.jpg" style={{ width: "100px" }} />
							</TabPane>
						</Tabs>
						<p className="text-muted mt-3">Pills</p>
						<Tabs>
							<TabList className="mb-3 nav-pills">
								<Tab>Tab 1</Tab>
								<Tab>Tab 2</Tab>
							</TabList>
							<TabPane>
								<img src="/images/trump-left.jpg" style={{ width: "100px" }} />
							</TabPane>
							<TabPane>
								<img src="/images/trump-right.jpg" style={{ width: "100px" }} />
							</TabPane>
						</Tabs>
						<p className="text-muted mt-3">Justified</p>
						<Tabs>
							<TabList className="mb-3 nav-pills nav-fill">
								<Tab>Tab 1</Tab>
								<Tab>Tab 2</Tab>
							</TabList>
							<TabPane>
								<img src="/images/trump-left.jpg" style={{ width: "100px" }} />
							</TabPane>
							<TabPane>
								<img src="/images/trump-right.jpg" style={{ width: "100px" }} />
							</TabPane>
						</Tabs>
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
							<div className="widget-action-link">
								<Dropdown
									title="Filter"
									className="btn-transparent text-secondary p-0"
									menuClassName="dropdown-menu-right vl-dropdown"
									arrow
								>
									<a href="#">Action</a>
									<a href="#">Action2</a>
									<a href="#">Action3</a>
								</Dropdown>
							</div>
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

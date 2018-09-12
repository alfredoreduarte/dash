/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import classNames from "classnames"
import NavDropdown from "./NavDropdown"
import NavLink from "./NavLink"
import MegaMenu from "./MegaMenu/"
import DropdownHeader from "./DropdownHeader"

class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			leftSidebarCollapsed: true,
			responsiveBarCollapsed: true,
		}
		this.LEFT_SIDE_TOGGLED_CLASS = "left-side-toggled"
		this.toggleSideNav = this.toggleSideNav.bind(this)
		this.toggleResponsiveNav = this.toggleResponsiveNav.bind(this)
	}
	componentDidMount() {
		document.body.classList.add("fixed-nav")
		if (this.props.floating) {
			document.body.classList.add("leftnav-floating")
		}
	}

	componentWillUnmount() {}

	toggleSideNav() {
		if (this.state.leftSidebarCollapsed) {
			document.body.classList.add(this.LEFT_SIDE_TOGGLED_CLASS)
		} else {
			document.body.classList.remove(this.LEFT_SIDE_TOGGLED_CLASS)
		}
		this.setState(state => ({
			leftSidebarCollapsed: !state.leftSidebarCollapsed,
		}))
	}

	toggleResponsiveNav() {
		this.setState(state => ({
			responsiveBarCollapsed: !state.responsiveBarCollapsed,
		}))
	}

	render() {
		const { toggleSideNav, toggleResponsiveNav, toggleMegaMenu } = this
		const { leftSidebarCollapsed, responsiveBarCollapsed } = this.state
		const { className } = this.props
		return (
			<nav className={className} id="mainNav">
				<MegaMenu />
				<button className="navbar-toggler" type="button" onClick={toggleResponsiveNav}>
					<span className="navbar-toggler-icon" />
				</button>

				<a
					href="javascript:;"
					className="nav-link right_side_toggle responsive-right-side-toggle"
				>
					<i className="icon-options-vertical"> </i>
				</a>

				<div
					className={classNames("collapse navbar-collapse", {
						show: !responsiveBarCollapsed,
					})}
				>
					<ul className="navbar-nav left-side-nav">
						<li className="nav-item-search">
							<div className="nav-link nav-link-collapse collapsed">
								<i className="vl_search" />
								<span className="nav-link-text">
									<input
										type="text"
										className="search-form"
										placeholder="Search"
									/>
								</span>
							</div>
						</li>

						<NavLink level="second" iconClass="vl_dashboard" title="Menucito">
							<li>
								{" "}
								<a href="index.html">Dashboard 1</a>{" "}
							</li>
							<li className={"active"}>
								{" "}
								<a href="index.html">Active link</a>{" "}
							</li>
						</NavLink>

						<NavLink level="second" iconClass="vl_sitemap1" title="Menu Levels">
							<li>
								{" "}
								<a href="index.html">Second Level Item</a>{" "}
							</li>
							<li>
								{" "}
								<a href="index.html">Second Level Item</a>{" "}
							</li>
							<NavLink level="third" title="Third Level">
								<li>
									<a href="javascript:;">show</a>
								</li>
								<li className="active">
									<a href="javascript:;">shwwww</a>
								</li>
							</NavLink>
						</NavLink>
					</ul>

					<ul className="navbar-nav sidenav-toggler">
						<li className="nav-item">
							<a className="nav-link text-center" onClick={toggleSideNav}>
								{leftSidebarCollapsed && <i className="fa fa-angle-left" />}
								{!leftSidebarCollapsed && <i className="fa fa-angle-right" />}
							</a>
						</li>
					</ul>

					<ul className="navbar-nav header-links">
						<NavDropdown title="Application">
							<Link to="/" className="dropdown-item">
								Home
							</Link>
							<Link to="/users" className="dropdown-item">
								Users
							</Link>
							<Link to="/redux" className="dropdown-item">
								Redux
							</Link>
							<Link to="/topics" className="dropdown-item">
								React-router
							</Link>
						</NavDropdown>
					</ul>
					<ul className="navbar-nav header-links">
						<NavDropdown title="More examples">
							<Link to="/" className="dropdown-item">
								Home
							</Link>
							<div className="dropdown-divider" />
							<Link to="/users" className="dropdown-item">
								Users
							</Link>
							<Link to="/redux" className="dropdown-item">
								Redux
							</Link>
						</NavDropdown>
					</ul>

					<ul className="navbar-nav header-links ml-auto hide-arrow">
						<NavDropdown
							side="right"
							title={
								<React.Fragment>
									<i className="vl_bell" />
									<span className="d-lg-none ml-1">
										Notification
										<span className="badge badge-pill badge-warning">
											5 New
										</span>
									</span>
								</React.Fragment>
							}
						>
							<DropdownHeader>Notification</DropdownHeader>

							<div className="dropdown-divider mb-0" />
							<Link to="/" className="dropdown-item">
								<span className="text-primary">
									<span className="weight500">
										<i className="vl_bell weight600 pr-2" />Weekly Update
									</span>
								</span>
								<span className="small float-right text-muted">03:14 AM</span>

								<div className="dropdown-message f12">
									This week project update report generated. All team members are
									requested to check the updates
								</div>
							</Link>
							<Link to="/" className="dropdown-item">
								<span className="text-danger">
									<span className="weight500">
										<i className="vl_Download-circle weight600 pr-2" />Server
										Error
									</span>
								</span>
								<span className="small float-right text-muted">10:34 AM</span>

								<div className="dropdown-message f12">
									Unexpectedly server response stop. Responsible members are
									requested to fix it soon
								</div>
							</Link>
							<Link to="/" className="dropdown-item">
								<span className="text-success">
									<span className="weight500">
										<i className="vl_screen weight600 pr-2" />Monthly Meeting
									</span>
								</span>
								<span className="small float-right text-muted">12:30 AM</span>

								<div className="dropdown-message f12">
									Our monthly meeting will be held on tomorrow sharp 12:30. All
									members are requested to attend this meeting.
								</div>
							</Link>
							<Link to="/" className="dropdown-item">
								View all notification
							</Link>
						</NavDropdown>

						<NavDropdown
							side="right"
							title={
								<div className="user-thumb">
									<img
										className="rounded-circle"
										src="/images/avatar1.jpg"
										alt=""
									/>
									<span className="d-lg-none ml-1">
										Notification
										<span className="badge badge-pill badge-warning">
											5 New
										</span>
									</span>
								</div>
							}
						>
							<Link to="/" className="dropdown-item">
								Home
							</Link>
							<Link to="/users" className="dropdown-item">
								Users <span className="badge badge-primary">3</span>
							</Link>
							<div className="dropdown-divider" />
							<Link to="/redux" className="dropdown-item">
								Redux <span className="badge badge-success">5</span>
							</Link>
						</NavDropdown>
						<li className="nav-item d-none">
							<a href="javascript:;" className="nav-link right_side_toggle">
								<i className="icon-options-vertical"> </i>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

MegaMenu.propTypes = {
	floating: PropTypes.bool,
}

export default Nav

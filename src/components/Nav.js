/** @format */

import React, { Component } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import NavDropdown from "./NavDropdown"
import NavLink from "./NavLink"
import MegaMenu from "./MegaMenu"
import DropdownHeader from "./DropdownHeader"

class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			leftSidebarCollapsed: true,
		}
		this.LEFT_SIDE_TOGGLED_CLASS = "left-side-toggled"
		this.toggleSideNav = this.toggleSideNav.bind(this)
	}
	componentDidMount() {
		this.toggleSideNav()
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

	render() {
		const { toggleSideNav, toggleMegaMenu } = this
		const { leftSidebarCollapsed } = this.state
		return (
			<nav className="navbar navbar-expand-lg fixed-top navbar-dark" id="mainNav">
				<MegaMenu />
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<a
					href="javascript:;"
					className="nav-link right_side_toggle responsive-right-side-toggle"
				>
					<i className="icon-options-vertical"> </i>
				</a>

				<div className="collapse navbar-collapse">
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

					<ul className="navbar-nav header-links" id="cosote">
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
						</NavDropdown>
					</ul>
					<ul className="navbar-nav header-links" id="cosote2">
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
						<li className="nav-item dropdown d-none">
							<a
								className="nav-link dropdown-toggle mr-lg-3"
								id="messagesDropdown"
								href="javascript:;"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="vl_chat-bubble" />
								<span className="d-lg-none">
									Messages
									<span className="badge badge-pill badge-primary">9 New</span>
								</span>
								<div className="notification-alarm">
									<span className="wave wave-danger" />
									<span className="dot" />
								</div>
							</a>

							<div
								className="dropdown-menu dropdown-menu-right header-right-dropdown-width pb-0"
								aria-labelledby="messagesDropdown"
							>
								<h6 className="dropdown-header weight500 ">Messages</h6>
								<div className="dropdown-divider mb-0" />
								<a
									className="dropdown-item border-bottom msg-unread"
									href="javascript:;"
								>
									<div className="float-left notificaton-thumb">
										<img
											className="rounded-circle"
											src="assets/img/avatar/avatar4.jpg"
											alt=""
										/>
									</div>
									<span className="weight500">Andrew Flinton</span>
									<span className="small float-right text-muted">08:30 AM</span>

									<div className="dropdown-message">
										I hope that you will be there in time. See you then
									</div>
								</a>

								<a
									className="dropdown-item border-bottom msg-unread"
									href="javascript:;"
								>
									<div className="float-left notificaton-thumb">
										<img
											className="rounded-circle"
											src="assets/img/avatar/avatar2.jpg"
											alt=""
										/>
									</div>
									<span className="weight500">John Doe</span>
									<span className="small float-right text-muted">10:28 AM</span>

									<div className="dropdown-message">
										Hello this is an example message. Just want to show how it
										looks
									</div>
								</a>

								<a className="dropdown-item border-bottom" href="javascript:;">
									<div className="float-left notificaton-thumb">
										<img
											className="rounded-circle"
											src="assets/img/avatar/avatar3.jpg"
											alt=""
										/>
									</div>
									<span className="weight500">Dash Don</span>
									<span className="small float-right text-muted">07:12 PM</span>

									<div className="dropdown-message">
										Hi, This is Dash Don form usa. I'm looking for someone who
										really good at design and frontend like mosaddek
									</div>
								</a>

								<a className="dropdown-item border-bottom" href="javascript:;">
									<div className="float-left notificaton-thumb">
										<img
											className="rounded-circle"
											src="assets/img/avatar/avatar1.jpg"
											alt=""
										/>
									</div>
									<span className="weight500">dkmosa</span>
									<span className="small float-right text-muted">12:10 PM</span>

									<div className="dropdown-message">
										We build a beautiful dashboard admin panel for professional
									</div>
								</a>
								<a className="dropdown-item small" href="javascript:;">
									View all messages
								</a>
							</div>
						</li>
						<NavDropdown side="right" title={<i className="vl_bell" />}>
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
						<li className="nav-item dropdown d-none">
							<a
								className="nav-link dropdown-toggle mr-lg-3"
								id="alertsDropdown"
								href="javascript:;"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="vl_bell" />
								<span className="d-lg-none">
									Notification
									<span className="badge badge-pill badge-warning">5 New</span>
								</span>
								<div className="notification-alarm">
									<span className="wave wave-warning" />
									<span className="dot bg-warning" />
								</div>
							</a>

							<div
								className="dropdown-menu dropdown-menu-right header-right-dropdown-width pb-0"
								aria-labelledby="alertsDropdown"
							>
								<h6 className="dropdown-header weight500">Notification</h6>

								<div className="dropdown-divider mb-0" />
								<a className="dropdown-item border-bottom" href="javascript:;">
									<span className="text-primary">
										<span className="weight500">
											<i className="vl_bell weight600 pr-2" />Weekly Update
										</span>
									</span>
									<span className="small float-right text-muted">03:14 AM</span>

									<div className="dropdown-message f12">
										This week project update report generated. All team members
										are requested to check the updates
									</div>
								</a>

								<a className="dropdown-item small" href="javascript:;">
									View all notification
								</a>
							</div>
						</li>
						<NavDropdown
							side="right"
							title={
								<div className="user-thumb">
									<img
										className="rounded-circle"
										src="/images/avatar1.jpg"
										alt=""
									/>
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

export default Nav

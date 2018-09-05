/** @format */

import React from "react"

const Nav = ({ active, children, onClick }) => (
	<nav className="navbar navbar-expand-lg fixed-top navbar-dark" id="mainNav">
		<a className="navbar-brand" href="#" data-jq-dropdown="#jq-dropdown-1">
			<img
				className="pr-3 float-left"
				src="/images/logo-icon.png"
				srcSet="/images/logo-icon@2x.png 2x"
				alt=""
			/>
			<div className="float-left">
				<div>
					DashLab <i className="fa fa-caret-down pl-2" />
				</div>
				<span className="page-direction f12 weight300">
					<span>home</span>
					<i className="fa fa-angle-right" />
					<span>ui element</span>
				</span>
			</div>
		</a>

		<div id="jq-dropdown-1" className="jq-dropdown">
			<div className="b-mega-menu">
				<div className="card card-shadow">
					<div className="card-header p-2 pl-3">
						<div className="navbar-brand mt-2">
							<img
								className="pr-3 float-left"
								src="assets/img/logo-icon.png"
								srcSet="assets/img/logo-icon@2x.png 2x"
								alt=""
							/>
							<div className="float-left">
								<div>DashLab</div>
								<span className="page-direction f12 weight300">
									<span>home</span>
									<i className="fa fa-angle-right" />
									<span>ui element</span>
								</span>
							</div>
						</div>

						<div className="widget-action-link">
							<ul
								className="nav nav-tabs wal-nav-tabs"
								id="myTab"
								role="tablist"
							>
								<li className="nav-item">
									<a
										className="nav-link active"
										id="home-tab"
										data-toggle="tab"
										href="#home"
										role="tab"
										aria-controls="home"
										aria-selected="true"
									>
										<i className="fa fa-home" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="analytics-tab"
										data-toggle="tab"
										href="#analytics"
										role="tab"
										aria-controls="analytics"
										aria-selected="false"
									>
										<i className="fa fa-desktop" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="application-tab"
										data-toggle="tab"
										href="#application"
										role="tab"
										aria-controls="application"
										aria-selected="false"
									>
										<i className="fa fa-magnet" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="card-body p-0 ">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab"
							>
								<div className="row no-gutters">
									<div className="col-4 border-right">
										<div
											className="nav flex-column nav-pills"
											id="v-pills-tab"
											role="tablist"
											aria-orientation="vertical"
										>
											<a
												className="nav-link active"
												id="v-pills-home-tab"
												data-toggle="pill"
												href="#v-pills-home"
												role="tab"
												aria-controls="v-pills-home"
												aria-selected="true"
											>
												<i className="fa fa-home pr-2" />{" "}
												Application
											</a>
											<a
												className="nav-link"
												id="v-pills-report-tab"
												data-toggle="pill"
												href="#v-pills-report"
												role="tab"
												aria-controls="v-pills-report"
												aria-selected="false"
											>
												<i className="fa fa-desktop pr-2" />{" "}
												Reports
											</a>
											<a
												className="nav-link"
												id="v-pills-management-tab"
												data-toggle="pill"
												href="#v-pills-management"
												role="tab"
												aria-controls="v-pills-management"
												aria-selected="false"
											>
												<i className="fa fa-magnet pr-2" />Management
											</a>
											<a
												className="nav-link"
												id="v-pills-blog-tab"
												data-toggle="pill"
												href="#v-pills-blog"
												role="tab"
												aria-controls="v-pills-blog"
												aria-selected="false"
											>
												<i className="fa fa-comments-o pr-2" />Blog
											</a>
										</div>
									</div>
									<div className="col-8">
										<div
											className="tab-content"
											id="v-pills-tabContent"
										>
											<div
												className="tab-pane fade show active"
												id="v-pills-home"
												role="tabpanel"
												aria-labelledby="v-pills-home-tab"
											>
												<ul className="list-unstyled b-mega-menu-link">
													<li>
														<a href="#">
															Bootstrap 4 Stable
														</a>
													</li>
													<li className="active">
														<a href="javascript:;">
															DashLab Modern Admin
														</a>
													</li>
													<li>
														<a href="#">
															Awesome Widgets
															Collection
														</a>
													</li>
													<li>
														<a href="#">
															Developer Friendly
															Code
														</a>
													</li>
													<li>
														<a href="#">
															SASS and GULP Task
														</a>
													</li>
													<li>
														<a href="#">
															Fully Responsive
														</a>
													</li>
												</ul>
											</div>
											<div
												className="tab-pane fade"
												id="v-pills-report"
												role="tabpanel"
												aria-labelledby="v-pills-report-tab"
											>
												<ul className="list-unstyled b-mega-menu-link">
													<li>
														<a href="#">
															Daily Reports
														</a>
													</li>
													<li>
														<a href="javascript:;">
															Weekly Reports
														</a>
													</li>
													<li className="active">
														<a href="#">
															Monthly Reports
														</a>
													</li>
													<li>
														<a href="#">
															Yearly Reports
														</a>
													</li>
													<li>
														<a href="#">
															HR Reports
														</a>
													</li>
													<li>
														<a href="#">
															Product Reports
														</a>
													</li>
													<li>
														<a href="#">
															Order Reports
														</a>
													</li>
													<li>
														<a href="#">
															Revenue Reports
														</a>
													</li>
												</ul>
											</div>
											<div
												className="tab-pane fade"
												id="v-pills-management"
												role="tabpanel"
												aria-labelledby="v-pills-management-tab"
											>
												<ul className="list-unstyled b-mega-menu-link">
													<li>
														<a href="#">
															HR Management
														</a>
													</li>
													<li className="active">
														<a href="javascript:;">
															Product Management
														</a>
													</li>
													<li>
														<a href="#">
															Role Management
														</a>
													</li>
													<li>
														<a href="#">
															Sales Management
														</a>
													</li>
													<li>
														<a href="#">
															Employee Management
														</a>
													</li>
												</ul>
											</div>
											<div
												className="tab-pane fade"
												id="v-pills-blog"
												role="tabpanel"
												aria-labelledby="v-pills-blog-tab"
											>
												<ul className="list-unstyled b-mega-menu-link">
													<li className="active">
														<a href="#">
															Educational Blog
														</a>
													</li>
													<li>
														{" "}
														<a href="javascript:;">
															Technology Blog
														</a>
													</li>
													<li>
														<a href="#">
															Political Blog
														</a>
													</li>
													<li>
														<a href="#">
															Woocommerce Blog
														</a>
													</li>
													<li>
														<a href="#">
															Entertainment Blog
														</a>
													</li>
													<li>
														<a href="#">
															Newspapper Blog
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="tab-pane fade"
								id="analytics"
								role="tabpanel"
								aria-labelledby="analytics-tab"
							>
								<div className="p-5 m-4 text-center">
									<i className="fa fa-desktop f50 text-muted mb-4" />
									<p className="mb-5">
										Contrary to popular belief, Lorem Ipsum
										is not simply random text. It has roots
										in a piece of classical Latin literature
										from 45 BC
									</p>
									<a href="#" className="btn btn-primary">
										Get Started
									</a>
								</div>
							</div>
							<div
								className="tab-pane fade"
								id="application"
								role="tabpanel"
								aria-labelledby="application-tab"
							>
								<div className="p-5 m-4 text-center">
									<i className="fa fa-magnet f50 text-muted mb-4" />
									<p className="mb-5">
										The standard chunk of Lorem Ipsum used
										since the 1500s is reproduced below for
										those interested. Sections 1.10.32 and
										1.10.33
									</p>
									<a href="#" className="btn btn-purple">
										Get Started
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

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

		<div className="collapse navbar-collapse" id="navbarResponsive">
			<ul className="navbar-nav left-side-nav" id="accordion">
				<li
					className="nav-item-search"
					data-toggle="tooltip"
					data-placement="right"
					title="Search"
				>
					<div
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
					>
						<i className="vl_search" />
						<span className="nav-link-text">
							<input
								type="text"
								className="search-form"
								placeholder="Search Report"
							/>
						</span>
					</div>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Dashboard"
				>
					<a
						className="nav-link nav-link-collapse"
						data-toggle="collapse"
						data-target="#dashboard"
					>
						<i className="vl_dashboard" />
						<span className="nav-link-text">Dashboard </span>
					</a>
					<ul
						className="sidenav-second-level collapse show"
						id="dashboard"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="index.html">Dashboard 1</a>{" "}
						</li>
						<li>
							{" "}
							<a href="dashboard-2.html">Dashboard 2</a>
						</li>
						<li className="active">
							{" "}
							<a href="dashboard-3.html">Dashboard 3</a>
						</li>
						<li>
							{" "}
							<a href="dashboard-4.html">Dashboard 4</a>
						</li>
						<li>
							{" "}
							<a href="dashboard-5.html">Dashboard 5</a>
						</li>
						<li>
							{" "}
							<a href="dashboard-6.html">Dashboard 6</a>
						</li>
						<li>
							{" "}
							<a href="dashboard-crypto.html">
								Dashboard Crypto{" "}
								<span className="badge badge-success">New</span>
							</a>
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="UI Elements"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#ui_elements"
					>
						<i className="vl_slider-h-range" />
						<span className="nav-link-text">UI Elements</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="ui_elements"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="alert.html">Alerts</a>{" "}
						</li>
						<li>
							{" "}
							<a href="buttons.html">Buttons</a>
						</li>
						<li>
							{" "}
							<a href="dropdown.html">Dropdown</a>
						</li>
						<li>
							{" "}
							<a href="modals.html">Modal</a>
						</li>
						<li>
							{" "}
							<a href="toastr-notification.html">
								Notification Toastr
							</a>
						</li>
						<li>
							{" "}
							<a href="progress.html">Progress</a>
						</li>
						<li>
							{" "}
							<a href="popover-tooltips.html">Popup & Tooltips</a>
						</li>
						<li>
							{" "}
							<a href="typography.html">Typography</a>
						</li>
						<li>
							{" "}
							<a href="tabs-accordion.html">Tabs & Accordion</a>
						</li>
						<li>
							{" "}
							<a href="tree.html">Tree</a>
						</li>
					</ul>
				</li>
				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Widgets"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#widgets"
					>
						<i className="vl_bond" />
						<span className="nav-link-text">Widgets</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="widgets"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="widget-basic.html">Basic Widgets</a>{" "}
						</li>
						<li>
							{" "}
							<a href="widget-chart.html">Chart Widgets</a>{" "}
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Calendar"
				>
					<a
						className="nav-link"
						href="calendar-external-events.html"
					>
						<i className="vl_calendar" />
						<span className="nav-link-text">
							Calendar{" "}
							<span className="badge badge-primary">2</span>{" "}
						</span>
					</a>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Icons"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#icons"
					>
						<i className="vl_hand-mike" />
						<span className="nav-link-text">Icons</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="icons"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="icon-fontawesome.html">
								Fontawesome Icons
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="icon-simple-line.html">
								Simple Line Icons
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="icon-themify.html">Themify Icons</a>{" "}
						</li>
						<li>
							{" "}
							<a href="icon-weather.html">Weather Icons</a>{" "}
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Forms"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#forms"
					>
						<i className="vl_form" />
						<span className="nav-link-text">Forms</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="forms"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="form-basic.html">Basic Forms</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-checkbox-radio.html">
								Checkbox & Radio
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-input-group.html">Input Group</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-validation.html">
								Form Validation
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="editor-summernote.html">
								Editor Summernote
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-dropzone.html">Dropzone</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-pickers.html">Pickers</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-select2.html">Select 2</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-multi-select.html">
								Multiple Select
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-wizard.html">Form Wizard</a>{" "}
						</li>
						<li>
							{" "}
							<a href="form-switch.html">Switchery</a>{" "}
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Data Tables"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#d_tables"
					>
						<i className="vl_grid-even" />
						<span className="nav-link-text">Data Tables</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="d_tables"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="table-basic.html">Basic Table</a>{" "}
						</li>
						<li>
							{" "}
							<a href="table-datatable.html">Data Table</a>{" "}
						</li>
						<li>
							{" "}
							<a href="table-ajax-datatable.html">
								Ajax Data Table
							</a>{" "}
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Charts"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#charts"
					>
						<i className="vl_graph-bar" />
						<span className="nav-link-text">Charts</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="charts"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="chartjs.html">Chartjs</a>{" "}
						</li>
						<li>
							{" "}
							<a href="echarts.html">eCharts</a>{" "}
						</li>
						<li>
							{" "}
							<a href="amcharts.html">amCharts</a>{" "}
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Exra Pages"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#extra_pages"
					>
						<i className="vl_files" />
						<span className="nav-link-text">Extra Pages</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="extra_pages"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="profile.html">Profile</a>{" "}
						</li>
						<li>
							{" "}
							<a href="invoice.html">Invoice</a>{" "}
						</li>
						<li>
							{" "}
							<a href="blank-page.html">Blank Page</a>{" "}
						</li>
						<li>
							{" "}
							<a href="login.html">Login Page</a>{" "}
						</li>
						<li>
							{" "}
							<a href="registration.html">
								Registration Page
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="404.html">404 Error</a>{" "}
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Layouts"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#layouts"
					>
						<i className="vl_board" />
						<span className="nav-link-text">Layouts</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="layouts"
						data-parent="#accordion"
					>
						<li>
							{" "}
							<a href="layout-top-nav.html">Top Nav </a>
						</li>
						<li>
							{" "}
							<a href="layout-dark-nav.html">
								Dark Left Nav
							</a>{" "}
						</li>
						<li>
							{" "}
							<a href="blank-page.html">Light Left Nav</a>{" "}
						</li>
						<li>
							{" "}
							<a href="layout-default-collapsed.html">
								Nav Collapsed Light
							</a>
						</li>
						<li>
							{" "}
							<a href="layout-dark-nav-collapsed.html">
								Nav Collapsed Dark
							</a>
						</li>
						<li>
							{" "}
							<a href="layout-floating-leftside-dark.html">
								Floating Nav Dark
							</a>
						</li>
						<li>
							{" "}
							<a href="layout-floating-leftside-dark-collapsed.html">
								Floating Collapsed Dark{" "}
							</a>
						</li>
						<li>
							{" "}
							<a href="layout-floating-leftside-light.html">
								Floating Nav Light{" "}
							</a>
						</li>
						<li>
							{" "}
							<a href="layout-floating-leftside-light-collapsed.html">
								Floating Collapsed Light{" "}
							</a>
						</li>
					</ul>
				</li>

				<li
					className="nav-item"
					data-toggle="tooltip"
					data-placement="right"
					title="Menu Levels"
				>
					<a
						className="nav-link nav-link-collapse collapsed"
						data-toggle="collapse"
						data-target="#multi_menu"
					>
						<i className="vl_sitemap1" />
						<span className="nav-link-text">Menu Levels</span>
					</a>
					<ul
						className="sidenav-second-level collapse"
						id="multi_menu"
						data-parent="#accordion"
					>
						<li>
							<a href="#">Second Level Item</a>
						</li>
						<li>
							<a href="#">Second Level Item</a>
						</li>
						<li>
							<a href="#">Second Level Item</a>
						</li>
						<li>
							<a
								className="nav-link nav-link-collapse collapsed"
								data-toggle="collapse"
								data-target="#multi_menu_2"
							>
								Third Level
							</a>
							<ul
								className="sidenav-third-level collapse"
								id="multi_menu_2"
							>
								<li>
									<a href="#">Third Level Item</a>
								</li>
								<li>
									<a href="#">Third Level Item</a>
								</li>
								<li>
									<a href="#">Third Level Item</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>

			<ul className="navbar-nav sidenav-toggler">
				<li className="nav-item">
					<a className="nav-link text-center" id="left-nav-toggler">
						<i className="fa fa-angle-left" />
					</a>
				</li>
			</ul>

			<ul className="navbar-nav header-links">
				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle mr-lg-2"
						id="actionNav"
						href="#"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Application
					</a>
					<div className="dropdown-menu" aria-labelledby="actionNav">
						<a className="dropdown-item" href="#">
							Bootstrap 4 Stable
						</a>
						<a className="dropdown-item" href="#">
							DashLab Modern Admin
						</a>
						<a className="dropdown-item" href="#">
							Awesome Widgets Collection
						</a>
						<a className="dropdown-item" href="#">
							Developer Friendly Code
						</a>
						<a className="dropdown-item" href="#">
							SASS and GULP Task
						</a>
						<a className="dropdown-item" href="#">
							Fully Responsive
						</a>
						<a className="dropdown-item" href="#">
							Latest Version Plugins
						</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle mr-lg-2"
						id="reportNav"
						href="#"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Reports
					</a>
					<div className="dropdown-menu" aria-labelledby="reportNav">
						<a className="dropdown-item" href="#">
							Daily Reports
						</a>
						<a className="dropdown-item" href="#">
							Weekly Reports
						</a>
						<a className="dropdown-item" href="#">
							Monthly Reports
						</a>
						<a className="dropdown-item" href="#">
							Yearly Reports
						</a>
						<a className="dropdown-item" href="#">
							HR Reports
						</a>
						<a className="dropdown-item" href="#">
							Product Reports
						</a>
						<a className="dropdown-item" href="#">
							Order Reports
						</a>
						<a className="dropdown-item" href="#">
							Revenue Reports
						</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle mr-lg-2"
						id="orderNav"
						href="#"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Management
					</a>
					<div className="dropdown-menu" aria-labelledby="orderNav">
						<a className="dropdown-item" href="#">
							HR Management
						</a>
						<a className="dropdown-item" href="#">
							Product Management
						</a>
						<a className="dropdown-item" href="#">
							Role Management
						</a>
						<a className="dropdown-item" href="#">
							Sales Management
						</a>
						<a className="dropdown-item" href="#">
							Employee Management
						</a>
					</div>
				</li>
			</ul>

			<ul className="navbar-nav header-links ml-auto hide-arrow">
				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle mr-lg-3"
						id="messagesDropdown"
						href="#"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="vl_chat-bubble" />
						<span className="d-lg-none">
							Messages
							<span className="badge badge-pill badge-primary">
								9 New
							</span>
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
							href="#"
						>
							<div className="float-left notificaton-thumb">
								<img
									className="rounded-circle"
									src="assets/img/avatar/avatar4.jpg"
									alt=""
								/>
							</div>
							<span className="weight500">Andrew Flinton</span>
							<span className="small float-right text-muted">
								08:30 AM
							</span>

							<div className="dropdown-message">
								I hope that you will be there in time. See you
								then
							</div>
						</a>

						<a
							className="dropdown-item border-bottom msg-unread"
							href="#"
						>
							<div className="float-left notificaton-thumb">
								<img
									className="rounded-circle"
									src="assets/img/avatar/avatar2.jpg"
									alt=""
								/>
							</div>
							<span className="weight500">John Doe</span>
							<span className="small float-right text-muted">
								10:28 AM
							</span>

							<div className="dropdown-message">
								Hello this is an example message. Just want to
								show how it looks
							</div>
						</a>

						<a className="dropdown-item border-bottom" href="#">
							<div className="float-left notificaton-thumb">
								<img
									className="rounded-circle"
									src="assets/img/avatar/avatar3.jpg"
									alt=""
								/>
							</div>
							<span className="weight500">Dash Don</span>
							<span className="small float-right text-muted">
								07:12 PM
							</span>

							<div className="dropdown-message">
								Hi, This is Dash Don form usa. I'm looking for
								someone who really good at design and frontend
								like mosaddek
							</div>
						</a>

						<a className="dropdown-item border-bottom" href="#">
							<div className="float-left notificaton-thumb">
								<img
									className="rounded-circle"
									src="assets/img/avatar/avatar1.jpg"
									alt=""
								/>
							</div>
							<span className="weight500">dkmosa</span>
							<span className="small float-right text-muted">
								12:10 PM
							</span>

							<div className="dropdown-message">
								We build a beautiful dashboard admin panel for
								professional
							</div>
						</a>
						<a className="dropdown-item small" href="#">
							View all messages
						</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle mr-lg-3"
						id="alertsDropdown"
						href="#"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="vl_bell" />
						<span className="d-lg-none">
							Notification
							<span className="badge badge-pill badge-warning">
								5 New
							</span>
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
						<h6 className="dropdown-header weight500">
							Notification
						</h6>

						<div className="dropdown-divider mb-0" />
						<a className="dropdown-item border-bottom" href="#">
							<span className="text-primary">
								<span className="weight500">
									<i className="vl_bell weight600 pr-2" />Weekly
									Update
								</span>
							</span>
							<span className="small float-right text-muted">
								03:14 AM
							</span>

							<div className="dropdown-message f12">
								This week project update report generated. All
								team members are requested to check the updates
							</div>
						</a>

						<a className="dropdown-item border-bottom" href="#">
							<span className="text-danger">
								<span className="weight500">
									<i className="vl_Download-circle weight600 pr-2" />Server
									Error
								</span>
							</span>
							<span className="small float-right text-muted">
								10:34 AM
							</span>

							<div className="dropdown-message f12">
								Unexpectedly server response stop. Responsible
								members are requested to fix it soon
							</div>
						</a>

						<a className="dropdown-item border-bottom" href="#">
							<span className="text-success">
								<span className="weight500">
									<i className="vl_screen weight600 pr-2" />Monthly
									Meeting
								</span>
							</span>
							<span className="small float-right text-muted">
								12:30 AM
							</span>

							<div className="dropdown-message f12">
								Our monthly meeting will be held on tomorrow
								sharp 12:30. All members are requested to attend
								this meeting.
							</div>
						</a>

						<a className="dropdown-item small" href="#">
							View all notification
						</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle mr-lg-3"
						id="userNav"
						href="#"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<div className="user-thumb">
							<img
								className="rounded-circle"
								src="assets/img/avatar/avatar1.jpg"
								alt=""
							/>
						</div>
					</a>
					<div
						className="dropdown-menu dropdown-menu-right"
						aria-labelledby="userNav"
					>
						<a className="dropdown-item" href="#">
							My Profile
						</a>
						<a className="dropdown-item" href="#">
							Account Settings
						</a>
						<a className="dropdown-item" href="#">
							Inbox <span className="badge badge-primary">3</span>
						</a>
						<a className="dropdown-item" href="#">
							Message{" "}
							<span className="badge badge-success">5</span>
						</a>
						<div className="dropdown-divider" />
						<a className="dropdown-item" href="login.html">
							Sign Out
						</a>
					</div>
				</li>
				<li className="nav-item">
					<a
						href="javascript:;"
						className="nav-link right_side_toggle"
					>
						<i className="icon-options-vertical"> </i>
					</a>
				</li>
			</ul>
		</div>
	</nav>
)

export default Nav

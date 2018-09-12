/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Toggle from "../hoc/Toggle"
import MegaMenuTab from "./MegaMenuTab"

const MegaMenu = ({ level, title, children, iconClass }) => (
	<Toggle
		render={({ active, toggle, ref }) => (
			<div ref={ref} className="d-flex">
				<a
					className={classNames("navbar-brand", {
						"jq-dropdown-open": active,
					})}
					href="javascript:;"
					onClick={toggle}
				>
					<img
						className="pr-3 float-left"
						src="/images/logo-icon.png"
						srcSet="/images/logo-icon@2x.png 2x"
						alt=""
					/>
					<div className="float-left">
						<div>
							Dash <i className="fa fa-caret-down pl-2" />
						</div>
						<span className="page-direction f12 weight300">
							<span className="mr-1">home</span>
							<i className="fa fa-angle-right" />
							<span className="ml-1">ui element</span>
						</span>
					</div>
				</a>

				<div
					className={classNames("jq-dropdown", {
						"d-block": active,
					})}
				>
					<div className="b-mega-menu">
						<div className="card card-shadow">
							<div className="card-header p-2 pl-3">
								<div className="navbar-brand mt-2" onClick={toggle}>
									<img
										className="pr-3 float-left"
										src="/images/logo-icon.png"
										srcSet="/images/logo-icon@2x.png 2x"
									/>
									<div className="float-left">
										<div>Dash</div>
										<span className="page-direction f12 weight300">
											<span className="mr-1">home</span>
											<i className="fa fa-angle-right" />
											<span className="ml-1">ui element</span>
										</span>
									</div>
								</div>

								<div className="widget-action-link">
									<ul className="nav nav-tabs wal-nav-tabs">
										<MegaMenuTab active>
											<i className="fa fa-home" />
										</MegaMenuTab>
										<MegaMenuTab>
											<i className="fa fa-desktop" />
										</MegaMenuTab>
										<MegaMenuTab>
											<span>text</span>
										</MegaMenuTab>
									</ul>
								</div>
							</div>
							<div className="card-body p-0 ">
								<div className="tab-content" id="myTabContent">
									<div className="tab-pane fade show active">
										<div className="row no-gutters">
											<div className="col-4 border-right">
												<div className="nav flex-column nav-pills">
													<a className="nav-link active">
														<i className="fa fa-home pr-2" />{" "}
														Application
													</a>
													<a className="nav-link">
														<i className="fa fa-desktop pr-2" /> Reports
													</a>
													<a className="nav-link">
														<i className="fa fa-magnet pr-2" />Management
													</a>
													<a className="nav-link">
														<i className="fa fa-comments-o pr-2" />Blog
													</a>
												</div>
											</div>
											<div className="col-8">
												<div
													className="tab-content"
													id="v-pills-tabContent"
												>
													<div className="tab-pane fade show active">
														<ul className="list-unstyled b-mega-menu-link">
															<li>
																<a href="javascript:;">
																	Bootstrap 4 Stable
																</a>
															</li>
															<li className="active">
																<a href="javascript:;">
																	Dash Modern Admin
																</a>
															</li>
															<li>
																<a href="javascript:;">
																	Awesome Widgets Collection
																</a>
															</li>
															<li>
																<a href="javascript:;">
																	Developer Friendly Code
																</a>
															</li>
															<li>
																<a href="javascript:;">
																	SASS and GULP Task
																</a>
															</li>
															<li>
																<a href="javascript:;">
																	Fully Responsive
																</a>
															</li>
														</ul>
													</div>
													<div className="tab-pane fade">
														<ul className="list-unstyled b-mega-menu-link">
															<li>
																<a href="javascript:;">
																	Daily Reports
																</a>
															</li>
															<li>
																<a href="javascript:;">
																	Weekly Reports
																</a>
															</li>
															<li className="active">
																<a href="javascript:;">
																	Monthly Reports
																</a>
															</li>
														</ul>
													</div>
													<div className="tab-pane fade">
														<ul className="list-unstyled b-mega-menu-link">
															<li>
																<a href="javascript:;">
																	HR Management
																</a>
															</li>
															<li className="active">
																<a href="javascript:;">
																	Product Management
																</a>
															</li>
														</ul>
													</div>
													<div className="tab-pane fade">
														<ul className="list-unstyled b-mega-menu-link">
															<li className="active">
																<a href="javascript:;">
																	Educational Blog
																</a>
															</li>
															<li>
																{" "}
																<a href="javascript:;">
																	Technology Blog
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade">
										<div className="p-5 m-4 text-center">
											<i className="fa fa-desktop f50 text-muted mb-4" />
											<p className="mb-5">
												Contrary to popular belief, Lorem Ipsum is not
												simply random text. It has roots in a piece of
												classical Latin literature from 45 BC
											</p>
											<a href="javascript:;" className="btn btn-primary">
												Get Started
											</a>
										</div>
									</div>
									<div className="tab-pane fade">
										<div className="p-5 m-4 text-center">
											<i className="fa fa-magnet f50 text-muted mb-4" />
											<p className="mb-5">
												The standard chunk of Lorem Ipsum used since the
												1500s is reproduced below for those interested.
												Sections 1.10.32 and 1.10.33
											</p>
											<a href="javascript:;" className="btn btn-purple">
												Get Started
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)}
	/>
)

MegaMenu.propTypes = {
	// title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	// side: PropTypes.oneOf(["left", "right"]),
	// children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
}

export default MegaMenu

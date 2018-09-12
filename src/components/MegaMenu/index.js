/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import classNames from "classnames"
import Toggle from "../../hoc/Toggle"
import WithTabs from "../../hoc/WithTabs"
import Trigger from "./Trigger"

/**
 * Uses a combination of Toggle and Tab to show a multitab menu
 */
const MegaMenu = () => (
	<Toggle
		render={({ active, toggle, ref }) => (
			<div ref={ref}>
				<Trigger arrow toggle={toggle} />
				<div
					className={classNames("jq-dropdown", {
						"d-block": active,
					})}
				>
					<div className="b-mega-menu">
						<WithTabs
							render={({ activeIndex, handleSelected }) => (
								<div className="card card-shadow">
									<div className="card-header p-2 pl-3">
										<Trigger active={active} toggle={toggle} />

										<div className="widget-action-link">
											<ul className="nav nav-tabs wal-nav-tabs">
												<li className="nav-item">
													<a
														href="javascript:;"
														className={classNames("nav-link", {
															active: activeIndex === 0,
														})}
														onClick={() => handleSelected(0)}
													>
														<i className="fa fa-home" />
													</a>
												</li>
												<li className="nav-item">
													<a
														href="javascript:;"
														className={classNames("nav-link", {
															active: activeIndex === 1,
														})}
														onClick={() => handleSelected(1)}
													>
														<i className="fa fa-desktop" />
													</a>
												</li>
												<li className="nav-item">
													<a
														href="javascript:;"
														className={classNames("nav-link", {
															active: activeIndex === 2,
														})}
														onClick={() => handleSelected(2)}
													>
														text
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="card-body p-0 ">
										<div className="tab-content">
											<div
												className={classNames("tab-pane fade", {
													"show active": activeIndex === 0,
												})}
											>
												<WithTabs
													render={({ activeIndex, handleSelected }) => (
														<div className="row no-gutters">
															<div className="col-4 border-right">
																<div className="nav flex-column nav-pills">
																	<a
																		href="javascript:;"
																		className={classNames(
																			"nav-link",
																			{
																				active:
																					activeIndex ===
																					0,
																			}
																		)}
																		onClick={() =>
																			handleSelected(0)
																		}
																	>
																		<i className="fa fa-home pr-2" />
																		Application
																	</a>
																	<a
																		href="javascript:;"
																		className={classNames(
																			"nav-link",
																			{
																				active:
																					activeIndex ===
																					1,
																			}
																		)}
																		onClick={() =>
																			handleSelected(1)
																		}
																	>
																		<i className="fa fa-desktop pr-2" />Reports
																	</a>
																</div>
															</div>
															<div className="col-8">
																<div className="tab-content">
																	<div
																		className={classNames(
																			"tab-pane fade",
																			{
																				active:
																					activeIndex ===
																					0,
																				show:
																					activeIndex ===
																					0,
																			}
																		)}
																	>
																		<ul className="list-unstyled b-mega-menu-link">
																			<li>
																				<Link to="/">
																					Index
																				</Link>
																			</li>
																		</ul>
																	</div>
																	<div
																		className={classNames(
																			"tab-pane fade",
																			{
																				active:
																					activeIndex ===
																					1,
																				show:
																					activeIndex ===
																					1,
																			}
																		)}
																	>
																		<ul className="list-unstyled b-mega-menu-link">
																			<li>
																				<Link to="/redux">
																					Redux
																				</Link>
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													)}
												/>
											</div>
											<div
												className={classNames("tab-pane fade", {
													"show active": activeIndex === 1,
												})}
											>
												<div className="p-5 m-4 text-center">
													<i className="fa fa-desktop f50 text-muted mb-4" />
													<p className="mb-5">
														Contrary to popular belief, Lorem Ipsum is
														not simply random text. It has roots in a
														piece of classical Latin literature from 45
														BC
													</p>
													<a
														href="javascript:;"
														className="btn btn-primary"
													>
														Get Started
													</a>
												</div>
											</div>
											<div
												className={classNames("tab-pane fade", {
													"show active": activeIndex === 2,
												})}
											>
												<div className="p-5 m-4 text-center">
													<i className="fa fa-magnet f50 text-muted mb-4" />
													<p className="mb-5">
														The standard chunk of Lorem Ipsum used since
														the 1500s is reproduced below for those
														interested. Sections 1.10.32 and 1.10.33
													</p>
													<a
														href="javascript:;"
														className="btn btn-purple"
													>
														Get Started
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						/>
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

/** @format */

import React from "react"

const Dashboard = ({ active, children, onClick }) => (
	<div className="content-wrapper">
		<div className="creative-state-area basic-gradient">
			<div className="row">
				<div className="col-lg-7 col-12">
					<h4 className="creative-state-title">Dashboard</h4>
				</div>
				<div className="col-lg-5  col-12 text-lg-right">
					<div className="row short-states mb-lg-0 mb-4">
						<div className="col-6">
							<span className="pr-2">unique visitors</span>
							<span id="unique_visitors" />
						</div>
						<div className="col-6">
							<span className="pr-2">total visitors</span>
							<span id="total_visitors" />
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
					<div className="card card-shadow mb-4">
						<div className="card-body">
							<div className="media d-flex align-items-center">
								<div className="mr-4 rounded-circle bg-warning sr-icon-box bubble-shadow-small">
									<i className="vl_user-male" />
								</div>
								<div className="media-body">
									<h4 className="text-uppercase mb-0 weight500 text-dark">
										4,87,654
									</h4>
									<span className="text-muted">Visit</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
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
									<span className="text-muted">
										Downloads
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
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
									<span className="text-muted">
										Active Installation
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6">
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
									<span className="text-muted">
										Product Sales
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container-fluid">
			<div className="row">
				<div className="col-xl-12">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-info">
								<div className="custom-title">
									Sales Statistical Overview
								</div>
								<div className=" widget-action-link">
									<div className="dropdown">
										<a
											href="#"
											className="btn btn-transparent text-secondary dropdown-hover p-0"
											data-toggle="dropdown"
										>
											<i className=" vl_ellipsis-fill-h" />
										</a>
										<div className="dropdown-menu dropdown-menu-right vl-dropdown">
											<a
												className="dropdown-item"
												href="#"
											>
												{" "}
												Edit
											</a>
											<a
												className="dropdown-item"
												href="#"
											>
												{" "}
												Delete
											</a>
											<a
												className="dropdown-item"
												href="#"
											>
												{" "}
												Settings
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-xl-3">
									<span className="text-muted mb-5 d-inline-block">
										<i className="fa fa-bolt" /> Page Views
									</span>
									<h1 className="mb-0">135,870</h1>
									<small className="text-muted">
										Page views in last month december 2018
									</small>
									<ul className="list-unstyled mt-5">
										<li className="text-muted">
											<i className="fa fa-clock-o pr-2" />{" "}
											Data from January
										</li>
										<li className="text-muted">
											<i className="fa fa-clock-o pr-2" />{" "}
											Last active in 12.01.2018
										</li>
									</ul>
								</div>
								<div className="col-xl-9">
									<canvas
										id="dash3_sales_chart"
										height="250"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xl-6 col-md-6">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-danger">
								<div className="custom-title">
									Issue Fixing
									<ul
										className="nav nav-pills nav-pill-primary nav-pill-custom nav-pills-sm float-right "
										id="pills-tab2"
										role="tablist"
									>
										<li className="nav-item">
											<a
												className="nav-link active"
												id="pills-today-tab2"
												data-toggle="pill"
												href="#pills-weekly2"
												role="tab"
												aria-selected="true"
											>
												Weekly
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="pills-month-tab2"
												data-toggle="pill"
												href="#pills-month2"
												role="tab"
												aria-selected="false"
											>
												Month
											</a>
										</li>
									</ul>
								</div>
								<div className="custom-post-title">
									Graphical view of this week issue solving
									status
								</div>
							</div>
						</div>
						<div className="card-body pt-5 pb-4">
							<div className="tab-content" id="pills-tabContent2">
								<div
									className="tab-pane fade show active"
									id="pills-weekly2"
									role="tabpanel"
									aria-labelledby="pills-today-tab"
								>
									<div className="row">
										<div className="col-12 col-xl-7 col-md-6 text-center">
											<canvas
												id="doughnut_chart"
												className="mb-4"
											/>
											<small className="text-muted">
												Realtime data update instantly
											</small>
										</div>
										<div className="col-12 col-xl-4 col-md-6 text-muted mt-xl-4">
											<ul className="list-unstyled f12">
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2"
														style={{
															color: "#cae59b",
														}}
													/>{" "}
													40%
													<span className="float-right">
														Solved
													</span>
												</li>
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2"
														style={{
															color: "#fcdd82",
														}}
													/>{" "}
													10%
													<span className="float-right">
														Pending
													</span>
												</li>
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2 "
														style={{
															color: "#f79490",
														}}
													/>{" "}
													10%
													<span className="float-right">
														Declain
													</span>
												</li>
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2 "
														style={{
															color: "#acf5fe",
														}}
													/>{" "}
													40%
													<span className="float-right">
														Reopen
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="pills-month2"
									role="tabpanel"
									aria-labelledby="pills-month-tab"
								>
									<div className="row">
										<div className="col-12 col-xl-7 col-md-6 text-center">
											<canvas
												id="doughnut_chart2"
												className="mb-4"
											/>
											<small className="text-muted">
												Realtime data update instantly
											</small>
										</div>
										<div className="col-12 col-xl-4 col-md-6 text-muted mt-xl-4">
											<ul className="list-unstyled f12">
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2"
														style={{
															color: "#cae59b",
														}}
													/>{" "}
													30%
													<span className="float-right">
														Solved
													</span>
												</li>
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2"
														style={{
															color: "#fcdd82",
														}}
													/>{" "}
													20%
													<span className="float-right">
														Pending
													</span>
												</li>
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2 "
														style={{
															color: "#f79490",
														}}
													/>{" "}
													25%
													<span className="float-right">
														Declain
													</span>
												</li>
												<li className="list-widget-border mb-3 pb-3">
													<i
														className="fa fa-circle pr-2 "
														style={{
															color: "#acf5fe",
														}}
													/>{" "}
													25%
													<span className="float-right">
														Reopen
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-md-6">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-warning">
								<div className="custom-title">
									Regional Sales
								</div>
							</div>
						</div>
						<div className="card-body">
							<div id="usa_map" style={{ height: "200px" }} />

							<div className="mb-2">
								<div className="progress-title mb-0">
									<span>Washington</span>
									<span className="float-right">85%</span>
								</div>
								<div
									className="progress"
									style={{ height: "1px" }}
								>
									<div
										className="progress-bar bg-primary"
										role="progressbar"
										style={{ width: "85%" }}
										aria-valuemax="100"
									/>
								</div>
							</div>
							<div className="mb-2">
								<div className="progress-title mb-0">
									<span>California </span>
									<span className="float-right">55%</span>
								</div>
								<div
									className="progress"
									style={{ height: "1px" }}
								>
									<div
										className="progress-bar bg-purple-light"
										role="progressbar"
										style={{ width: "55%" }}
										aria-valuemax="100"
									/>
								</div>
							</div>
							<div className="">
								<div className="progress-title mb-0">
									<span>Texas</span>
									<span className="float-right">35%</span>
								</div>
								<div
									className="progress"
									style={{ height: "1px" }}
								>
									<div
										className="progress-bar bg-purple"
										role="progressbar"
										style={{ width: "35%" }}
										aria-valuemax="100"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-turquoise">
								<div className="custom-title">
									Sales Monitor
								</div>

								<div className=" widget-action-link">
									<div className="dropdown">
										<a
											href="#"
											className="btn btn-transparent text-secondary dropdown-hover p-0"
											data-toggle="dropdown"
										>
											<i className=" vl_ellipsis-fill-h" />
										</a>
										<div className="dropdown-menu dropdown-menu-right vl-dropdown">
											<a
												className="dropdown-item"
												href="#"
											>
												{" "}
												Edit
											</a>
											<a
												className="dropdown-item"
												href="#"
											>
												{" "}
												Delete
											</a>
											<a
												className="dropdown-item"
												href="#"
											>
												{" "}
												Settings
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-xl-5 col-md-5">
									<p className="text-muted mb-5">
										Proper sell monitoring through the world
										map to plan <br />
										for the next marketing attempt
									</p>

									<div className="mb-4">
										<div className="progress-title">
											<span>Europe</span>
											<span className="float-right">
												35%
											</span>
										</div>
										<div
											className="progress"
											style={{ height: "1px" }}
										>
											<div
												className="progress-bar bg-turquoise"
												role="progressbar"
												style={{ width: "35%" }}
												aria-valuemax="100"
											/>
										</div>
									</div>
									<div className="mb-4">
										<div className="progress-title">
											<span>Latin America </span>
											<span className="float-right">
												55%
											</span>
										</div>
										<div
											className="progress"
											style={{ height: "1px" }}
										>
											<div
												className="progress-bar bg-purple"
												role="progressbar"
												style={{ width: "55%" }}
												aria-valuemax="100"
											/>
										</div>
									</div>
									<div className="mb-4">
										<div className="progress-title">
											<span>Australia</span>
											<span className="float-right">
												85%
											</span>
										</div>
										<div
											className="progress"
											style={{ height: "1px" }}
										>
											<div
												className="progress-bar bg-warning"
												role="progressbar"
												style={{ width: "85%" }}
												aria-valuemax="100"
											/>
										</div>
									</div>
								</div>
								<div className="col-xl-7 col-md-7">
									<div className="map-wrapper" id="world-map">
										{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xl-6">
					<div className="card card-shadow mb-4">
						<div className="row no-gutters">
							<div className="col-5 basic-gradient-alt weather-radius text-center position-relative">
								<div className="weather-shade">
									<img
										src="assets/img/weather-rain-bg.svg"
										alt=""
									/>
								</div>
								<div className="card-body mt-5 pt-5">
									<i className="vl_weather-day-rain text-light f80 mt-5 pt-5 d-block" />
								</div>
								<div className="card-footer bg-transparent border-0 text-light mt-3 pt-5">
									<h3 className="weight300">Rainy Day</h3>
								</div>
							</div>
							<div className="col-7">
								<div className="card-body pt-5">
									<h3 className="text-uppercase">
										TUE 22 <br />
										<span className="weight300 text-muted">
											September
										</span>
									</h3>
									<div className="f50 weight300 text-primary pt-5 pb-5">
										13<sup>o</sup>
										<span className="h3 weight300">
											Rain
										</span>
									</div>
								</div>
								<div className="card-footer bg-white text-center border-0 pb-4 mb-2">
									<div className="row">
										<div className="col">
											<h6 className="text-muted mb-3">
												WED
											</h6>
											<i className="vl_weather-day-snow f24" />
											<p className="mb-0 text-muted">
												17<sup>o</sup>c
											</p>
										</div>
										<div className="col">
											<h6 className="text-muted mb-3">
												THU
											</h6>
											<i className="vl_weather-night-cloud f24" />
											<p className="mb-0 text-muted">
												22<sup>o</sup>c
											</p>
										</div>
										<div className="col">
											<h6 className="text-muted mb-3">
												FRI
											</h6>
											<i className="vl_weather-sunny-day f24" />
											<p className="mb-0 text-muted">
												18<sup>o</sup>c
											</p>
										</div>
										<div className="col">
											<h6 className="text-muted mb-3">
												SAT
											</h6>
											<i className="vl_weather-thunder f24" />
											<p className="mb-0 text-muted">
												29<sup>o</sup>c
											</p>
										</div>
										<div className="col">
											<h6 className="text-muted mb-3">
												SUN
											</h6>
											<i className="vl_weather-snow f24" />
											<p className="mb-0 text-muted">
												13<sup>o</sup>c
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-danger">
								<div className="custom-title">
									Activity Monitor
								</div>
								<div className=" widget-action-link">
									<a
										href="#"
										className="btn btn-transparent text-secondary p-0 text-muted"
									>
										View All
									</a>
								</div>
							</div>
						</div>
						<div className="card-body">
							<ul className="list-unstyled base-timeline activity-timeline">
								<li className="">
									<div className="timeline-icon">
										<img
											src="assets/img/avatar/avatar1.jpg"
											alt=""
										/>
									</div>
									<div className="act-time">Today</div>
									<div className="base-timeline-info">
										<a href="#">John123</a> Successfully
										purchased item#26
									</div>
									<small className="text-muted">
										28 mins ago
									</small>
								</li>
								<li className="">
									<div className="timeline-icon bg-turquoise">
										<i className="fa fa-download" />
									</div>
									<div className="base-timeline-info">
										<a href="#" className="text-danger">
											Farnandez
										</a>{" "}
										placed the order for accessories
									</div>
									<small className="text-muted">
										2 days ago
									</small>
								</li>
								<li className="">
									<div className="timeline-icon bg-info">
										<i className="fa fa-file-image-o" />
									</div>
									<div className="act-time">Yesterday</div>
									<div className="base-timeline-info">
										User{" "}
										<a href="#" className="text-purple">
											Lisa Maria
										</a>{" "}
										checked out from the market
									</div>
									<small className="text-muted">
										12 mins ago
									</small>
								</li>
								<li className="">
									<div className="timeline-icon">
										<img
											src="assets/img/avatar/avatar2.jpg"
											alt=""
										/>
									</div>
									<div className="base-timeline-info">
										<a href="#" className="text-info">
											Charlie Johnson{" "}
										</a>{" "}
										joined DashLab last week.
									</div>
									<small className="text-muted">
										3 days ago
									</small>
								</li>
								<li className="">
									<div className="timeline-icon">
										<i className="fa fa-plus" />
									</div>
									<div className="act-time">29 January</div>
									<div className="base-timeline-info">
										User{" "}
										<a href="#" className="text-warning">
											Lisa Maria
										</a>{" "}
										checked out from the market
									</div>
									<small className="text-muted">
										15 mins ago
									</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-xl-4 col-md-6">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-primary">
								<div className="custom-title">
									Today's Activity
								</div>
							</div>
						</div>
						<div className="card-body">
							<ul className="list-unstyled base-timeline">
								<li className="time-dot-primary">
									<div className="base-timeline-info">
										<a href="#">John123</a> Successfully
										purchased item#26
									</div>
									<small className="text-muted">
										28 mins ago
									</small>
								</li>
								<li className="time-dot-danger">
									<div className="base-timeline-info">
										<a href="#" className="text-danger">
											Farnandez
										</a>{" "}
										placed the order for accessories
									</div>
									<small className="text-muted">
										2 days ago
									</small>
								</li>
								<li className="time-dot-purple">
									<div className="base-timeline-info">
										User{" "}
										<a href="#" className="text-purple">
											Lisa Maria
										</a>{" "}
										checked out from the market
									</div>
									<small className="text-muted">
										12 mins ago
									</small>
								</li>
								<li className="time-dot-turquoise">
									<div className="base-timeline-info">
										<a href="#" className="text-info">
											Charlie Johnson{" "}
										</a>{" "}
										joined DashLab last week. Congrats to
										him
									</div>
									<small className="text-muted">
										3 days ago
									</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-6">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-success">
								<div className="custom-title">Todo List</div>
							</div>
						</div>
						<div className="card-body pb-0">
							<ul
								className="todo-list-item list-unstyled"
								id="todo-list"
							>
								<li className="todo-bg-primary">
									<div className="chk-todo float-left">
										<input type="checkbox" value="0" />
									</div>
									<p className="todo-title">
										Scheduled Meeting with Anthony
									</p>
								</li>
								<li className="todo-bg-danger">
									<div className="chk-todo float-left">
										<input type="checkbox" value="0" />
									</div>
									<p className="todo-title">
										Submit monthly report to John Doe
									</p>
								</li>
								<li className="todo-bg-purple">
									<div className="chk-todo float-left">
										<input type="checkbox" value="0" />
									</div>
									<p className="todo-title">
										Follow up the team work
									</p>
								</li>
								<li className="todo-bg-info">
									<div className="chk-todo float-left">
										<input type="checkbox" value="0" />
									</div>
									<p className="todo-title">
										Submit monthly report to John Doe
									</p>
								</li>
								<li className="todo-bg-warning">
									<div className="chk-todo float-left">
										<input type="checkbox" value="0" />
									</div>
									<p className="todo-title">
										Make a meeting call to client
									</p>
								</li>
							</ul>
						</div>
						<div className="card-footer border-0 pt-0">
							<div className="row">
								<div className="col-10">
									<input
										type="text"
										className="form-control border-0 f14"
										placeholder="Add new task"
									/>
								</div>
								<div className="col-2">
									<a
										href="javascript:;"
										className="btn-todo-list float-right mt-1"
									>
										<i className="fa fa-paper-plane" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-md-12">
					<div className="card card-shadow mb-4">
						<div className="card-header border-0">
							<div className="custom-title-wrap bar-danger">
								<div className="custom-title">Chat</div>
							</div>
						</div>
						<div className="card-body">
							<div
								className="chat-wrap"
								style={{ height: "280px" }}
							>
								<ul className="list-unstyled">
									<li>
										<div className="chat-info">
											<div className="chat-avatar mr-3">
												<img
													src="assets/img/avatar/avatar-mini1.jpg"
													alt=""
												/>
											</div>
											<div className="chat-text">
												Hi Pristly, How are you?
											</div>
										</div>
									</li>
									<li className="sender">
										<div className="chat-info">
											<div className="chat-text">
												I am fine. Danny I need a help
												from you. It will be great for
												me if you can
											</div>
										</div>
									</li>
									<li>
										<div className="chat-info">
											<div className="chat-avatar mr-3">
												<img
													src="assets/img/avatar/avatar-mini1.jpg"
													alt=""
												/>
											</div>
											<div className="chat-text">
												oh sure tell me, if i can
											</div>
										</div>
									</li>
									<li className="sender">
										<div className="chat-info">
											<div className="chat-text">
												I need a dashboard for my
												project
											</div>
										</div>
									</li>
									<li>
										<div className="chat-info">
											<div className="chat-avatar mr-3">
												<img
													src="assets/img/avatar/avatar-mini1.jpg"
													alt=""
												/>
											</div>
											<div className="chat-text">
												ok, how can i help you?
											</div>
										</div>
									</li>
									<li className="sender">
										<div className="chat-info">
											<div className="chat-text">
												can you make a design for this
											</div>
										</div>
									</li>
									<li>
										<div className="chat-info">
											<div className="chat-avatar mr-3">
												<img
													src="assets/img/avatar/avatar-mini1.jpg"
													alt=""
												/>
											</div>
											<div className="chat-text">
												Yeah sure, I'll give you a
												design next week
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="card-footer border-0 pt-0 chat-type">
							<div className="row">
								<div className="col-10">
									<a
										href="javascript:;"
										className="file-attachment float-left"
									>
										<i className="fa fa-paperclip" />
									</a>
									<input
										type="text"
										className="form-control border-0 f14"
										placeholder="Type something here"
									/>
								</div>
								<div className="col-2">
									<a
										href="javascript:;"
										className="btn-todo-list btn-primary float-right mt-1"
									>
										<i className="fa fa-paper-plane" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<footer className="sticky-footer">
			<div className="container">
				<div className="text-center">
					<small>Copyright &copy; VectorLab 2018</small>
				</div>
			</div>
		</footer>
	</div>
)

export default Dashboard

/** @format */

import React from "react"

const Form = () => (
	<div className="content-wrapper">
		<div className="container-fluid">
			<div className="page-title mb-4 d-flex align-items-center">
				<div className="mr-auto">
					<h4 className="weight500 d-inline-block pr-3 mr-3 border-right">Basic Form</h4>
					<nav aria-label="breadcrumb" className="d-inline-block ">
						<ol className="breadcrumb p-0">
							<li className="breadcrumb-item">
								<a href="javascript:;">Home</a>
							</li>
							<li className="breadcrumb-item">
								<a href="javascript:;">Form</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Basic Form
							</li>
						</ol>
					</nav>
				</div>

				<div className="choose-form-tab d-inline-block">
					<p className="text-muted mr-3 d-lg-inline-block f12">Choose Style</p>
					<ul
						className="nav nav-form-custom nav-form-sm float-right"
						id="pills-tab"
						role="tablist"
					>
						<li className="nav-item">
							<a
								className="nav-link active"
								id="round-form-tab"
								data-toggle="pill"
								href="#round-form"
								role="tab"
								aria-controls="round-form"
								aria-selected="true"
							>
								<span
									className="shape-form bg-white rounded"
									data-toggle="tooltip"
									data-placement="top"
									title="Rounded"
								/>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								id="square-form-tab"
								data-toggle="pill"
								href="#square-form"
								role="tab"
								aria-controls="square-form"
								aria-selected="false"
							>
								<span
									className="shape-form bg-white"
									data-toggle="tooltip"
									data-placement="top"
									title="Square"
								/>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								id="fill-form-tab"
								data-toggle="pill"
								href="#fill-form"
								role="tab"
								aria-controls="fill-form"
								aria-selected="false"
							>
								<span
									className="shape-form bg-gray"
									data-toggle="tooltip"
									data-placement="top"
									title="Fill"
								/>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								id="pill-form-tab"
								data-toggle="pill"
								href="#pill-form"
								role="tab"
								aria-controls="pill-form"
								aria-selected="false"
							>
								<span
									className="shape-form bg-white pills-shape"
									data-toggle="tooltip"
									data-placement="top"
									title="Pill"
								/>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								id="shadow-form-tab"
								data-toggle="pill"
								href="#shadow-form"
								role="tab"
								aria-controls="shadow-form"
								aria-selected="false"
							>
								<span
									className="shape-form bg-white shadow-shape"
									data-toggle="tooltip"
									data-placement="top"
									title="Shadow"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="round-form"
					role="tabpanel"
					aria-labelledby="round-form-tab"
				>
					<div className="row">
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-primary">
										<div className="custom-title">Basic Input</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Here’s a quick example to demonstrate Bootstrap’s form
										styles. Keep reading for documentation on required classes,
										form layout, and more.
									</p>
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">
												Email address
											</label>
											<input
												type="email"
												className="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Enter email"
											/>
											<small id="emailHelp" className="form-text text-muted">
												We'll never share your email with anyone else.
											</small>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword1">Password</label>
											<input
												type="password"
												className="form-control"
												id="exampleInputPassword1"
												placeholder="Password"
											/>
										</div>
										<div className="form-check form-group">
											<input
												type="checkbox"
												className="form-check-input"
												id="exampleCheck1"
											/>
											<label
												className="form-check-label"
												htmlFor="exampleCheck1"
											>
												Check me out
											</label>
										</div>
										<div className="text-center">
											<button type="submit" className="btn btn-purple">
												Submit
											</button>
											<button
												type="submit"
												className="btn btn-outline-secondary"
											>
												Cancel
											</button>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-danger">
										<div className="custom-title">Sizing</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Set heights using classes like{" "}
										<code className="highlighter-rouge">.form-control-lg</code>{" "}
										and{" "}
										<code className="highlighter-rouge">.form-control-sm</code>.
									</p>

									<div className="form-group">
										<label>Large</label>
										<input
											className="form-control form-control-lg"
											type="text"
											placeholder=".form-control-lg"
										/>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<input
											className="form-control"
											type="text"
											placeholder="Default input"
										/>
									</div>
									<div className="form-group">
										<label>Small</label>
										<input
											className="form-control form-control-sm"
											type="text"
											placeholder=".form-control-sm"
										/>
									</div>

									<div className="form-group">
										<label>Large</label>
										<select className="form-control form-control-lg">
											<option>Large select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<select className="form-control">
											<option>Default select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Small</label>
										<select className="form-control form-control-sm">
											<option>Small select</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-warning">
										<div className="custom-title">Form Horizontal</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group row">
											<label
												htmlFor="inputEmail3"
												className="col-sm-3 col-form-label"
											>
												Email
											</label>
											<div className="col-sm-9">
												<input
													type="email"
													className="form-control"
													id="inputEmail3"
													placeholder="Email"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="inputPassword3"
												className="col-sm-3 col-form-label"
											>
												Password
											</label>
											<div className="col-sm-9">
												<input
													type="password"
													className="form-control"
													id="inputPassword3"
													placeholder="Password"
												/>
											</div>
										</div>
										<fieldset className="form-group">
											<div className="row">
												<div className="col-sm-3">Radios</div>
												<div className="col-sm-9">
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios1"
																value="option1"
																checked=""
															/>
															Option one is this and that—be sure to
															include why it's great
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios2"
																value="option2"
															/>
															Option two can be something else and
															selecting it will deselect option one
														</label>
													</div>
													<div className="form-check disabled">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios3"
																value="option3"
																disabled=""
															/>
															Option three is disabled
														</label>
													</div>
												</div>
											</div>
										</fieldset>
										<div className="form-group row">
											<div className="col-sm-3">Checkbox</div>
											<div className="col-sm-9">
												<div className="form-check">
													<label className="form-check-label">
														<input
															className="form-check-input"
															type="checkbox"
														/>{" "}
														Check me out
													</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-sm-12 text-center">
												<button type="submit" className="btn btn-primary">
													Submit
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-success">
										<div className="custom-title">Form controls</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label htmlFor="exampleFormControlInput1">
												Email address
											</label>
											<input
												type="email"
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="name@example.com"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect1">
												Example select
											</label>
											<select
												className="form-control"
												id="exampleFormControlSelect1"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect2">
												Example multiple select
											</label>
											<select
												multiple
												className="form-control"
												id="exampleFormControlSelect2"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea1">
												Example textarea
											</label>
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
											/>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-info">
										<div className="custom-title">Column sizing</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-row">
											<div className="col-7">
												<input
													type="text"
													className="form-control"
													placeholder="City"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control"
													placeholder="State"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control"
													placeholder="Zip"
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="square-form"
					role="tabpanel"
					aria-labelledby="square-form-tab"
				>
					<div className="row">
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-primary">
										<div className="custom-title">Basic Input Square</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Here’s a quick example to demonstrate Bootstrap’s form
										styles. Keep reading for documentation on required classes,
										form layout, and more.
									</p>
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail11">
												Email address
											</label>
											<input
												type="email"
												className="form-control rounded-0"
												id="exampleInputEmail11"
												aria-describedby="emailHelp1"
												placeholder="Enter email"
											/>
											<small id="emailHelp1" className="form-text text-muted">
												We'll never share your email with anyone else.
											</small>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword11">Password</label>
											<input
												type="password"
												className="form-control rounded-0"
												id="exampleInputPassword11"
												placeholder="Password"
											/>
										</div>
										<div className="form-check form-group">
											<input
												type="checkbox"
												className="form-check-input"
												id="exampleCheck11"
											/>
											<label
												className="form-check-label"
												htmlFor="exampleCheck11"
											>
												Check me out
											</label>
										</div>
										<div className="text-center">
											<button
												type="submit"
												className="btn btn-purple rounded-0"
											>
												Submit
											</button>
											<button
												type="submit"
												className="btn btn-outline-secondary rounded-0"
											>
												Cancel
											</button>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-danger">
										<div className="custom-title">Sizing Square</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Set heights using classes like{" "}
										<code className="highlighter-rouge">.form-control-lg</code>{" "}
										and{" "}
										<code className="highlighter-rouge">.form-control-sm</code>.
									</p>

									<div className="form-group">
										<label>Large</label>
										<input
											className="form-control form-control-lg rounded-0"
											type="text"
											placeholder=".form-control-lg"
										/>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<input
											className="form-control rounded-0"
											type="text"
											placeholder="Default input"
										/>
									</div>
									<div className="form-group">
										<label>Small</label>
										<input
											className="form-control form-control-sm rounded-0"
											type="text"
											placeholder=".form-control-sm"
										/>
									</div>

									<div className="form-group">
										<label>Large</label>
										<select className="form-control form-control-lg rounded-0">
											<option>Large select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<select className="form-control rounded-0">
											<option>Default select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Small</label>
										<select className="form-control form-control-sm rounded-0">
											<option>Small select</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-warning">
										<div className="custom-title">Form Horizontal Square</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group row">
											<label
												htmlFor="inputEmail31"
												className="col-sm-3 col-form-label"
											>
												Email
											</label>
											<div className="col-sm-9">
												<input
													type="email"
													className="form-control rounded-0"
													id="inputEmail31"
													placeholder="Email"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="inputPassword31"
												className="col-sm-3 col-form-label"
											>
												Password
											</label>
											<div className="col-sm-9">
												<input
													type="password"
													className="form-control rounded-0"
													id="inputPassword31"
													placeholder="Password"
												/>
											</div>
										</div>
										<fieldset className="form-group">
											<div className="row">
												<div className="col-sm-3">Radios</div>
												<div className="col-sm-9">
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios11"
																value="option1"
																checked=""
															/>
															Option one is this and that—be sure to
															include why it's great
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios21"
																value="option2"
															/>
															Option two can be something else and
															selecting it will deselect option one
														</label>
													</div>
													<div className="form-check disabled">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios31"
																value="option3"
																disabled=""
															/>
															Option three is disabled
														</label>
													</div>
												</div>
											</div>
										</fieldset>
										<div className="form-group row">
											<div className="col-sm-3">Checkbox</div>
											<div className="col-sm-9">
												<div className="form-check">
													<label className="form-check-label">
														<input
															className="form-check-input"
															type="checkbox"
														/>{" "}
														Check me out
													</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-sm-12 text-center">
												<button
													type="submit"
													className="btn btn-primary rounded-0"
												>
													Submit
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-success">
										<div className="custom-title">Form controls Square</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label htmlFor="exampleFormControlInput11">
												Email address
											</label>
											<input
												type="email"
												className="form-control rounded-0"
												id="exampleFormControlInput11"
												placeholder="name@example.com"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect11">
												Example select
											</label>
											<select
												className="form-control rounded-0"
												id="exampleFormControlSelect11"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect21">
												Example multiple select
											</label>
											<select
												multiple
												className="form-control rounded-0"
												id="exampleFormControlSelect21"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea11">
												Example textarea
											</label>
											<textarea
												className="form-control rounded-0"
												id="exampleFormControlTextarea11"
												rows="3"
											/>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-info">
										<div className="custom-title">Column sizing Square</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-row">
											<div className="col-7">
												<input
													type="text"
													className="form-control rounded-0"
													placeholder="City"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control rounded-0"
													placeholder="State"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control rounded-0"
													placeholder="Zip"
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="fill-form"
					role="tabpanel"
					aria-labelledby="fill-form-tab"
				>
					<div className="row">
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-primary">
										<div className="custom-title">Basic Input Fill</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Here’s a quick example to demonstrate Bootstrap’s form
										styles. Keep reading for documentation on required classes,
										form layout, and more.
									</p>
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail12">
												Email address
											</label>
											<input
												type="email"
												className="form-control form-fill"
												id="exampleInputEmail12"
												aria-describedby="emailHelp2"
												placeholder="Enter email"
											/>
											<small id="emailHelp2" className="form-text text-muted">
												We'll never share your email with anyone else.
											</small>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword12">Password</label>
											<input
												type="password"
												className="form-control form-fill"
												id="exampleInputPassword12"
												placeholder="Password"
											/>
										</div>
										<div className="form-check form-group">
											<input
												type="checkbox"
												className="form-check-input"
												id="exampleCheck12"
											/>
											<label
												className="form-check-label"
												htmlFor="exampleCheck12"
											>
												Check me out
											</label>
										</div>
										<div className="text-center">
											<button type="submit" className="btn btn-purple">
												Submit
											</button>
											<button
												type="submit"
												className="btn btn-outline-secondary"
											>
												Cancel
											</button>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-danger">
										<div className="custom-title">Sizing Fill</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Set heights using classes like{" "}
										<code className="highlighter-rouge">.form-control-lg</code>{" "}
										and{" "}
										<code className="highlighter-rouge">.form-control-sm</code>.
									</p>

									<div className="form-group">
										<label>Large</label>
										<input
											className="form-control form-control-lg form-fill"
											type="text"
											placeholder=".form-control-lg"
										/>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<input
											className="form-control form-fill"
											type="text"
											placeholder="Default input"
										/>
									</div>
									<div className="form-group">
										<label>Small</label>
										<input
											className="form-control form-control-sm form-fill"
											type="text"
											placeholder=".form-control-sm"
										/>
									</div>

									<div className="form-group">
										<label>Large</label>
										<select className="form-control form-control-lg form-fill">
											<option>Large select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<select className="form-control form-fill">
											<option>Default select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Small</label>
										<select className="form-control form-control-sm form-fill">
											<option>Small select</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-warning">
										<div className="custom-title">Form Horizontal Fill</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group row">
											<label
												htmlFor="inputEmail32"
												className="col-sm-3 col-form-label"
											>
												Email
											</label>
											<div className="col-sm-9">
												<input
													type="email"
													className="form-control form-fill"
													id="inputEmail32"
													placeholder="Email"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="inputPassword32"
												className="col-sm-3 col-form-label"
											>
												Password
											</label>
											<div className="col-sm-9">
												<input
													type="password"
													className="form-control form-fill"
													id="inputPassword32"
													placeholder="Password"
												/>
											</div>
										</div>
										<fieldset className="form-group">
											<div className="row">
												<div className="col-sm-3">Radios</div>
												<div className="col-sm-9">
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios12"
																value="option1"
																checked=""
															/>
															Option one is this and that—be sure to
															include why it's great
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios22"
																value="option2"
															/>
															Option two can be something else and
															selecting it will deselect option one
														</label>
													</div>
													<div className="form-check disabled">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios32"
																value="option3"
																disabled=""
															/>
															Option three is disabled
														</label>
													</div>
												</div>
											</div>
										</fieldset>
										<div className="form-group row">
											<div className="col-sm-3">Checkbox</div>
											<div className="col-sm-9">
												<div className="form-check">
													<label className="form-check-label">
														<input
															className="form-check-input"
															type="checkbox"
														/>{" "}
														Check me out
													</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-sm-12 text-center">
												<button type="submit" className="btn btn-primary">
													Submit
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-success">
										<div className="custom-title">Form controls</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label htmlFor="exampleFormControlInput12">
												Email address
											</label>
											<input
												type="email"
												className="form-control form-fill"
												id="exampleFormControlInput12"
												placeholder="name@example.com"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect12">
												Example select
											</label>
											<select
												className="form-control form-fill"
												id="exampleFormControlSelect12"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect22">
												Example multiple select
											</label>
											<select
												multiple
												className="form-control form-fill"
												id="exampleFormControlSelect22"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea12">
												Example textarea
											</label>
											<textarea
												className="form-control form-fill"
												id="exampleFormControlTextarea12"
												rows="3"
											/>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-info">
										<div className="custom-title">Column sizing</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-row">
											<div className="col-7">
												<input
													type="text"
													className="form-control form-fill"
													placeholder="City"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control form-fill"
													placeholder="State"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control form-fill"
													placeholder="Zip"
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="pill-form"
					role="tabpanel"
					aria-labelledby="pill-form-tab"
				>
					<div className="row">
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-primary">
										<div className="custom-title">Basic Input Pill</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Here’s a quick example to demonstrate Bootstrap’s form
										styles. Keep reading for documentation on required classes,
										form layout, and more.
									</p>
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail13">
												Email address
											</label>
											<input
												type="email"
												className="form-control form-pill"
												id="exampleInputEmail13"
												aria-describedby="emailHelp3"
												placeholder="Enter email"
											/>
											<small id="emailHelp3" className="form-text text-muted">
												We'll never share your email with anyone else.
											</small>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword13">Password</label>
											<input
												type="password"
												className="form-control form-pill"
												id="exampleInputPassword13"
												placeholder="Password"
											/>
										</div>
										<div className="form-check form-group">
											<input
												type="checkbox"
												className="form-check-input"
												id="exampleCheck13"
											/>
											<label
												className="form-check-label"
												htmlFor="exampleCheck13"
											>
												Check me out
											</label>
										</div>
										<div className="text-center">
											<button type="submit" className="btn btn-purple">
												Submit
											</button>
											<button
												type="submit"
												className="btn btn-outline-secondary"
											>
												Cancel
											</button>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-danger">
										<div className="custom-title">Sizing Pill</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Set heights using classes like{" "}
										<code className="highlighter-rouge">.form-control-lg</code>{" "}
										and{" "}
										<code className="highlighter-rouge">.form-control-sm</code>.
									</p>

									<div className="form-group">
										<label>Large</label>
										<input
											className="form-control form-control-lg form-pill"
											type="text"
											placeholder=".form-control-lg"
										/>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<input
											className="form-control form-pill"
											type="text"
											placeholder="Default input"
										/>
									</div>
									<div className="form-group">
										<label>Small</label>
										<input
											className="form-control form-control-sm form-pill"
											type="text"
											placeholder=".form-control-sm"
										/>
									</div>

									<div className="form-group">
										<label>Large</label>
										<select className="form-control form-control-lg form-pill">
											<option>Large select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<select className="form-control form-pill">
											<option>Default select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Small</label>
										<select className="form-control form-control-sm form-pill">
											<option>Small select</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-warning">
										<div className="custom-title">Form Horizontal Pill</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group row">
											<label
												htmlFor="inputEmail33"
												className="col-sm-3 col-form-label"
											>
												Email
											</label>
											<div className="col-sm-9">
												<input
													type="email"
													className="form-control form-pill"
													id="inputEmail33"
													placeholder="Email"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="inputPassword33"
												className="col-sm-3 col-form-label"
											>
												Password
											</label>
											<div className="col-sm-9">
												<input
													type="password"
													className="form-control form-pill"
													id="inputPassword33"
													placeholder="Password"
												/>
											</div>
										</div>
										<fieldset className="form-group">
											<div className="row">
												<div className="col-sm-3">Radios</div>
												<div className="col-sm-9">
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios13"
																value="option1"
																checked=""
															/>
															Option one is this and that—be sure to
															include why it's great
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios23"
																value="option2"
															/>
															Option two can be something else and
															selecting it will deselect option one
														</label>
													</div>
													<div className="form-check disabled">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios33"
																value="option3"
																disabled=""
															/>
															Option three is disabled
														</label>
													</div>
												</div>
											</div>
										</fieldset>
										<div className="form-group row">
											<div className="col-sm-3">Checkbox</div>
											<div className="col-sm-9">
												<div className="form-check">
													<label className="form-check-label">
														<input
															className="form-check-input"
															type="checkbox"
														/>{" "}
														Check me out
													</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-sm-12 text-center">
												<button type="submit" className="btn btn-primary">
													Submit
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-success">
										<div className="custom-title">Form controls Pill</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label htmlFor="exampleFormControlInput13">
												Email address
											</label>
											<input
												type="email"
												className="form-control form-pill"
												id="exampleFormControlInput13"
												placeholder="name@example.com"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect13">
												Example select
											</label>
											<select
												className="form-control form-pill"
												id="exampleFormControlSelect13"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect23">
												Example multiple select
											</label>
											<select
												multiple
												className="form-control form-pill"
												id="exampleFormControlSelect23"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea13">
												Example textarea
											</label>
											<textarea
												className="form-control form-pill"
												id="exampleFormControlTextarea13"
												rows="3"
											/>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-info">
										<div className="custom-title">Column sizing Pill</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-row">
											<div className="col-7">
												<input
													type="text"
													className="form-control form-pill"
													placeholder="City"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control form-pill"
													placeholder="State"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control form-pill"
													placeholder="Zip"
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="shadow-form"
					role="tabpanel"
					aria-labelledby="shadow-form-tab"
				>
					<div className="row">
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-primary">
										<div className="custom-title">Basic Input Shadow</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Here’s a quick example to demonstrate Bootstrap’s form
										styles. Keep reading for documentation on required classes,
										form layout, and more.
									</p>
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail14">
												Email address
											</label>
											<input
												type="email"
												className="form-control form-shadow"
												id="exampleInputEmail14"
												aria-describedby="emailHelp4"
												placeholder="Enter email"
											/>
											<small id="emailHelp4" className="form-text text-muted">
												We'll never share your email with anyone else.
											</small>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword14">Password</label>
											<input
												type="password"
												className="form-control form-shadow"
												id="exampleInputPassword14"
												placeholder="Password"
											/>
										</div>
										<div className="form-check form-group">
											<input
												type="checkbox"
												className="form-check-input"
												id="exampleCheck14"
											/>
											<label
												className="form-check-label"
												htmlFor="exampleCheck14"
											>
												Check me out
											</label>
										</div>
										<div className="text-center">
											<button type="submit" className="btn btn-purple">
												Submit
											</button>
											<button
												type="submit"
												className="btn btn-outline-secondary"
											>
												Cancel
											</button>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-danger">
										<div className="custom-title">Sizing Shadow</div>
									</div>
								</div>
								<div className="card-body">
									<p className="text-muted">
										Set heights using classes like{" "}
										<code className="highlighter-rouge">.form-control-lg</code>{" "}
										and{" "}
										<code className="highlighter-rouge">.form-control-sm</code>.
									</p>

									<div className="form-group">
										<label>Large</label>
										<input
											className="form-control form-control-lg form-shadow"
											type="text"
											placeholder=".form-control-lg"
										/>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<input
											className="form-control form-shadow"
											type="text"
											placeholder="Default input"
										/>
									</div>
									<div className="form-group">
										<label>Small</label>
										<input
											className="form-control form-control-sm form-shadow"
											type="text"
											placeholder=".form-control-sm"
										/>
									</div>

									<div className="form-group">
										<label>Large</label>
										<select className="form-control form-control-lg form-shadow">
											<option>Large select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Standard / Default</label>
										<select className="form-control form-shadow">
											<option>Default select</option>
										</select>
									</div>
									<div className="form-group">
										<label>Small</label>
										<select className="form-control form-control-sm form-shadow">
											<option>Small select</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-6">
							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-warning">
										<div className="custom-title">Form Horizontal Shadow</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group row">
											<label
												htmlFor="inputEmail34"
												className="col-sm-3 col-form-label"
											>
												Email
											</label>
											<div className="col-sm-9">
												<input
													type="email"
													className="form-control form-shadow"
													id="inputEmail34"
													placeholder="Email"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="inputPassword34"
												className="col-sm-3 col-form-label"
											>
												Password
											</label>
											<div className="col-sm-9">
												<input
													type="password"
													className="form-control form-shadow"
													id="inputPassword34"
													placeholder="Password"
												/>
											</div>
										</div>
										<fieldset className="form-group">
											<div className="row">
												<div className="col-sm-3">Radios</div>
												<div className="col-sm-9">
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios14"
																value="option1"
																checked=""
															/>
															Option one is this and that—be sure to
															include why it's great
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios24"
																value="option2"
															/>
															Option two can be something else and
															selecting it will deselect option one
														</label>
													</div>
													<div className="form-check disabled">
														<label className="form-check-label">
															<input
																className="form-check-input"
																type="radio"
																name="gridRadios"
																id="gridRadios34"
																value="option3"
																disabled=""
															/>
															Option three is disabled
														</label>
													</div>
												</div>
											</div>
										</fieldset>
										<div className="form-group row">
											<div className="col-sm-3">Checkbox</div>
											<div className="col-sm-9">
												<div className="form-check">
													<label className="form-check-label">
														<input
															className="form-check-input"
															type="checkbox"
														/>{" "}
														Check me out
													</label>
												</div>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-sm-12 text-center">
												<button type="submit" className="btn btn-primary">
													Submit
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-success">
										<div className="custom-title">Form controls Shadow</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<label htmlFor="exampleFormControlInput14">
												Email address
											</label>
											<input
												type="email"
												className="form-control form-shadow"
												id="exampleFormControlInput14"
												placeholder="name@example.com"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect14">
												Example select
											</label>
											<select
												className="form-control form-shadow"
												id="exampleFormControlSelect14"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlSelect24">
												Example multiple select
											</label>
											<select
												multiple
												className="form-control form-shadow"
												id="exampleFormControlSelect24"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlTextarea14">
												Example textarea
											</label>
											<textarea
												className="form-control form-shadow"
												id="exampleFormControlTextarea14"
												rows="3"
											/>
										</div>
									</form>
								</div>
							</div>

							<div className="card card-shadow mb-4">
								<div className="card-header border-0">
									<div className="custom-title-wrap bar-info">
										<div className="custom-title">Column sizing Shadow</div>
									</div>
								</div>
								<div className="card-body">
									<form>
										<div className="form-row">
											<div className="col-7">
												<input
													type="text"
													className="form-control form-shadow"
													placeholder="City"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control form-shadow"
													placeholder="State"
												/>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control form-shadow"
													placeholder="Zip"
												/>
											</div>
										</div>
									</form>
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

export default Form

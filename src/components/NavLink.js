/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Toggle from "../hoc/Toggle"

const NavLink = ({ level, title, children, iconClass }) => (
	<Toggle
		render={({ active, toggle }) => (
			<li className={classNames({ "nav-item": level === "second" })} title={title}>
				<a
					onClick={toggle}
					className={classNames("nav-link nav-link-collapse", {
						collapsed: !active,
					})}
				>
					{level === "second" && <i className={iconClass} />}
					<span className="nav-link-text">{title}</span>
				</a>
				<ul
					className={classNames("collapse", {
						"sidenav-second-level": level === "second",
						"sidenav-third-level": level === "third",
						show: active,
					})}
				>
					{children}
				</ul>
			</li>
		)}
	/>
)

NavLink.propTypes = {
	level: PropTypes.oneOf(["second", "third"]).isRequired,
	title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
	iconClass: PropTypes.string,
}

export default NavLink

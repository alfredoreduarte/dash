/** @format */

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Toggle from "../hoc/Toggle"

const NavItem = ({ title, side, children }) => (
	<Toggle
		render={({ active, toggle }) => (
			<li className={`nav-item dropdown ${active && "show"}`}>
				<a
					className="nav-link dropdown-toggle mr-lg-2"
					href="javascript:;"
					aria-expanded={active}
					onClick={toggle}
				>
					{title}
				</a>
				<div
					className={classNames("dropdown-menu pb-0", {
						show: active,
						"dropdown-menu-right": side === "right",
						"dropdown-menu-left": side === "left",
						"header-right-dropdown-width": side === "right",
					})}
					onClick={toggle}
				>
					{React.Children.map(children, child => {
						if (child.type === "a") {
							// avoids overwriting className on dropdown-dividers
							return child
							// return React.cloneElement(child, { className: "dropdown-item" })
						}
						// return React.cloneElement(child, { className: "dropdown-item" })
						return child
					})}
				</div>
			</li>
		)}
	/>
)

NavItem.propTypes = {
	title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	side: PropTypes.oneOf(["left", "right"]),
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
}

export default NavItem

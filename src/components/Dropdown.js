/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Toggle from "../hoc/Toggle"

const Dropdown = ({ title, arrow, children, className, menuClassName }) => (
	<Toggle
		render={({ active, toggle, ref }) => (
			<div ref={ref} className={classNames("dropdown", { show: active })}>
				<button
					className={classNames("btn", className, {
						"dropdown-toggle": arrow,
					})}
					type="button"
					onClick={toggle}
				>
					{title}
				</button>
				<div className={classNames("dropdown-menu", menuClassName, { show: active })}>
					{React.Children.map(children, child => {
						/**
						 * Avoids overwriting className on dropdown-dividers
						 */
						if (child.type === "a") {
							return React.cloneElement(child, { className: "dropdown-item" })
						}
						return child
					})}
				</div>
			</div>
		)}
	/>
)

Dropdown.propTypes = {
	title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
	className: PropTypes.string,
	arrow: PropTypes.bool,
	menuClassName: PropTypes.string,
}

export default Dropdown

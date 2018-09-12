/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Toggle from "../hoc/Toggle"

const Dropdown = ({ title, children, className }) => (
	<Toggle
		render={({ active, toggle, ref }) => (
			<div ref={ref} className={classNames("dropdown", { show: active })}>
				<button
					className={classNames("btn dropdown-toggle", className)}
					type="button"
					onClick={toggle}
				>
					{title}
				</button>
				<div className={classNames("dropdown-menu pt-0 pb-0", { show: active })}>
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
	// level: PropTypes.oneOf(["second", "third"]).isRequired,
	title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
	className: PropTypes.string,
}

export default Dropdown

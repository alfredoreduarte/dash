/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import enhanceWithClickOutside from "react-click-outside"

class NavItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
		}
		this.toggle = this.toggle.bind(this)
	}

	componentDidMount() {}

	componentWillUnmount() {}

	handleClickOutside() {
		this.toggle(false)
	}

	toggle(off) {
		this.setState(state => ({
			show: !off ? off : !state.show,
		}))
	}

	render() {
		const { show } = this.state
		const { title, side, children } = this.props
		const { toggle } = this
		return (
			<li className={`nav-item dropdown ${show && "show"}`}>
				<a
					className="nav-link dropdown-toggle mr-lg-2"
					href="javascript:;"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded={show}
					onClick={toggle}
				>
					{title}
				</a>
				<div
					className={`dropdown-menu ${side && "dropdown-menu-" + side} ${show && "show"}`}
					onClick={toggle}
				>
					{React.Children.map(children, child => {
						if (child.type === "div") {
							// avoids overwriting className on dropdown-dividers
							return child
						}
						return React.cloneElement(child, { className: "dropdown-item" })
					})}
				</div>
			</li>
		)
	}
}

NavItem.propTypes = {
	title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	side: PropTypes.oneOf(["left", "right"]),
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
}

export default enhanceWithClickOutside(NavItem)

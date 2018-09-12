/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import enhanceWithClickOutside from "react-click-outside"

class NavLink extends Component {
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
		const { level, title, children, iconClass } = this.props
		const { toggle } = this
		return (
			<li className={classNames({ "nav-item": level === "second" })} title={title}>
				<a
					onClick={toggle}
					className={classNames("nav-link nav-link-collapse", {
						collapsed: !show,
					})}
				>
					{level === "second" && <i className={iconClass} />}
					<span className="nav-link-text">{title}</span>
				</a>
				<ul
					className={classNames("collapse", {
						"sidenav-second-level": level === "second",
						"sidenav-third-level": level === "third",
						show: show,
					})}
				>
					{children}
				</ul>
			</li>
		)
	}
}

NavLink.propTypes = {
	level: PropTypes.oneOf(["second", "third"]).isRequired,
	title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
	iconClass: PropTypes.string,
}

export default enhanceWithClickOutside(NavLink)

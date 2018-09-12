/** @format */

import React, { Component } from "react"
import classNames from "classnames"

class Tab extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { children, className, active, onClick } = this.props
		return (
			<a
				href="javascript:;"
				className={classNames("nav-link", className, {
					active: active,
				})}
				onClick={onClick}
			>
				{children}
			</a>
		)
	}
}

Tab.role = "Tab"

export default Tab

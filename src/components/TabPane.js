/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

class TabPane extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { children, className, active } = this.props
		return (
			<div className={classNames("tab-pane", className, { active: active })}>{children}</div>
		)
	}
}

TabPane.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
}

TabPane.role = "TabPane"

export default TabPane

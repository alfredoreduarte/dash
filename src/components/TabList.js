/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

class TabList extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { activeIndex, handleSelected, children, className } = this.props
		return (
			<ul className={classNames("nav", className)}>
				{React.Children.map(children, (child, index) => {
					return (
						<li className="nav-item">
							{React.cloneElement(child, {
								active: activeIndex === index,
								onClick: () => handleSelected(index),
							})}
						</li>
					)
				})}
			</ul>
		)
	}
}

TabList.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
}

TabList.role = "TabList"

export default TabList

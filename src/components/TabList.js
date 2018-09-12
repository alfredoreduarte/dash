/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

class TabList extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { activeIndex, handleSelected, children, justified, mode, className } = this.props
		return (
			<ul
				className={classNames(className, "nav", {
					"nav-tabs": !mode || mode === "tabs",
					"nav-pills": mode === "pills",
					"nav-fill": justified,
				})}
			>
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
	justified: PropTypes.bool,
	mode: PropTypes.oneOf(["tabs", "pills"]),
}

TabList.role = "TabList"

export default TabList

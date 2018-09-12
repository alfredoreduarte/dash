/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import WithTabs from "../hoc/WithTabs"

const Tabs = ({ children }) => (
	<WithTabs
		render={({ activeIndex, handleSelected }) => (
			<div>
				{React.Children.map(children, (child, index) => {
					if (child.type.role === "TabList") {
						return React.cloneElement(child, {
							activeIndex: activeIndex,
							handleSelected: handleSelected,
						})
					}
				})}
				<div className="tab-content">
					{React.Children.map(children, (child, index) => {
						if (child.type.role === "TabPane") {
							return React.cloneElement(child, {
								active: activeIndex == index - 1,
							})
						}
					})}
				</div>
			</div>
		)}
	/>
)

Tabs.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
}

export default Tabs

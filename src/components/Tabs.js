/** @format */

import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

class Tabs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0,
		}
		this.handleSelected = this.handleSelected.bind(this)
	}

	componentDidMount() {}

	componentWillUnmount() {}

	handleSelected(index) {
		this.setState(state => ({
			activeIndex: index,
		}))
	}

	render() {
		const { activeIndex } = this.state
		const { children } = this.props
		const { handleSelected } = this
		return (
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
		)
	}
}

Tabs.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
}

export default Tabs

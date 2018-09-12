/** @format */

import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"

/**
 * Adds tab-like functionality to any component that wants to add as a tab container
 * Exposes an "activeIndex" integer, and a "handleSelected(index)" method for changing it.
 *
 * Using render props instead of a HOC based on this article:
 * https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
 */
class WithTabs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0,
		}
		this.handleSelected = this.handleSelected.bind(this)
	}

	handleSelected(index) {
		this.setState(state => ({
			activeIndex: index,
		}))
	}

	render() {
		const { wrappedRef, ...rest } = this.props
		return (
			<Fragment>
				{this.props.render({
					...this.state,
					handleSelected: this.handleSelected,
					ref: c => {
						this.__wrappedInstance = c
						this.__domNode = ReactDOM.findDOMNode(c)
						wrappedRef && wrappedRef(c)
					},
				})}
			</Fragment>
		)
	}
}

export default WithTabs

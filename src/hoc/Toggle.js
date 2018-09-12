/** @format */

import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"

/**
 * Exposes an "active" state and a "toggle()" method for changing it.
 * Using render props instead of a HOC based on this article:
 * https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
 */
class Toggle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
		}
		this.toggle = this.toggle.bind(this)
		this.handleClickOutside = this.handleClickOutside.bind(this)
	}

	componentDidMount() {
		document.addEventListener("click", this.handleClickOutside, true)
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside, true)
	}

	handleClickOutside(e) {
		const domNode = this.__domNode
		if (
			(!domNode || !domNode.contains(e.target)) &&
			/**
			 * When clickOutside callback is handled here internally:
			 */
			this.__wrappedInstance
			/**
			 * When the wrappedInstance is expected to pass handleClickOutside:
			 */
			// this.__wrappedInstance &&
			// typeof this.__wrappedInstance.handleClickOutside === "function"
		) {
			this.toggle(false)
		}
	}

	/**
	 * Passing off = false will force hiding.
	 * Useful when detecting clicks outside of the component
	 */
	toggle(off) {
		this.setState(state => ({
			active: off === false ? off : !state.active,
		}))
	}

	render() {
		const { wrappedRef, ...rest } = this.props
		return (
			<Fragment
				ref={c => {
					this.__wrappedInstance = c
					this.__domNode = ReactDOM.findDOMNode(c)
					wrappedRef && wrappedRef(c)
				}}
			>
				{this.props.render({ ...this.state, toggle: this.toggle })}
			</Fragment>
		)
	}
}

export default Toggle

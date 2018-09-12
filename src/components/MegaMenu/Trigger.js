/** @format */

import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

/**
 * Receives an "arrow" boolean to avoid showing it while "active" is true
 */
const MegaMenuTrigger = ({ arrow, active, toggle }) => (
	<a
		className={classNames("navbar-brand", {
			"mt-2": active,
		})}
		href="javascript:;"
		onClick={toggle}
	>
		<img
			className="pr-3 float-left"
			src="/images/logo-icon.png"
			srcSet="/images/logo-icon@2x.png 2x"
		/>
		<div className="float-left">
			<div>Dash {arrow && <i className="fa fa-caret-down pl-2" />}</div>
			<span className="page-direction f12 weight300">
				<span className="mr-1  d-none">home</span>
				<i className="fa fa-angle-right  d-none" />
				<span className="ml-1  d-none">ui element</span>
			</span>
		</div>
	</a>
)

MegaMenuTrigger.propTypes = {
	active: PropTypes.bool,
	arrow: PropTypes.bool,
	toggle: PropTypes.func.isRequired,
}

export default MegaMenuTrigger

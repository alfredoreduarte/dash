/** @format */

import React from "react"
import classNames from "classnames"

const MegaMenuTab = ({ active, children }) => (
	<li className="nav-item">
		<a className={classNames("nav-link", { active: active })}>{children}</a>
	</li>
)

export default MegaMenuTab

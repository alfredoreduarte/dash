/** @format */

import React from "react"
import FilterLink from "../containers/FilterLink"
import ActionButton from "../containers/ActionButton"
import { VisibilityFilters } from "../actions"

const Footer = () => (
	<div>
		<span>Show: </span>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
			Completed
		</FilterLink>
		<hr />
		<ActionButton>Async action (see console)</ActionButton>
	</div>
)

export default Footer

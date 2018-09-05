/** @format */

import { connect } from "react-redux"
import { setVisibilityFilter, asyncAction } from "../actions"
import Link from "../components/Link"

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter))
		dispatch(asyncAction())
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

/** @format */

import { connect } from "react-redux"
import Link from "../components/Link"
import { asyncAction } from "../actions"

const mapStateToProps = state => ({
	active: false,
})

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(asyncAction()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

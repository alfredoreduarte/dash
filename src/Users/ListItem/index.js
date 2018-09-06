/** @format */

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { actions as userActions } from "../store"
import ListItem from "./ListItem"

const mapStateToProps = (state, props) => ({
	// users: state.users.items,
})

const mapDispatchToProps = (dispatch, props) => ({
	actions: bindActionCreators({ ...userActions }, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListItem)

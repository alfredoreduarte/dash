/** @format */

import { connect } from "react-redux"
import UserList from "./List"

const mapStateToProps = (state, props) => ({
	users: state.users.items.sort((a, b) => b.id - a.id),
	isDeleting: state.users.isDeleting,
})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList)

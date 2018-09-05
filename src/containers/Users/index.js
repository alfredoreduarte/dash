/** @format */

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Users from "../../components/Users"
import { actions as userActions } from "./store"

const mapStateToProps = (state, ownProps) => ({
	users: state.users.items,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators({ ...userActions }, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users)

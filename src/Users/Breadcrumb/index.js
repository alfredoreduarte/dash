/** @format */

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { actions as userActions } from "../store"
import Breadcrumb from "./Breadcrumb"

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch, props) => ({
	actions: bindActionCreators({ ...userActions }, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Breadcrumb)

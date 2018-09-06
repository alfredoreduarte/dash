/** @format */

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { reduxForm } from "redux-form"
import { actions as userActions } from "../store"
import { editFormName, createFormName } from "../"
import Form from "./Form"

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch, props) => ({})

let FormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Form)

export default reduxForm({
	onSubmit: (data, dispatch, props) => {
		const actions = bindActionCreators({ ...userActions }, dispatch)
		if (props.form === editFormName) {
			actions.updateUser(data)
		}
		if (props.form === createFormName) {
			actions.createUser(data)
		}
	},
})(FormContainer)

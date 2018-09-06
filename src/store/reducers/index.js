/** @format */

import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import { rootReducer as users } from "../../Users/store"
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "../actions"

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false,
				},
			]
		case TOGGLE_TODO:
			return state.map(
				todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
			)
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos,
	users,
	form: formReducer,
})

export default todoApp

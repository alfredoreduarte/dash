/** @format */

import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import todoApp from "./reducers"

const store = createStore(todoApp, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
registerServiceWorker()

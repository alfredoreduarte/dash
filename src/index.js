/** @format */

import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import registerServiceWorker from "./registerServiceWorker"
import App from "./App"
import reducers from "./store/reducers"

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
registerServiceWorker()

/** @format */

import { createResource } from "redux-rest-resource"

const hostUrl = "https://jsonplaceholder.typicode.com"

export const { types, actions, rootReducer } = createResource({
	name: "user",
	url: `${hostUrl}/users/:id`,
})

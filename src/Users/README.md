# Users

## Motivation

This demonstrates how to structure a standard CRUD resource and keep (almost) everything isolated.

## Guidelines

- Use `index.js` for constants like redux form names
- Use `routes.js` for switching between screens. Using `<Route>` inside components is allowed only for minor conditional rendering.
- For container/component pairs, create the container as `ComponentName/index.js` and the functional component as `ComponentName/ComponentName.js`
- Purely functional components must go inside `components`
# A11y-Cat

![Poor little alley cat](https://wa-rren-dev.github.io/a11y-cat/cat.jpg)

An accessibility audit tracker & report generator.

## Tech

- Mongo
- Keystone 5
- React

## Project structure

At the moment the front and back end are in their respective folders of `client` and `server`. You can find sketches and supporting docs at in the `supporting docs` folder, and Github pages support site in the `docs` folder and viewable at https://wa-rren-dev.github.io/a11y-cat/.

## Getting it running

- Install and run [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Run `npm install` in each of the `client` and `server` folders
- `client` uses Create React App so do an `npm start` in there
- `server` uses Keystone 5 so do an `npm run dev` in there
- Necessary seed data should be populated on first run
- While in development, seed data will not be migrated between versions so generally you'll need to clear out the database if there's an update to the model
- The username and password of the default admin user is fixed so don't push this anywhere public without changing the default admin user!
- Interfaces should be available at the...

## Dev addresses

| Interface          | available at...                      |
| ------------------ | ------------------------------------ |
| Front end          | http://localhost:3001                |
| Keystone admin     | http://localhost:3000/admin          |
| GraphQL playground | http://localhost:3000/admin/graphiql |
| GraphQL API        | http://localhost:3000/admin/api      |

## Routing

We'll add to this as the app develops.

| Route                 | View                                                       |
| --------------------- | ---------------------------------------------------------- |
| `/`                   | Home                                                       |
| `/specifications`     | List of specifications                                     |
| `/specifications/:id` | Specification details (list of requirements)               |
| `/audits`             | List of audits                                             |
| `/audits/:id`         | Audit details (list of tests)                              |
| `/test/:id`           | Test details (where you conduct the test (list of results) |

# React Datagrid Sale Order Demostration 

Master : [![CircleCI](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/master.svg?style=svg)](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/master)

Develop : [![CircleCI](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/develop.svg?style=svg)](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/develop)

[![devDependency Status](https://david-dm.org/MarkAPhillips/react-datagrid-demo/dev-status.svg)](https://david-dm.org/MarkAPhillips/react-datagrid-demo=devDependencies)
[![dependency Status](https://david-dm.org/MarkAPhillips/react-datagrid-demo.svg)](https://david-dm.org/MarkAPhillips/react-datagrid-demo)

Sales order datagrid demonstration that uses React, Redux, Immutable, ES2015, Webpack and ag-grid(enterprise) to display
sales order data.

Data is served locally via JSON using `json-server` that provides limited REST routing and filters.

Default reports are provided to demonstrate pivoting, grouping and aggregation which are returned via the REST API.
Additional reports could easily be added and the ag-grid provides a high level of customisation to be able faciliate additional 
customisations. Ag-grid is highly performant, well maintained and allows for various ways of viewing data in the grid.

The following assumptions were made:

* Supports latest browser stacks for IE, Chrome and Firefox
* Default reports were provided based on initial requirements outlined to demonstrate how these can be generated.
* The data is static and does not require updates in real time
* Initial data visualisation is provided by the grid to allow for the use to drill down in the data sets - visualisation provided by charts would be added as an enhancement

The REST API protocol used was suitable for simple demonstration of the application with very little set up and installation.
In a real world scenario data could be provided server side based on the current viewport and interact directly
with events to changes to the current viewport defined by the grid.

Ag-grid can provide this functionality see https://www.ag-grid.com/javascript-grid-viewport/#gsc.tab=0

## Prerequisites

Install NodeJS  https://nodejs.org/

Install Yarn https://yarnpkg.com/en/docs/install dependent on your operating system.

Install the following global dependencies from the command line.

Yarn was used over NPM due to certain improvements in versioning and performance.

`yarn install -g webpack rimraf`

## Installation

Clone the repository : https://github.com/MarkAPhillips/react-datagrid-demo.git
to a local subdirectory using Git.

Open a command prompt and navigate to the directory when the repository was cloned to.

Run: 
`yarn install`

## Running tests
 
Tests are run using the following command:

`yarn test`

Tests are run using `mocha` directly with expectations using `chai` and stubs using `sinon`

`chai-immutable` was used to simplify the testing of data types using `Immmutable`.

`sinon-as-promised` was used to stub responses returned from promises.

## Running Development Server

Firstly start the API server with the command: 

`yarn run api-server`

This runs a mock API server at:

`http://localhost:3000`

Then run the following command:

`yarn start`

and navigate in the browser to:

`http://localhost:5000`
`
## Build code for Deployment

To build a distributable file for deployment, run the following command:

`yarn run build`

This wil create a list of static assets in a `dist` folder that can be deployed on a web server.

Please note the API route would need to be changed in the `app.constants` file (this can be automated moving forward).

## Continuous Integration

A simple pipeline has been set up to run on `circleci` that builds the application and runs the tests for each 
check-in to the `master` or `develop` branch on Github.

## Known Issues and Limitations

* Ag-grid has limitations in relation to working with Redux, and would need to be reviewed for very large datasets.
* React components require tests to be added (using `enzyme`) but due to time limitations could not be implemented.


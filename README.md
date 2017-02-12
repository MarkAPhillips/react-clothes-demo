# React Datagrid Sale Order Demostration 

Master : [![CircleCI](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/master.svg?style=svg)](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/master)

Develop : [![CircleCI](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/develop.svg?style=svg)](https://circleci.com/gh/MarkAPhillips/react-datagrid-demo/tree/develop)

[![devDependency Status](https://david-dm.org/MarkAPhillips/react-datagrid-demo/dev-status.svg)](https://david-dm.org/MarkAPhillips/react-datagrid-demo=devDependencies)
[![Dependency Status](https://david-dm.org/MarkAPhillips/react-datagrid-demo.svg)](https://david-dm.org/MarkAPhillips/react-datagrid-demo)

Sales order demonstation that uses React, Redux, Immutable, ES2015, Webpack and ag-Grid to display
sales order data.

Data is served locally via JSON using `json-server` that provides limited REST routing and filters.

Default reports are provided to demonstrate pivoting, grouping and aggregation which are returned via the REST API.
Additional reports could easily be added and ag-grid provided a high level of customisation to be able faciliate additional 
customisations. ag-grid is highly performant, well maintained and allows for various ways of viewing data in the grid.

The following assumptions were made:

* Supports latest browser stacks for IE, Chrome and Firefox
* Default reports were provided based on initial requirements outlined to demonstrate how these can be generated.
* The data is static and does not require updates in real time

The protocol used was suitable for simple demonstation of the application with very little set up and installation.
In a real world example data would probably be provided server side based on the current viewport and interact directly
with events to changes to the current viewport defined by the grid.

If real time data is required this can provided via connecting to web sockets. 

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

`yarn run build`

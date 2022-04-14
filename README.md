# Outages

### Prerequisites

Have a machine with the following installed:

- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) or [Node v17.5.0](https://nodejs.org/en/blog/release/v17.5.0/)
- [Node Package Manager (npm)](https://www.npmjs.com)

\
If nvm is installed, run the following command: `nvm use`  
This will change the version of node that is currently being used, to the one in the `.nvmrc` file.  
  \
Otherwise, make sure Node v17.5.0 and the corresponding npm version are being used.
Node v17.5.0 introduces the fetch API and eliminates the need for the `node-fetch` npm dependency.

### Install dependencies

Run `npm install` to install the projects dependencies.

### How to run the program

Navigate to repository root and run the following:  
`npm start`

### How to run the unit tests

Navigate to repository root and run the following:  
`npm test`
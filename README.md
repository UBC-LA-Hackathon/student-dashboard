# Student Dashboard
This project contains the basic scaffold of the Student Dashboard application.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for use with your own Canvas API tokens.

### Prerequisites
1. **Install [Node 12.0.0 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**.

### Installation
1. Open command prompt on Mac or command line on Windows.
1. Clone this repo. `git clone https://github.com/UBC-LA-Hackathon/student-dashboard.git`

#### Backend
1. `cd backend`
1. `npm install` (If you see `babel-node: command not found`, you've missed this step.)
1. `npm start`

#### Frontend
1. `cd frontend`
1. `npm install`
1. `npm start`

## Code Overview
### Dependencies
#### Backend
* [expressjs](https://expressjs.com/) - The server for building API endpoints, making calls to Canvas API, and reading/sending data.
* [node-canvas-api](https://github.com/ubccapico/node-canvas-api) - Easy way to make calls to Canvas API using JavaScript.

#### Frontend
* [reactjs](https://reactjs.org/) - JavaScript library for building user interfaces

### Application Structure
#### Backend
* `server.js` - The entry point into our backend code. It starts the express server and is responsible for handling requests the frontend makes,making requests to the Canvas API, and reading/sending data to the frontend.

#### Frontend
* `App.js` - The top-level React component that is responsible for fetching data and rendering child React components.

### ToDos
1.
1.
1.
1.
1.
# Student Dashboard
This project contains the basic backend and frontend components of the Student Dashboard application. By the end of the hackathon, you should have a working full-stack web application that displays your own Canvas data from the Canvas API.

We will also provide other data sources that you are welcome to integrate to build more advanced tools and visualizations.

## Table of Contents
1. [Getting Started](#getting-started)
1. [Code Overview](#code-overview)
1. [To Dos](#to-dos)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for use with your own Canvas API tokens.

### Prerequisites
1. **Install [Node 12.0.0 or greater](https://nodejs.org)**.
2. **Install [Git](https://git-scm.com/downloads)**.

### Installation and starting application
1. Open command prompt on Mac or command line on Windows.
1. Clone this repo. `git clone https://github.com/UBC-LA-Hackathon/student-dashboard.git`

#### Backend
1. `cd backend`
1. `npm install`
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

## To Dos
1. [Create a Canvas API token and make calls to the Canvas API.](1-Canvas-API-Token.md)
1. [Create API endpoints in backend.](2-API-Endpoints.md )
1. [Make API calls from frontend to frontend.](3-Make-API-Calls.md)
1. [Create data visualization dashboard.](4-Create-Data-Viz-Dashboard.md)
1. [Create more advanced data visualizations/tools.](5-Create-Advanced-Data-Viz.md)
# Student Dashboard Workshopathon
This project contains the basic backend and frontend components of the Student Dashboard application. By the end of this workshopathon, you should have a working full-stack web application that displays your own Canvas data using the Canvas API.

We will also provide other data sources that you are welcome to integrate to build [more advanced tools and visualizations](5-Create-Advanced-Data-Viz.md).

## Table of Contents
1. [What You'll Learn](#📚-what-youll-learn)
1. [Ask For Help](#🤔-ask-for-help)
1. [Schedule](#📅-schedule)
1. [Getting Started](#⚙️-getting-started)
1. [Code Overview](#💾-code-overview)
1. [To Dos](#✅-to-dos)

## 📚 What You'll Learn
By completing this workshopathon, you'll learn to:
* use the Canvas API
* explore the data that Canvas collects from you
* write some JavaScript
* learn the difference between the backend and frontend
* clean data
* build your own API endpoints
* use React to build frontend components
* build a modern web application

## 🤔 Ask For Help
We don't expect you to come into the workshopathon with any prior knowledge. You may never have coded before - that's okay! You're here to learn, and we're here to help.

There are many volunteers here who are happy to answer any questions you have.

And if you are already comfortable with some of the technology we're using, please help your neighbours!

## 📅 Schedule
### Friday, March 12
* tbd

### Saturday, March 13
* 9:30am - Doors Open (coffee and pastries).
* 10:00am - Introductions and Welcome to the Workshopathon! We'll give you an overview of the tasks and get you set up with this repository.
* 10:30am - Icebreaker (get to know your neighbours).
* 11:00am - Start coding!
* 12:30pm - Lunch.
* 1:00pm - Check-in.
* 3:00pm - Check-in.
* 4:30pm - Demos!
* 5:30pm - End of Workshopathon.

## ⚙️ Getting Started
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

## 💾 Code Overview
### Dependencies
#### Backend
* [nodejs](https://nodejs.org/en/) - JavaScript runtime.
* [expressjs](https://expressjs.com/) - The server for building API endpoints, making calls to Canvas API, and reading/sending data.
* [node-canvas-api](https://github.com/ubccapico/node-canvas-api) - Easy way to make calls to Canvas API using JavaScript.

#### Frontend
* [reactjs](https://reactjs.org/) - JavaScript library for building user interfaces
* [Victory](https://formidable.com/open-source/victory/) - React components for easily building data visualizations

### Application Structure
#### Backend
* `server.js` - The entry point into our backend code. It starts the express server and is responsible for handling requests the frontend makes, making requests to the Canvas API, and reading/sending data to the frontend.

#### Frontend
* `App.js` - The top-level React component that is responsible for fetching data and rendering child React components.

## ✅ To Dos
1. [Create a Canvas API token and make calls to the Canvas API.](1-Canvas-API-Token.md)
1. [Create API endpoints in backend.](2-API-Endpoints.md )
1. [Make API calls from frontend to frontend.](3-Make-API-Calls.md)
1. [Create data visualization dashboard.](4-Create-Data-Viz-Dashboard.md)
1. [Create more advanced data visualizations/tools.](5-Create-Advanced-Data-Viz.md)
1. [Share your work](6-Share-Your-Work.md)
# Student Dashboard Workshopathon
This project contains the basic backend and frontend components of the Student Dashboard application. By the end of this workshopathon, you should have a working full-stack web application that displays your own Canvas data using the Canvas API.

We will also provide other data sources that you are welcome to integrate to build [more advanced tools and visualizations](5-Create-Advanced-Data-Viz.md).

Due to the compressed nature of this workshopathon, we'll be covering a lot of ground in not a lot of time. You don't need to fully understand everything. There are lots of links to external readings and tutorials within [Tasks](#-tasks) that you're welcome to explore. And remember that this repo will always be a resource you can access in the future (so remember to star this repo)!

## Table of Contents
1. [What You'll Learn](#-what-youll-learn)
1. [Ask For Help](#-ask-for-help)
1. [Schedule](#-schedule)
1. [Getting Started](#%EF%B8%8F-getting-started)
1. [Code Overview](#-code-overview)
1. [Tasks](#-tasks)
1. [Organizers](#organizers)

## 📚 What You'll Learn
By completing this workshopathon, you'll learn to:
* use the [Canvas API](https://canvas.instructure.com/doc/api/)
* explore the data that [Canvas collects from you](https://learninganalytics.ubc.ca/ethics-policy/students-learning-analytics-and-privacy/)
* write some code in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* learn the difference between the [backend and frontend](https://en.wikipedia.org/wiki/Front_and_back_ends)
* [clean data](https://www.sisense.com/glossary/data-cleaning/)
* build your own [API endpoints](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)
* use [React](https://reactjs.org/) to build [frontend components](https://reactjs.org/docs/components-and-props.html)
* build a [modern web application](https://reactjs.org/docs/components-and-props.html)

## 🤔 Ask For Help
We don't expect you to come into the workshopathon with any prior knowledge. You may never have coded before - that's okay! You're here to learn, and we're here to help.

There are many volunteers here with lots of software development experience who are happy to help.

And if you're already comfortable with some of the technology we're using, please help your neighbours!

## 📅 Schedule
### Friday, March 12
* 4:30pm - Design Thinking Workshop
* 6:00pm - Social (pizza and pop)

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
2. **Install [Visual Studio Code](https://code.visualstudio.com/)** (optional but recommended).

### Installation and starting application
1. Open terminal on Mac or command line on Windows. I like to use [VSCode's integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal), as it works for both Mac and PC.
1. Clone this repo. `git clone https://github.com/UBC-LA-Hackathon/student-dashboard.git`
1. Navigate into repo. `cd student-dashboard`

#### Backend
1. Navigate into `backend` repo. `cd backend`
1. Install required dependencies. `npm install`
1. Start server. `npm start`

#### Frontend
1. Navigate into `frontend` repo. `cd frontend`
1. Install required dependencies. `npm install`
1. Start frontend application. `npm start`

## 💾 Code Overview
### Dependencies
#### Backend
* [nodejs](https://nodejs.org/en/) - JavaScript runtime.
* [expressjs](https://expressjs.com/) - The server for building API endpoints, making calls to Canvas API, and reading/sending data.
* [cors](https://expressjs.com/en/resources/middleware/cors.html) - A middleware to enable [Cross-Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).
* [node-canvas-api](https://github.com/ubccapico/node-canvas-api) - Easy way to make calls to Canvas API using JavaScript.
* [neat-csv](https://github.com/sindresorhus/neat-csv) - Simple way to read CSV files.

#### Frontend
* [reactjs](https://reactjs.org/) - JavaScript library for building user interfaces.
* [Victory](https://formidable.com/open-source/victory/) - React components for easily building data visualizations.

### Application Structure
#### Backend
* [`server.js`](https://github.com/UBC-LA-Hackathon/student-dashboard/blob/master/backend/server.js) - The entry point into our backend code. It starts the express server and is responsible for handling requests the frontend makes, making requests to the Canvas API, and reading/sending data to the frontend.

#### Frontend
* [`App.js`](https://github.com/UBC-LA-Hackathon/student-dashboard/blob/master/frontend/src/App.js) - The top-level React component that is responsible for fetching data and rendering child React components that you will build.

## ✅ Tasks
1. [Create a Canvas API token and make calls to the Canvas API](1-Canvas-API-Token.md)
1. [Create API endpoints in backend](2-API-Endpoints.md)
1. [Make API calls from frontend to frontend](3-Make-API-Calls.md)
1. [Create data visualization dashboard](4-Create-Data-Viz-Dashboard.md)
1. [Create more advanced data visualizations/tools](5-Create-Advanced-Data-Viz.md)
1. [Share your work](6-Share-Your-Work.md)
1. [Feedback and thanks](7-Feedback-And-Thanks.md)

## Organizers
This hackathon is a collaborative effort by the [UBC Learning Analytics](https://learninganalytics.ubc.ca/) project, [LAVA](https://blogs.ubc.ca/lava/) (Learning Analytics, Visual Analytics), and [Sauder Learning Services](https://www.sauder.ubc.ca/about-ubc-sauder/learning-services), with staff volunteers from [Faculty of Arts](https://www.arts.ubc.ca/), [Faculty of Education](https://educ.ubc.ca/), [Sauder School of Business](https://www.sauder.ubc.ca/), and the [Centre for Teaching, Learning and Technology](https://ctlt.ubc.ca/).

A big thank you to [Sauder Learning Labs](https://www.sauder.ubc.ca/about-ubc-sauder/learning-services/learning-labs) for providing a space designed to facilitate teams in using critical thinking and analytical decision making to solve real-world problems.

And another big thank you to our volunteers from outside of UBC.
TODO: Add list of volunteers

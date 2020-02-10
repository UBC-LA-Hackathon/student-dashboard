Welcome to the [7th UBC Learning Analytics hackathon](https://learninganalytics.ubc.ca/for-students/hackathons/)! This hackathon is really a workshop, so we're going to be referring to it as a `workshopathon` from here on out.

This repo contains the basic backend and frontend components of the Student Dashboard application you will be building. By the end of this workshopathon, you should have a working web application that displays your own Canvas data using the Canvas API.

We will also provide other data sources that you are welcome to integrate to build [more advanced tools and visualizations](5-Create-Advanced-Data-Viz.md).

Due to the compressed nature of this workshopathon, we'll be covering a lot of ground in not a lot of time. You don't need to fully understand everything. There are lots of links to external readings and tutorials within [Tasks](#-tasks) that you're welcome to explore. And remember that this repo will always be a resource you can access in the future (so give it a star)!

## Table of Contents
1. [What You'll Learn](#-what-youll-learn)
1. [What You'll Build](#-what-youll-Build)
1. [Ask For Help](#-ask-for-help)
1. [Schedule](#-schedule)
1. [Getting Started](#%EF%B8%8F-getting-started)
1. [Code Overview](#-code-overview)
1. [Tasks](#-tasks)
1. [Project Showcase](#project-showcase)
1. [Organizers](#organizers)
1. [Volunteers](#volunteers)

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

## 🔨 What You'll Build
You'll be building a web application that displays a [heatmap](https://en.wikipedia.org/wiki/Heat_map) of what days of the week and what time of the day you and your peers (and your instructor) are most actively posting in the discussion forum of a course.

It should look something like this:
![heatmap](https://github.com/UBC-LA-Hackathon/student-dashboard/blob/master/_assets/heatmap.png)

After you've completed the heatmap, you can either add more [features to the heatmap](5-Create-Advanced-Data-Viz.md#give-me-ideas) or use the [tons of data we provide](5-Create-Advanced-Data-Viz.md#give-me-data) to build entirely new tools and visualizations.

## 🤔 Ask For Help
We don't expect you to come into the workshopathon with any prior knowledge. You may never have coded before - that's okay! You're here to learn, and we're here to help.

There are many volunteers here with lots of software development experience who are happy to help.

And if you're already comfortable with some of the technology we're using, please help your neighbours!

## 📅 Schedule
### Friday, March 13
* 5:00pm - Design Thinking Workshop
* 6:30pm - Social (pizza and pop)

### Saturday, March 14
* 9:30am - Doors Open (coffee and pastries).
* 10:00am - Introductions and Welcome to the Workshopathon! We'll give you an overview of the tasks and get you set up with this repository.
* 10:15am - Start hacking!
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
2. **Install [Brave](https://brave.com/) or [Firefox](https://www.mozilla.org/en-CA/firefox/), since [Chrome is spyware](https://www.washingtonpost.com/technology/2019/06/21/google-chrome-has-become-surveillance-software-its-time-switch/)** (optional but recommended; the volunteers are more familiar with using the devtools of Brave or Firefox).

### Installation and setup
1. Fork this repo.
![fork](./_assets/fork.png)
1. Copy clone link.
![clone](./_assets/clone.png)
1. Open terminal on Mac or command line on Windows. We like to use [VSCode's integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal), as it works for both Mac and PC.
1. Clone repo. `git clone {paste URL you copied}`
1. Navigate into repo. `cd student-dashboard`

#### Backend
1. Navigate into `backend` repo. `cd backend`
1. Install required dependencies. `npm install`
1. Start server. `npm start`
1. In terminal, you should see `Example app listening on port 4001!`.

#### Frontend
1. Navigate into `frontend` repo. `cd frontend`
1. Install required dependencies. `npm install`
1. Start frontend application. `npm start`
1. Your browser should start. If not, navigate to http://localhost:3000/. You should see `Welcome to the Workshopathon, attendee!`.

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
* [D3.js](https://d3js.org/) - The de facto way to build data visualizations on the web, somewhat painfully.

### Application Structure
#### Backend
* [`server.js`](./blob/master/backend/server.js) - The entry point into our backend code. It starts the express server and is responsible for handling requests the frontend makes, making requests to the Canvas API, and reading/sending data to the frontend.
* [`canvasDiscussions.js`](./blob/master/backend/canvasDiscussions.js) - Exports two functions, `getDiscussions` and `flattenTopicAndReplies`. The first takes as input a Canvas course id and pulls discussions from that course in a way that preserves the threaded nature of replies to discussion topics. The second flattens the topics and replies to make it easier for generating the heatmap.
* [`readCSV.js`](./blob/master/backend/readCSV.js) - Simple utility for reading CSVs painlessly. Takes as input the path to the CSV.

#### Frontend
* [`App.js`](https://github.com/UBC-LA-Hackathon/student-dashboard/blob/master/frontend/src/App.js) - The top-level React component that is responsible for fetching data and passing data down to child React components.
* [`Discussion.js`](https://github.com/UBC-LA-Hackathon/student-dashboard/blob/master/frontend/src/components/Discussion.js) - `Discussion` modifies the data passed by `App` and passes it down to the child `Heatmap`.
* [`Heatmap.js`](https://github.com/UBC-LA-Hackathon/student-dashboard/blob/master/frontend/src/components/Heatmap.js) - Renders the heatmap using [D3.js](https://d3js.org/).

## ✅ Tasks
1. [Create a Canvas API token and make calls to the Canvas API](1-Canvas-API-Token.md)
1. [Create API endpoints in backend](2-API-Endpoints.md)
1. [Make API calls from frontend to frontend](3-Make-API-Calls.md)
1. [Create data visualization dashboard](4-Create-Data-Viz-Dashboard.md)
1. [Create more advanced data visualizations/tools](5-Create-Advanced-Data-Viz.md)
1. [Share your work](6-Share-Your-Work.md)
1. [Feedback and thanks](7-Feedback-And-Thanks.md)

## Project Showcase
At the end of the workshopathon, you can [put a link to your work here](6-Share-Your-Work.md#share-your-work)!

## Organizers
This hackathon is a collaborative effort by the [UBC Learning Analytics](https://learninganalytics.ubc.ca/) project, [LAVA](https://blogs.ubc.ca/lava/) (Learning Analytics, Visual Analytics), and [Sauder Learning Services](https://www.sauder.ubc.ca/about-ubc-sauder/learning-services), with staff volunteers from [Faculty of Arts](https://www.arts.ubc.ca/), [Faculty of Education](https://educ.ubc.ca/), [Sauder School of Business](https://www.sauder.ubc.ca/), and the [Centre for Teaching, Learning and Technology](https://ctlt.ubc.ca/).

A big thank you to [Sauder Learning Labs](https://www.sauder.ubc.ca/about-ubc-sauder/learning-services/learning-labs) for providing a space designed to facilitate teams in using critical thinking and analytical decision making to solve real-world problems.

## Volunteers
And another big thank you to our volunteers from outside of UBC.
TODO: Add list of volunteers

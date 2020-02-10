## Table of Contents
1. [Good work!](#good-work)
1. [Give me data!](#give-me-data)
1. [Give me ideas!](#give-me-ideas)
1. [Next step](#next-step)

## Good work!
Good for you on making it this far! Since you have a lot of time remaining, try to build something a little bit more complex. We've provided data and some ideas to get you started.

## Give me data!
TODO: Add links to data

* [Course calendar data (CSV)](): contains information about all the courses offered at UBC from 2014-2019.
* [Degree requirements data (CSV)](): contains degree requirement data (co-reqs/pre-reqs, etc).
* [Grade distribution data (CSV)](): contains grade distribution data of courses at UBC.
* [Canvas activity API (JSON)](): provides your own activity data from Canvas.

You can use [`readCSV.js`](./backend/readCSV.js) to read the CSVs into the server.

## Give me ideas!

### Heatmap
Let's create some additional features for the heatmap.

#### Intermediate
* Create a dropdown that allows users to select what course they want to see the heatmap for.
* Add a legend to the heatmap showing how many posts each shade of blue represents.
* When a cell in the heatmap is hovered, display a count of the number of posts.
* Create a date range selector that will filter the data so that the heatmap displays only the data that fits within the specified date range.
* Aggregate discussion from all of your courses instead of one course.
* Create a way to show switch between showing just TA/Instructor posts and all posts.

#### Advanced
* When a cell in the heatmap is hovered or clicked, show the discussions that were posted at that date and time.
* Create a calendar view so that it is possible to navigate between weeks/months.
* Create a filter that allows users to select a specific individual to see when they post.
* Run text/sentiment analysis on the discussion posts and use this data to create a heatmap.

### Create something new
Don't want to build new features for the heatmap? That's okay!

TODO: Any more data?

#### Intermediate
* Create a degree planning tool that shows students what courses they are eligible to register for, given a list of courses in Canvas students have completed and the [degree requirments data (CSV)](TODO: LINK)
*

#### Advanced
*


## Next step
Now you're ready to go to [Step 6: Share Your Work.](6-Share-Your-Work.md)

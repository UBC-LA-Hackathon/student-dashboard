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

You can use [`readCSV.js`](./backend/readCSV.js) to read the CSVs into the server.

## Give me ideas!

### Heatmap
Let's create some additional features for the heatmap.

#### Intermediate
* Change color scheme of heatmap.
* Add a legend to the heatmap showing how many posts each shade of blue represents.
* When a cell in the heatmap is hovered, display a count of the number of posts.
* Display the discussion data using a bar chart or bubble chart instead of a heatmap.
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
* Create a degree planning tool that shows students what courses they are eligible to register for, given a list of courses in Canvas students have completed and the [degree requirements data (CSV)](TODO: LINK)
* Create a tool that allows you to compare courses that share the same information from a selected field using [course calendar data (CSV)](TODO: Link)
* Determine the courses with no prerequisites or only 1 prerequisite using the [degree requirements data (CSV)](TODO: LINK).
* Choose any course from the course calendar and display information about that course using the [course calendar data (CSV)](TODO: Link) and [degree requirements data (CSV)](TODO: LINK).

#### Advanced
* Create a visualization that shows which buildings have the highest average grade using the [course calendar data (CSV)](TODO: LINK) and the [grade distribution data (CSV)](TODO: LINK).
* Create a visualization that shows building occupation by time using the [course calendar data (CSV)](TODO: LINK).
* Determine the longest dependent course sequence, or the fastest route to a degree using the [degree requirements data (CSV)](TODO: LINK).
* Create a tool that allows you to optimize your course schedule to complete a degree using the [degree requirements data (CSV)](TODO: LINK).
* Determine the walking distance between courses in your schedule using the [course calendar data (CSV)](TODO: LINK).

## Next step
Now you're ready to go to [Step 6: Share Your Work.](6-Share-Your-Work.md)

## Table of Contents
1. [Good work!](#good-work)
1. [Give me data!](#give-me-data)
1. [Give me ideas!](#give-me-ideas)
1. [Next step](#next-step)

## Good work!
Good for you on making it this far! Since you have a lot of time remaining, try to build something a little bit more complex. We've provided data and some ideas to get you started.

## Give me data!
### Course Calendar Data
* [data](https://drive.google.com/file/d/1iDTUJBfK_HF1yET7jz5cWxgTqDS6nRRl/view?usp=sharing): contains information about all the courses offered at UBC from 2014-2019.
* [dictionary](./course-calendar-data-dictionary.md): contains details about what each column of the data represents.

### Course Prerequisites Data
* [data](https://drive.google.com/file/d/1Ey3QdAvNUjhHzxK__VYOgg08XMIO1aab/view?usp=sharing): contains degree requirement data (co-reqs/pre-reqs, etc).
* [dictionary](./degree-requirements-data-dictionary.md): contains details about what each column of the data represents.

You can use [`readCSV.js`](./backend/readCSV.js) to read the CSVs into the server.

## Give me ideas!
Some of these ideas are linked with detailed instructions, and some you'll have to figure out on your own :smiley:.

### Heatmap
Let's create some additional features for the heatmap.

#### Intermediate
* [Change color scheme of heatmap.](./_ideas/heatmap/intermediate/change-colour.md)
* [Add a legend to the heatmap showing how many posts each shade of blue represents.](./_ideas/heatmap/intermediate/add-legend.md)
* [Implement caching so that data for a course that is already fetched is not refetched unnecessarily.](./_ideas/heatmap/intermediate/implement-caching.md)
* [When a cell in the heatmap is hovered, display a count of the number of posts.](./_ideas/heatmap/intermediate/cell-hover-count.md)
* [Create a date range selector that will filter the data so that the heatmap displays only the data that fits within the specified date range.](./_ideas/heatmap/intermediate/date-range.md)
* [Aggregate discussion from all of your courses instead of one course.](./_ideas/heatmap/intermediate/aggregate-discussions.md)
* Display the discussion data using a bar chart or bubble chart instead of a heatmap.
* Create a way to show switch between showing just TA/Instructor posts and all posts.

#### Advanced
* When a cell in the heatmap is hovered or clicked, show the discussions that were posted at that date and time.
* Create a calendar view so that it is possible to navigate between weeks/months.
* Create a filter that allows users to select a specific individual to see when they post.
* Run text/sentiment analysis on the discussion posts and use this data to create a heatmap.

### Create something new
Don't want to build new features for the heatmap? That's okay!

#### Intermediate
* Create a degree planning tool that shows students what courses they are eligible to register for, given a list of courses in Canvas students have completed and the [course prerequisites data](#give-me-data).
* Create a tool that allows you to compare courses that share the same information from a selected field using [course calendar data](#give-me-data).
* Determine the courses with no prerequisites or only 1 prerequisite using the [course prerequisites data](#give-me-data).
* Choose any course from the course calendar and display information about that course using the [course calendar data](#give-me-data) and [course prerequisites data](#give-me-data).

#### Advanced
* Create a visualization that shows building occupation by time using the [course calendar data](#give-me-data).
* Determine the longest dependent course sequence, or the fastest route to a degree using the [course prerequisites data](#give-me-data).
* Create a tool that allows you to optimize your course schedule to complete a degree using the [course prerequisites data](#give-me-data).
* Determine the walking distance between courses in your schedule using the [course calendar data](#give-me-data).

## Next step
Now you're ready to go to [Step 7: Share Your Work.](7-Share-Your-Work.md)

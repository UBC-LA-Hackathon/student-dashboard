## Table of Contents

1. [Let's add some interacitivity](#lets-add-some-interactivity)
1. [Even more endpoings](#even-more-endpoints)
1. [Next step](#next-step)

## Let's add some interactivity

We've now got a heatmap displaying for a course that we've [hardcoded](https://en.wikipedia.org/wiki/Hard_coding) into our application. Our dashboard isn't very flexible however. Currently, there's no simple way to switch between courses (apart from making changes to the code). Let's implement a course dropdown menu that let's users choose between *any* courses they're enrolled in on Canvas.

## Even more endpoints

Time to put those skills from [Step 2](2-API-Endpoints.md) to use. In `server.js`, we need another endpoint (`/getCourses`) where we serve course data fetched from the Canvas API. Up to you to figure out this implementation, but don't forget to ask for help if you get stuck! (hint: `canvasAPI` object has function called `getCoursesByUser`)

## Next step

How much time do you have left?

### Lots?

Then you're ready to go to [Step 6. Create more advanced data visualizations/tools.](6-Create-Advanced-Data-Viz.md)

### Little?

Then you should go to [Step 7. Share your work.](7-Share-Your-Work.md)
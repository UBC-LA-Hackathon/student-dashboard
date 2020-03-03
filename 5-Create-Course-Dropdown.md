## Table of Contents

1. [Let's add some interacitivity](#lets-add-some-interactivity)
1. [Backend modifications](#backend-modifications)
1. [Frontend modifications](#frontend-modifications)
1. [Next step](#next-step)

## Let's add some interactivity

We've now got a heatmap displaying for a course that we've [hardcoded](https://en.wikipedia.org/wiki/Hard_coding) into our application. Our dashboard isn't very flexible however. Currently, there's no simple way to switch between courses (apart from making changes to the code). Let's implement a course dropdown menu that lets users choose between *any* courses they're enrolled in on Canvas.

## Backend modifications

Time to put those skills from [Step 2](2-API-Endpoints.md) to use. In `server.js`, we need another endpoint `/getCourses` where we serve course data fetched from the Canvas API. Up to you to figure out this implementation, but don't forget to ask for help if you get stuck! (hint: `canvasAPI` object has function called [`getCoursesByUser`](https://github.com/ubccapico/node-canvas-api/blob/master/src/getCoursesByUser.js))

What about our `/getDiscussions` endpoint? Currently, hitting that endpoint will return  discussion data for the *same* course each time (whereas we want to be able to specify *any* course id). Luckly, Express has a feature called [route parameters](https://expressjs.com/en/guide/routing.html#route-parameters) that can help. Consider the following:

```javascript
app.get('/getDiscussions/:id', (req, res)  => {
  const courseID = req.params.id
  // what should I do now?
})
```

Using the example above, see if you can figure out what to change about our old `/getDiscussions` endpoint. Remember, the goal is to fetch discussion data for the course id specified in our URL.

## Frontend modifications

So far, we've created a new endpoint that returns course data and we've also modified our discussions endpoint to accept course id as a parameter, and serve data for that specific course. Great work! Now let's make the necessary changes to our frontend to take advantage of these backend changes.

Your task is to:

1. **create a new component called `Dropdown.js` and render it in `Discussion.js` (above the heatmap)**
    * In `Dropdown.js`, fetch from `/getCourses`, filter down to just accessible courses, and add each course name as an [`<option>`](https://www.w3schools.com/tags/tag_option.asp) tag within a [`<select>`](https://www.w3schools.com/tags/tag_select.asp) tag.
1. **in `Discussion.js` add our selected course id to the state**
    * `const [selected, setSelected] = useState(null)`
    * when building out our URL for `/getDiscussions`, pass `selected` in our URL ex. `http://localhost:4001/getDiscussions/${selected}` (look familiar?)
1. **pass setSelected to `Dropdown.js` as a prop**
    * `<Dropdown handleSelect={setSelected} />` (in this case referred to as handleSelect)
    * in `Dropdown.js` when we select a new course in our dropdown, we want to call `handleSelect` with the selected course id
1. **make a loading state**
    * add `loaded` to the state in `Discussion.js` (boolean)
    * make the necessary changes so that loaded is `true` once `getDiscussions` returns and `false` otherwise
    * replace `<Heatmap timestamps={timestamps} />` in render with: `{loaded ? <Heatmap timestamps={timestamps} /> : <div>Loading ...</div>}`

> Note if we do all of the above correctly, we don't actually need to make *any* changes to our heatmap itself. Consider the flow of data: we grab Discussion data from Canvas, we pull out the timestamps from that data and finally we pass these to the heatmap. Well now that we're specifying a course when fetching discussion data, the data handed to the heatmap will always be specific to what we've set in the dropdown and that is what will get rendered. Pretty cool!

## Next step

How much time do you have left?

### Lots?

Then you're ready to go to [Step 6. Create more advanced data visualizations/tools.](6-Create-Advanced-Data-Viz.md)

### Little?

Then you should go to [Step 7. Share your work.](7-Share-Your-Work.md)

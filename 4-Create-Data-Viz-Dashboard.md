## Table of Contents
1. [You have data, now what?](#you-have-data-now-what)
1. [Discussion component](#discussion-component)
1. [Heatmap component](#heatmap-component)
1. [Next step](#next-step)

## You have data, now what?

### Discussion

In [Step 3](3-Make-API-Calls.md) you fetched discussion data from the `/getDiscussions` endpoint and set the `discussion` variable from within `Discussion`.

We've written the following `useEffect` from within `Discussion`:

```js
useEffect(() => {
  if (discussion.length > 0) {
    const discussionTimestamps = discussion
      .map(discussion => discussion.timestamp)

    setTimestamps(discussionTimestamps)
  }
}, [discussion])
```
It checks to see if discussion data has been set - if so, it extracts the timestamp property and sets the `timestamps` variable. Why do this instead of just sending the data as is to `Heatmap`? Well, we designed `Heatmap` to only rely on `timestamps`, and it's better practice to send child components just the data it requires instead of the entire kitchen sink.

Then this data is send it to `Heatmap`, which will finally render the heatmap, in the following line:

```js
return (
  <Heatmap timestamps={timestamps} />
)
```

## Heatmap component
We [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the `timestamps` [prop](https://reactjs.org/docs/components-and-props.html) here:

```js
function Heatmap ({ timestamps }) {
```

We then convert the timestamp data into a count of how many fall within the same hour and day of week, and use [D3.js](https://d3js.org/) to create the heatmap.

So there you have it. A working web application. But we're not done just yet!

## Next step
Now you're ready to go to [Step 5: Create a dropdown to switch between classes.](5-Create-Course-Dropdown.md)


## Table of Contents
1. [Anatomy of an endpoint](#anatomy-of-an-endpoint)
1. [Let's create a simple endpoint](#lets-create-a-simple-endpoint)
1. [Let's create another endpoint](#lets-create-another-endpoint)
1. [Next step](#next-step)

## Anatomy of an endpoint
We need to create some API endpoints in the backend that the frontend can use to get data. To do this, we first need to understand how the `Hello World!` message is being sent from the backend to the frontend.

In `server.js`, you'll see the following line:
```js
app.get('/', (req, res) => res.send('Hello World!'))
```
Think of `app` as the server, which has a method `get`. This method takes two inputs.

The first input specifies the API endpoint path. In this case, the path is `/`, which means that when you navigate to http://localhost:4001/, the frontend will hit this endpoint.

The second input is more interesting, as it is a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that takes two inputs, `req` and `res`, which are shorthand for `request` and `response`. `res` is the response that we want to send to the frontend - in this case, we're sending `Hello World!`.

So, in summary, when you navigate to http://localhost:4001/, the server will determine that the endpoint requested is `/`, and respond with the `Hello World!` message.

## Let's create a simple endpoint
Since in [Step 1](1-Canvas-API-Token.md) we already set up a Canvas API call, let's set up an endpoint that will take the result of the `getSelf` call and send it to the frontend.

We'll specify the path, which is the first input to `app.get()`, as `/getSelf`. The tricky part is to think about what should happen in the second input.

```js
app.get('/getSelf', /* what goes in here? */)
```

It's actually quite similar to the previous endpoint we examined. We'll need to pass in a callback function as follows:

```js
app.get('/getSelf', async (req, res) => {
  // we need to now make a call to the Canvas API,
  // wait for the response, then send the result to the frontend
  const self = await canvasAPI.getSelf()
  res.json(self)
})
```

Copy the above code and paste it below `// Make endpoint for getSelf here`.

Now, when the `/getSelf` endpoint is hit by navigating to http://localhost:4001/getSelf, the server knows to make a request to the Canvas API for information about the user, and once the information arrives, sends it to the frontend. You should see information about yourself when you navigate to http://localhost:4001/getSelf.

The `async` and `await` keywords are relatively new additions in JavaScript that make it nicer to work with [concurrent code](https://en.wikipedia.org/wiki/Concurrency_(computer_science)). Read more about [`async await`](https://expeditedsecurity.com/blog/javascript-equals-async-await/).

Notice that instead of using `res.send`, we're using [`res.json`](https://expressjs.com/en/api.html#res.json). Instead of sending text, we're instead sending the data back in [JSON](https://en.wikipedia.org/wiki/JSON) format that Canvas API returns to the frontend.

## Let's create another endpoint
This endpoint will hit the Canvas Discussions API to get the discussion data the frontend requires to create the heatmap.

Under `// Make endpoint for getDiscussions here`, go ahead and create an endpoint for `/getDiscussions`.

At the top of the file, you'll see that we're provided two functions, `getDiscussions` and `flattenTopicAndReplies`.

`getDiscussions` takes as input a Canvas course id. Open [Canvas](https://canvas.ubc.ca/) and click on a course, and you'll see the URL is something like `https://canvas.ubc.ca/courses/4271`. The number at the end, in this case `4271`, is the course id.

`flattenTopicAndReplies` modifies the nested data returned by `getDiscussions` by converting it to a structured format that is better suited for the heatmap.

Your task is to call `getDiscussions` with the Canvas id, `await` the response, call `flattenTopicAndReplies` on the response, then send it back to the frontend.

## Next step
Now you're ready to go to [Step 3: Make API calls from frontend to backend.](3-Make-API-Calls.md)
## Table of Contents
1. [Anatomy of an endpoint](#anatomy-of-an-endpoint)
1. [Let's create a simple endpoint](#lets-create-a-simple-endpoint)
1. [Let's create your own endpoint](#lets-create-your-own-endpoint)
1. [Next step](#next-step)

## Anatomy of an endpoint
We need to create some API endpoints in the backend that the frontend can use to get data.

To do this, we first need to understand how the `Hello World!` message is being sent from the backend to the frontend.

In `server.js`, you'll see the following line:
```js
app.get('/', (req, res) => res.send('Hello World!'))
```
Think of `app` as the server, which has a method `get`. This method takes two inputs.

The first input specifies the API endpoint path. In this case, the path is `/`, which means that when you navigate to http://localhost:4001/, the frontend will hit this endpoint.

The second input is more interesting, as it is a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) that takes two inputs, `req` and `res`, which are shorthand for `request` and `response`. We'll deal with `req` later. `res` is the response that we want to send to the frontend - in this case, we're sending `Hello World!`.

So in summary, when you navigate to http://localhost:4001/, the server will determine that the endpoint requested is `/`, and respond with the `Hello World!` message.

## Let's create a simple endpoint
Since in [Step 1](1-Canvas-API-Token.md) we already set up a Canvas API call, let's set up an endpoint that will take the result of the `getSelf` call and send it to the frontend.

We'll specify the path (which is the first input to `app.get()`), as `/getSelf`. The tricky part is to think about what should happen in the second input.

```js
app.get('/getSelf', /* what goes in here? */)
```

It's actually quite similar to the previous endpoint we examined. We'll need to pass in a callback function as follows:

```js
app.get('/getSelf', (req, res) => {
  // we need to now make a call to the Canvas API and send the result to the frontend
  canvasAPI.getSelf()
    .then(self => res.send(self))
})
```

Now, when the `/getSelf` endpoint is hit by navigating to http://localhost:4001/getSelf, the server knows to make a request to the Canvas API for information about the user, and once the information arrives, sends it to the frontend.

## Let's create your own endpoint
Okay, now it's your turn to create your own endpoint.

TODO. Depends on what data students need to build whatever we want them to build.

## Next step
Now you're ready to go to [Step 3: Make API calls from frontend to frontend.](3-Make-API-Calls.md)
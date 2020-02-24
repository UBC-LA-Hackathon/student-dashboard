## Table of Contents
1. [How to make an API call from frontend](#how-to-make-an-api-call-from-frontend)
1. [Create your own API call](#create-your-own-api-call)
1. [Next step](#next-step)

## How to make an API call from frontend
In the previous steps, we hit the backend API endpoints we built by navigating to a specific URL, like http://localhost:4001/getSelf. Generally in web applications, we want to be able to make multiple requests to multiple endpoints _while on the same URL_. To do this, we'll have to make some modifications to `App.js` in the frontend.

Let's first start up our frontend app (unless you've already started it). Navigate using terminal into `frontend`, and then type `npm start`. You should see a `Welcome to the Workshopathon, attendee!` message appear in the browser.

Open up `App.js`, and you'll see these lines:

```js
return (
    <div className='App'>
      <Welcome />
      <Discussion />
    </div>
  )
}
```

`App` is simply a React component that is responsible for creating two child components `Welcome` and `Discussion`.

### `Welcome.js`

Let's now open up `Welcome.js` in the `component` folder.

```js
function Welcome () {
  const [self, setSelf] = useState('attendee')

  // add useEffect here for self

  return (
    <p>Welcome to the Workshopathon, {self}!</p>
  )
}
```

Notice that there's a variable `self` that is currently set to `attendee` by the [`useState` hook](https://reactjs.org/docs/hooks-state.html). Your task is to call the `setSelf` function with your name from Canvas so that it displays in the browser.

So we need to:

1. Make a call to the `/getSelf` endpoint in the backend that we set up in [Step 2](2-API-Endpoints.md).
1. Take this data and update the `self` variable.

To make an API call from React, we'll have to use the [`useEffect` hook](https://reactjs.org/docs/hooks-effect.html). `useEffect` is how we perform [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) in React. Inside of `useEffect`, we'll use the appropriately named [`fetch` function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to "fetch" our data from the backend.

Add the following code below the comment `// add useEffect here for self` is in `App.js`
```js
useEffect(() => {
  fetch('http://localhost:4001/getSelf')
    .then(res => res.json())
    .then(data => setSelf(data.name))
}, [])
```
There's a bit to unpack here. `useEffect` takes two inputs.

The first input is our "effect" function, which is where the data fetching and setting of the variable `self` with data from the `getSelf` endpoint happens.

The second parameter is `[]`, an empty array - this just tells React to only perform this data fetching _once_, on first page load.

React is clever and will take care of displaying our name once `self` is set. Save `App.js`, and you should see `Welcome to the Workshopathon, {Your name from Canvas here}!`.

## Create your own API call
In the previous step, you've learned how to make a basic API call using React and `fetch` in `Welcome`.

### `Discussion.js`
Now let's try making the same call from within `Discussion`.

Hit the `/getDiscussions` endpoint you created in the previous step, then set the `discussion` variable with the result.

If you do this correctly, you should see a heatmap displayed on the browser.

## Next step
Now you're ready to go to [Step 4: Create data visualization dashboard.](4-Create-Data-Viz-Dashboard.md)

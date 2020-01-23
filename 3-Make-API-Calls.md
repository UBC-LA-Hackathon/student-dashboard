## Table of Contents
1. [How to make an API call from frontend](#how-to-make-an-api-call-from-frontend)
1. [Next step](#next-step)

## How to make an API call from frontend
In the previous steps, we hit the backend API endpoints we built by navigating to a specific URL, like http://localhost:4001/getSelf. Generally in web applications, we want to be able to make multiple requests to multiple endpoints _while on the same URL_. To do this, we'll have to make some modifications to `App.js` in the frontend.

Let's first start up our frontend app (unless you've already started it). Navigate using terminal into `frontend`, and then type `npm start`. You should see a `Welcome to the Workshopathon, attendee!` message appear in the browser.

Open up `App.js`, and you'll see these lines:

```js
function App () {
  const [self, setSelf] = useState(undefined)

  return (
    <div className='App'>
      <p>Welcome to the Workshopathon, {self ? self.name : 'attendee'}!</p>
    </div>
  )
}
```

Notice that there's a `self` that is currently set to `undefined`. When `self` is `undefined`, then `attendee` is displayed. Your first task is to make `self` defined so that your name from Canvas is displayed in the browser.

So we need to:

1. Make a call to the `/getSelf` endpoint in the backend that we set up in [Step 2](2-API-Endpoints.md).
1. Take this data and update the `self` variable.

React is clever and will take care of displaying our name once the `self` is set.

To make an API call from React, we'll have to use the [`useEffect` hook](https://reactjs.org/docs/hooks-effect.html). `useEffect` is how we perform [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) in React. Inside of `useEffect`, we'll use the appropriately named [`fetch` function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to "fetch" our data from the backend.

```js
useEffect(() => {
    fetch('http://localhost:4001/getSelf')
      .then(res => res.json())
      .then(data => setSelf(data))
  }, [])
```
There's a bit to unpack here. `useEffect` takes two inputs here.

The first input is the meat of the implementation, our "effect" function, which is where the data fetching and setting of the `self` variable with data from the `getSelf` endpoint happens.

The second parameter is `[]`, an empty array - this just tells React to only perform this data fetching _once_, on first page load.

## Next step
Now you're ready to go to [Step 4: Create data visualization dashboard.](4-Create-Data-Viz-Dashboard.md)
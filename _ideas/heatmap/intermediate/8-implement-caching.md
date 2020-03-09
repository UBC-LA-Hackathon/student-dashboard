
## Heatmap - Intermediate

## Task

Implement caching so that data for a course that is already fetched is not refetched unnecessarily.

## Overview

Caching can be implemented in a variety of different ways. We recommend taking advantage of React's [Custom Hooks](https://reactjs.org/docs/hooks-custom.html) feature, to contain your implementation and make it reusable throughout your application.

Adding caching to our application will make visible performance improvements. Currently, if we were to switch from **course A** to **course B** back to **course A** our application would make three time-consuming API calls to Canvas. What we want is to temporarily store data when we receive it, and check what data we've already stored before making new calls to the API.

## Steps

1. Create a new directory in `/src` called `/hooks`, create a file `useFetchData.js` within it. Import your new Custom Hook in `Discussion.js.`

1. Let this new Hook handle calls to the API (or retrievals from cache) and return the data to you.

    ```javascript
    // const discussionDataURL = ...
    const [loaded, discussionData] = useFetchData(discussionDataURL)
    ```

    In the example above we're also returning a boolean to indicate whether or not data has loaded. Use the returned values `loaded` and `discussion` where desired/necessary in [Discussion](../../../frontend/src/components/Discussion.js).

1. Implement caching behaviour in `useEffect` within `useFetchData.js`. You may find JavaScript's [Map object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) useful for storing cache data. You want `useEffect` to run each time a new URL is handed to `useFetchData`, then check your cache data structure for data matching that URL, return that data if found, otherwise make a request to that URL and store it in the cache for future use.

## Heatmap - Intermediate

## Task
Aggregate discussion from all of your courses instead of one course.

## Overview
Right now you'd hard-coded your Canvas course id in [server](../../../backend/server.js) in the call to `getDiscussions`. Instead of hard-coding this course id, we'll use [`getCoursesByUser`](https://github.com/ubccapico/node-canvas-api/blob/master/src/getCoursesByUser.js) to retrieve all of the Canvas courses you have access to. `getCoursesByUser` takes as input a Canvas user id, which you can hard-code or be extra fancy by and call `getSelf` to retrieve (this is up to you). 

## Steps
1. Retrieve or hard-code your Canvas user id.
1. Call `getCoursesByUser` with your Canvas user id. 
1. Extract the course ids from the response.
1. Now you should have an array of course ids. For every course id, you have to call `getDiscussion`.
1. Once the discussions for every course is gathered, call `flattenTopicAndReplies` on every course discussion.
1. Then flatten everything. This is confusing, so here's some pseudocode that may explain. 
    ```js
      const courseIds = [1234, 5678, 9012]
      // then call getDiscussion on every course id
      const discussions = [
        [/* discussion data from course 1234*/],
        [/* discussion data from course 5678*/],
        [/* discussion data from course 9012*/]
      ]
      // then call `flattenTopidAndReplies
      const flattenedDiscussion = [
        [/* flattened discussion data from course 1234*/],
        [/* flattened discussion data from course 5678*/],
        [/* flattened discussion data from course 9012*/]
      ]
      // then call flatten
      const flattend = [/* look its just one array now, instead of an array of arrays */]
    ```
1. Finally, send this data to frontend.

If you're enrolled in many courses and your courses have tons of discussions, this will take a while. It may even fail because you run into [rate-limiting issues](https://community.canvaslms.com/docs/DOC-8381-api-rate-limiting). If this happens, try taking a subset of the courses you're enrolled in. For instance, if you have 10 Canvas course ids, try just calling `getDiscussion` on 2 or 3 of them.
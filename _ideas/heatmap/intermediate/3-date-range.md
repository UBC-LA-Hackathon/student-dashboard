## Heatmap - Intermediate

## Task
Create a date range selector that will filter the data so that the heatmap displays only the data that fits within the specified date range.

## Overview
There are two ways to approach this. The first is to take the data that the frontend receives and filter it using the date range. The second is to modify the API requests made to Canvas from the backend to only fetch discussion data between the specified date range. 

We recommend the first way because it's much easier to implement, since all the data that you need is already available. The second way is argubly the "better" implementation, especially if a course has a lot of discussion data, since it cuts down on the amount of data being transferred.

## Steps
1. First add the start and end date range selector. [Airbnb](https://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default) has open-sourced a nice date range React component (but feel free to use some other component - or if you're feeling really ambitious, [build your own](https://blog.logrocket.com/react-datepicker-217b4aa840da/)). We would recommend putting these selectors into [Discussion](../../../frontend/src/components/Discussion.js)
1. Create a way to store the selected start and end dates (using [useState](https://reactjs.org/docs/hooks-state.html)).
1. If the selected date state changes, filter the timestamp data according to the set dates inside [useEffect](https://reactjs.org/docs/hooks-effect.html)e. (Hint: Create a _new_ useEffect, since setting dates is a new side effect).
1. Set the timestamp data with this filtered data.
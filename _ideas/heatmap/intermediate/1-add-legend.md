## Heatmap - Intermediate

## Task
Add a legend to the heatmap showing how many posts each shade of blue represents.

## Overview
To add a legend to the heatmap, you'll have to first look into how the [`Heatmap`](../../../frontend/src/components/Heatmap.js) component is implemented.

The heatmap itself is created using [D3.js](https://d3js.org/), with the bulk of the implementation happening inside the `useEffect` function. You may find looking at [this example](http://bl.ocks.org/tjdecke/5558084) helpful, as it includes a legend.

## Steps
1. You'll need to calculate the range of `count`s that fall within each colour, based on the `maxCount` and the number of `colours` that's already defined. For example, if the maximum count for a given day of week and time is 8, and there are 9 colours, we would want 0-1 counts to fall within the first colour, 1-2 counts to fall within the second colour, and so forth.
1. Then you'll use `d3` to display every colour as a rectangle. The code to do this should be similar to how the heatmap cells were placed.
1. Finally, you'll use `d3` to place text representing what counts each rectangle represents.

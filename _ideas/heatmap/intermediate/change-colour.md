## Heatmap - Intermediate

## Task
Create a dropdown that allows users to change the colour scheme of the heatmap.

## Overview
The colours of the heatmap are defined in [`Heatmap`](../../../frontend/src/components/Heatmap.js) on line 17 as follows:
```js
const colours = ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b']
```
The values in the array are [hexademical HTML color codes](https://htmlcolorcodes.com/) and were copied from [colorbrewer](http://colorbrewer2.org/#type=sequential&scheme=Blues&n=9).

## Steps
1. Create a dropdown React component that will hold the colour options.
    * This component should take as prop a function (call it `handleColourSelection`) that will be used to [lift the selected colour up](https://reactjs.org/docs/lifting-state-up.html) to `Discussion`.
    * This component is where you should also define the arrays of colours that correspond to the colours in the dropdown. You can use [colorbrewer](http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3) to generate the colours.
1. Import this component into [`Discussion`](../../../frontend/src/components/Discussion.js).
1. Use `useState` to keep track of what colour is currently selected.
1. Create the function `handleColourSelection` that sets the currently selected colour state when the dropdown is changed.
1. Pass `handleColourSelection` down to the dropdown component as a prop.
1. Pass the selected colour as a prop to `Timestamp`. It is likely easiest to pass the array of hex values.
1. In `Timestamp`, destructure the colour prop and set it as the colour for the heatmap.

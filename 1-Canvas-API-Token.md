## Generate your Canvas access token
1. Log into Canvas at [canvas.ubc.ca](http://canvas.ubc.ca/). Click _Account_ in the left menu, and then click _Settings_.
![Setting](https://learninganalytics.ubc.ca/files/2019/05/Screen-Shot-2019-05-22-at-3.25.40-PM.png)
1. Scroll to _Approved Integration_ and click _+ New Access Token_.
![New Access Token](https://learninganalytics.ubc.ca/files/2019/05/Screen-Shot-2019-05-22-at-3.26.33-PM.png)
1. Fill in the _Purpose_ field. For added security, set an expiry date for your token. This way, if you accidentally share your token or your token is stolen, at the very least it won’t be valid forever.
1. Click _Generate Token_. Now copy your freshly generated token.

> Never share your token with anyone. If you think your token may have been exposed (for example, by accidentally posting it to GitHub), delete your token from Canvas right away. Instructions for creating and deleting access tokens as a student are [available on the Canvas Guides](https://community.canvaslms.com/docs/DOC-16005-42121018197).

## Put your token into the backend `server.js`
1. Create a `.env` file inside the `backend` folder. It's easiest to create this file using a code editor like [VSCode](https://code.visualstudio.com/).
![env](https://user-images.githubusercontent.com/8836578/72940819-7873c400-3d67-11ea-8184-97c8cea5b523.png)
1. Copy the snippet below into `.env`.
    ```
    CANVAS_API_TOKEN=
    CANVAS_API_DOMAIN=https://ubc.instructure.com/api/v1
    ```
1. Paste your token into the `CANVAS_API_TOKEN=` field.
1. Save `.env`.

## Create an API call to Canvas from within `server.js`
To ensure that you are able to make API calls to Canvas, let's create a call and print the result.

Navigate to `server.js` in `backend` folder, and you'll see the following line:

```js
const canvasAPI = require('node-canvas-api')
```

This line imports a Canvas API object that comes with a [bunch of useful functions](https://github.com/ubccapico/node-canvas-api/tree/master/src). The one we want to use is the simplest: `getSelf`.

So add the following line:

```js
canvasAPI.getSelf()
  .then(self => console.log(self))
```

Then run the `server.js` by typing `npm start` in terminal. If your server is currently running, you'll want to kill it using `Control + c`, then restart the server.

You should receive response back that looks something like this:
```js
{
  id: 50,
  name: 'Justin Lee',
  created_at: '2017-07-12T10:38:49-07:00',
  sortable_name: 'Lee, Justin',
  short_name: 'Justin Lee',
  avatar_url: 'https://ubc.instructure.com/images/messages/avatar-50.png',
  locale: null,
  effective_locale: 'en-CA',
  permissions: { can_update_name: false, can_update_avatar: true }
}
```
**If you encounter an error, please ask for help!**

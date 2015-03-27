# sl-web-collab

This is just a prototype to show the implementation of collaboration in web activites using socket.io. <br>
* `server/server.js` is a simple node server running a socket.io instance. <br>
* `webCollab.activity/lib/sugar-web/collab.js` an api to be made part of **Sugar Web Activity Library** to implement collaboration in web activities.

## Running the activity

### Start the server
`cd server `
<br>`npm install`
<br>`node server.js`

### Run Activity
Just open the **webCollab.activity/index.html** in a modern web browser

***or***

 Copy **webCollab.activity** to `sugar-build/activities` and run the activity from within the sugar-build instance. 

### To Do
 * Expanding **collab.js** to cater deifferent need of collaboration 
 * Develop a **neighbourhood** view on the lines of sugar python
 * Providing features like inviting and notification to users as part of neighbourhood
 * Using streaming modules of node.js and socket.io to allow sharing of media and files

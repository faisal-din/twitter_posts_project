## Code Breakdown

## 1. Controller: controllers/postsController.js

The postsController.js file handles the logic for creating, reading, updating, and deleting posts.

## 2. Middleware: middlewares/methodOverride.js

The methodOverride.js file sets up method override for handling forms that need to send PATCH and DELETE requests.

## 3. Routes: routes/postsRoutes.js

The postsRoutes.js file defines each route and maps it to the appropriate controller function.

## 4. Main Server File: app.js

The app.js file initializes the Express application, configures middleware, sets up views, and mounts the routes.

## Views (EJS Templates)

Views folder contains EJS templates (index.ejs, new.ejs, show.ejs, and edit.ejs).

## Public Folder

It contains style.css file.

P.s: This setup allows you to serve static assets like CSS and JavaScript files easily.

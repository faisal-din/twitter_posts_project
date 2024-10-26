## project-root/

│
├── controllers/
│ └── postsController.js # Handles all logic for posts (CRUD operations)
│
├── middlewares/
│ └── methodOverride.js # Middleware for method override
│
├── models/
│ └── posts.js # Posts data or database schema (for a future database connection)
│
├── routes/
│ └── postsRoutes.js # Route definitions for posts
│
├── views/
│ ├── index.ejs # Display all posts
│ ├── new.ejs # Create new post form
│ ├── show.ejs # Show post details
│ └── edit.ejs # Edit post form
│
├── public/  
│ └── style.css # Public CSS file
│
├── app.js # Main server setup file
├── package.json
└── README.md

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

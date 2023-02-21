# mern-with-redux
MERN Stack Authentication App with MongoDB, Node, Express, React, Redux, and Redux Toolkit Query

This is a full-stack web application built with the MERN (MongoDB, Express, React, Node) stack. It is an authentication app with routes for user authentication, posting a quote, and deleting a quote if the authentication is successful. The frontend is built with React, Redux, and Redux Toolkit Query, while the backend is built with Node, Express, and MongoDB.

Getting Started

To get started with the project, follow these steps:

Clone the repository: git clone https://github.com/<your_username>/mern-auth-app.git
Change directory to the project folder: cd mern-stack
Install the dependencies: npm install
Start the server: npm start
Navigate to http://localhost:3000 in your browser
Backend

The backend of the application is built with Node.js and Express, with MongoDB as the database. The following are the routes available:

/api/user/signup - Allows a new user to sign up and creates an account in the database.
/api/user/login - Allows a registered user to login to their account.
/api/quote - Allows a user to post a quote.
/api/quote/:id - Allows a user to delete a quote if the authentication is successful.
The backend uses JSON Web Tokens (JWT) for authentication and authorization. When a user logs in, a token is created and sent to the client. The client must include this token in the headers of subsequent requests to access protected routes. If the authentication is successful, the user can delete a quote.

Frontend

The frontend of the application is built with React, Redux, and Redux Toolkit Query. The application has the following pages:

/login - Allows a user to log in to their account.
/signup - Allows a user to create a new account.
/ - Homepage where a user can see their quotes.
The frontend is protected with PrivateRoutes, which only allow access to authenticated users. The frontend uses Redux to manage the application state and Redux Toolkit Query to handle API requests.

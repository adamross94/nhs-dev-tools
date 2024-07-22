---
title: Express.js
sidebar_label: Express.js
sidebar_position: 7
---

[Express.js](https://expressjs.com/) is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building single-page, multi-page, and hybrid web applications. Developed in 2010, Express.js has become one of the most popular web frameworks for Node.js due to its simplicity and performance.

## Why Express.js for the NHS?

Express.js is ideal for the NHS due to its simplicity and the robust ecosystem around Node.js. It supports rapid development of both web and API applications, which is crucial for handling healthcare data effectively. Benefits include:

- **Rapid development**: Its minimalist approach allows for quick setup and deployment of web services.
- **Scalability**: Express.js can handle high traffic loads, essential for NHS systems serving large populations.
- **Flexibility**: It integrates well with various databases and templating engines, accommodating diverse NHS project requirements.
- **Large community**: Extensive documentation and community support ensure quick problem-solving and knowledge sharing.
- **Middleware ecosystem**: A wide range of middleware packages can enhance security, logging, and other critical features for healthcare applications.

## Getting Started with Express.js

Setting up an Express.js application is straightforward, thanks to Node.js.

### 1. Prerequisites

Before you begin, ensure that you have the following tools installed on your system:

- Node.js: Download and install Node.js from nodejs.org. This will also install npm, the Node package manager.
- Git: While not strictly necessary, having Git installed can help with version control and managing your codebase. You can download and install Git from git-scm.com.

### 2. Setting Up Your Project

Create a new directory for your project and navigate into it:

```sh
mkdir my-nhs-express-app
cd my-nhs-express-app
```

Initialize a new Node.js project:

```sh
npm init -y
```

This command will create a package.json file with default settings, which is necessary for managing your project's dependencies.

Install Express.js:

```sh
npm install express
```

This will add Express.js to your project and update the package.json file accordingly.

### 3. Creating Your Express.js Server

In your project's root directory, create a file named app.js:

```sh
touch app.js
```

Open app.js in your preferred text editor and add the following code:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello NHS!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```
This code does the following:

- Imports the Express module.
- Creates an instance of an Express application.
- Defines a route for the root URL (/) that sends a "Hello NHS!" message as the response.
- Sets the application to listen on a specified port (default is 3000) and logs a message to the console when the server is running.

### 4. Running Your Server

To start your server, run the following command in your terminal:

```sh
node app.js
```

You should see a message in your terminal indicating that the server is running:

```sh
Server running on port 3000
```

Open your web browser and navigate to http://localhost:3000. You should see the message "Hello NHS!" displayed on the page.

## Core Concepts in Express.js

Understanding the following core concepts will help you effectively utilize Express.js for building web applications:

### Middleware

Middleware functions are essential building blocks in Express.js. They are functions that have access to the request object (`req`), the response object (`res`), and the `next` middleware function in the application’s request-response cycle. Middleware can perform various tasks such as:

- Executing code.
- Making changes to the request and response objects.
- Ending the request-response cycle.
- Calling the next middleware function in the stack.

Middleware can be used for tasks like logging, authentication, parsing request bodies, and much more. They can be added to the application using the `app.use()` method or to specific routes using the route methods.

```javascript
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});
```

### Routing

Routing in Express.js allows you to define the endpoints at which requests can be made to your application. Each endpoint can handle specific HTTP methods (GET, POST, PUT, DELETE, etc.). Routing enables you to create routes for different parts of your application and manage them easily. You can define routes using the `app.get()`, `app.post()`, and other route methods.

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/submit', (req, res) => {
  res.send('Data received');
});
```

### Error Handling

Proper error handling is crucial in any application to manage unexpected issues gracefully. In Express.js, error handling can be implemented using middleware specifically designed to catch and handle errors. An error-handling middleware function has four arguments: err, req, res, and next. You can define a centralized error-handling middleware to manage different types of errors in a consistent way.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

These core concepts—middleware, routing, and error handling—form the foundation of building robust and maintainable applications using Express.js.

## Example of Express.js in Action

Here are a few examples of projects and applications that utilize Express.js:

- **[Trello](https://trello.com/)**: The project management application uses Node.js with Express.js on its server side. The platform manages a large number of concurrent users and tasks, relying on Express.js for handling HTTP requests, managing routes, and ensuring smooth real-time updates.
- **[LinkedIn](https://uk.linkedin.com/)**: The professional networking site has used Express.js for its mobile app server. By leveraging Express.js, LinkedIn can efficiently handle the mobile API requests, manage user authentication, and provide a seamless experience for its mobile users.
- **[MyFitnessPal](https://www.myfitnesspal.com/)**: This popular fitness and nutrition tracking app uses Express.js as part of its backend stack. Express.js helps manage the API endpoints that serve the mobile and web applications, handle user data, and integrate with various third-party services.
- **[Uber](https://www.uber.com/gb/en/)**: The ride-sharing giant incorporates Express.js in parts of its backend infrastructure. Express.js assists in handling requests from the app, managing routes for various services, and processing data in real-time to provide accurate and timely information to users.

## Further Learning Resources

- [Express.js Official Documentation](https://expressjs.com/en/starter/installing.html): The best place to learn everything about Express.js.
- Learn Express.js: A course offered by Codecademy that covers the basics to advanced topics.

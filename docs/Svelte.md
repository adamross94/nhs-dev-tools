---
title: Svelte
sidebar_label: Svelte
sidebar_position: 11
---

[Svelte](https://svelte.dev/) is a modern JavaScript framework for building user interfaces. Unlike traditional frameworks, Svelte shifts much of its work to compile-time rather than run-time, resulting in smaller bundle sizes and faster performance. Created by Rich Harris in 2016, Svelte has gained popularity for its simplicity and efficiency.

## Why Svelte for the NHS?

Svelte offers several advantages that make it suitable for NHS projects:

- **Performance**: Svelte's compile-time approach results in faster, more efficient applications, crucial for healthcare systems where speed can impact patient care.
- **Simplicity**: With its intuitive syntax and minimal boilerplate, Svelte reduces the learning curve for developers, potentially speeding up project timelines.
- **Accessibility**: Svelte emphasizes accessibility features, aligning with NHS digital inclusion goals.
- **Small bundle size**: Lighter applications mean faster load times, especially beneficial for users in areas with slower internet connections.
- **Reactive by default**: Svelte's built-in reactivity simplifies state management, useful for handling complex healthcare data.

## Getting Started with Svelte

Setting up a Svelte project is straightforward and only requires a few steps.

### 1. Pre-requisites

Before you begin, make sure that Node.js is installed on your computer. Node.js is essential as it includes npm (Node Package Manager), which you'll use to manage the libraries and run scripts. You can check if Node.js is installed by running node -v in your terminal. If it's not installed, download and install it from nodejs.org.

### 2. Create a New Svelte Project

To set up a new Svelte project, you'll use degit, a simple project scaffolder. degit makes copies of git repositories, allowing you to start new projects quickly. Here’s how to use it to create your Svelte application:

```dash
npx degit sveltejs/template my-nhs-svelte-app
```

This command creates a new directory called my-nhs-svelte-app containing a minimal Svelte template.

### 3. Navigate into Your Project Directory

Change into your project directory with:

```bash
cd my-nhs-svelte-app
```

### 4. Install Dependencies

```bash
npm install
```

This command looks at the package.json file and installs the required libraries for your Svelte application.

### 5. Start the Development Server

To see your Svelte application in action, start the development server using:

```bash
npm run dev
```

This script will compile your Svelte app and serve it locally. It also watches for any changes you make to the source files and automatically rebuilds the app, which is helpful during development.

### 6. View Your Application

Open your web browser and go to http://localhost:5000. You should see your new Svelte app running. This is the default port used by the Svelte development server, but you can configure it to use a different one if necessary.

## Core Concepts in Svelte

To effectively harness the capabilities of Svelte in your web development projects, it is essential to grasp a few core concepts that underpin how Svelte operates. These include components, reactivity, and stores, each playing a pivotal role in simplifying the development process.

### Components

At the heart of Svelte's architecture are components. A Svelte component is a reusable, self-contained block of code that integrates HTML, CSS, and JavaScript[^1]. These components help encapsulate functionality and styles specific to that segment of your application, promoting code reusability and modularity. For instance, a Button component in Svelte might encapsulate all the logic, styles, and markup needed for a button's functionality, which can then be reused wherever a button is needed in the app.

### Reactivity

Reactivity in Svelte is designed to be simple and intuitive. Unlike other frameworks that require specific functions or APIs to track changes and update the DOM, Svelte automatically updates the DOM when variables change. This is achieved through a straightforward assignment. When you assign a new value to a variable that’s tied to the DOM, Svelte's compiler, which runs during build time, sets up the necessary subscriptions and updates the DOM automatically whenever the data changes. This leads to less boilerplate and a more declarative approach to data binding.

### Stores

For more complex state management needs, Svelte offers stores. A store is a container that holds state in a way that can be made reactive and accessible across multiple components. Svelte provides several types of stores, but the most commonly used is the writable store. It allows components to subscribe to state changes and reactively update when the state is modified. You can create a store using writable(value), and components that use this store will re-render reactively whenever the store’s value is updated[^2]. This is particularly useful for state that needs to be shared across many parts of the application, such as user authentication status or theme settings.

## Examples of Svelte in Action

Below is a compilation of projects built with Svelte:

- **[Svelte Symptom Checker Example](https://github.com/infermedica/svelte-symptom-checker-example)**: This is an exemplary symptom checking app built with Svelte using the Infermedica API. It demonstrates how Svelte can be used to create a triage and pre-diagnosis application.
- **[Chess.com](https://www.chess.com/)**: Chess.com is one of the world's largest online chess platforms, offering various features including live chess games, puzzles, tutorials, and tournaments. While the entire platform isn't built with Svelte, it utilizes Svelte for certain components or services.
- **[Evidence.dev](https://evidence.dev/)**: Evidence.dev is an open-source business intelligence tool that combines SQL and Markdown to create data-driven documents and dashboards. It uses Svelte as part of its frontend framework.
- **[Apple Music](https://music.apple.com/us/browse)**: The web UI of Apple Music benefits significantly from Svelte’s capabilities that help to enhance the responsiveness and fluidity of the Apple Music interface, managing state and UI transitions more efficiently. This is particularly advantageous for dynamic content like playlists, music streaming, and user interactions.

## Further Learning Resources

- [Svelte Official Documentation](https://svelte.dev/docs/introduction): The best place to start learning Svelte.
- Svelte Tutorial: An interactive tutorial that covers all the basics.

[^1]: Anonymous. "Getting started with Svelte" *Mozilla*, [Link](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
[^2]: Elijah, Asaolu. "Svelte vs. React: Which should you choose for your project?" *hygraph*, [Link](https://hygraph.com/blog/svelte-vs-react)
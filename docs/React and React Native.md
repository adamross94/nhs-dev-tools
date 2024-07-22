---
title: React and React Native
sidebar_label: React & React Native
sidebar_position: 5
---

React and React Native are both popular JavaScript-based technologies developed by Meta, each serving distinct purposes. [React](https://react.dev/) is a JavaScript library designed for building user interfaces for web applications, utilizing HTML, CSS, and JavaScript to create interactive experiences for web browsers[^1][^2]. It employs a virtual DOM to efficiently render web pages and is primarily used for front-end web development. React's focus is on creating dynamic web applications, leveraging its ability to update and render the UI quickly in response to data changes[^3].

On the other hand, [React Native](https://reactnative.dev/) is a framework for building cross-platform mobile applications, allowing developers to create native mobile apps for both iOS and Android using JavaScript. Unlike React, which uses HTML tags, React Native employs specific components like View, Text, and Image that map to native UI elements. It uses native UI components instead of web components and is designed specifically for mobile app development. Additionally, React Native uses a JavaScript object for styling, which differs from the standard CSS used in React. The interaction with native components, different navigation libraries, and the need for simulators and physical devices for testing are some of the key distinctions between React and React Native. Despite these differences, both share many core concepts, such as using the same core React library, component-based architecture, JavaScript, JSX for templating, and similar state management techniques and lifecycle methods[^4][^5].

## Why React and React Native for the NHS?

React and React Native are well-suited for healthcare applications due to their component-based architecture, which allows for reusable code and modular designs. Benefits include:

- **Cross-platform compatibility**: React Native allows developers to target both iOS and Android platforms with a single codebase, reducing development time and costs for healthcare applications[^6]. This ensures consistent user experiences across various devices, which is crucial for healthcare apps serving a wide audience.
- **Faster development and iteration**: React Native's reusable components and hot reloading functionality accelerate healthcare app development[^6]. This allows for quicker iterations and faster time-to-market for healthcare solutions.
- **Integration capabilities**:
  - **Electronic Health Record (EHR) integration**: React Native apps can seamlessly integrate with existing EHR systems, enabling efficient access to patient data and improving care coordination[^7][^10][^11].
  - **Wearable device integration**: React Native facilitates integration with fitness trackers and medical sensors, allowing real-time collection and monitoring of patient health data[^6].
- **Telemedicine features**: React Native is well-suited for implementing video consultation and remote monitoring capabilities, enabling virtual visits between patients and healthcare professionals[^6].
- **Data security and compliance**: React Native has the ability to build healthcare apps compliant with regulations such as HIPAA and GDPR[^8], allowing for the implementation of robust security measures to protect sensitive patient data.
- **Performance and user experience**: React Native's high performance and ability to create user-friendly interfaces make it an excellent choice for healthcare applications that require smooth operation and intuitive design.[^9]

## Getting Started with React

To start using React for web development, you need to set up your development environment.

### 1. Ensure Node.js is Installed

Download and install Node.js from nodejs.org. This installation includes `npm` (Node Package Manager), which you'll use to manage your project's dependencies.

### 2. Create a New React Project

Open your terminal or command prompt and run the following command to set up a new React project in a directory named my-nhs-app:

```bash
npx create-react-app my-nhs-app
```

Now run the command below to change your directory to your new project:
```bash
cd my-nhs-app
```

Finally, run the command below to start the development server:
```bash
npm start
```

Your new React application will be accessible in your web browser at http://localhost:3000.

## Getting Started with React Native

For mobile development with React Native, the setup involves a few more steps.

### 1. Ensure Node is Installed

Download and install Node.js from nodejs.org. This installation includes `npm` (Node Package Manager), which you'll use to manage your project's dependencies.

### 2. Install the React Native CLI

Open your terminal or command prompt and run the following command to install the React Native Command Line Interface globally:

```bash
npm install -g react-native-cli
```

### 3. Initialize a New React Native Project

Create a new React Native project by running:
```bash
react-native init MyNHSApp
```

This command creates a new project in a directory named MyNHSApp.

### 4. Start the React Native Development Environment

Navigate into your new project directory and start the development environment:
```bash
cd MyNHSApp
react-native run-android
```

Replace run-android with run-ios if you're targeting iOS devices. This command builds your app and launches it in an Android emulator or an iOS simulator, depending on your target platform.

## Basic Concepts in React and React Native

Understanding fundamental concepts such as JSX, components, state, and props is crucial for working with React and React Native. These concepts form the backbone of any application built using these technologies.

### Components

Components are the building blocks of any React application, whether it's for the web or mobile. They allow you to break down the UI into reusable and independent pieces. Components can be either functional or class-based.

Here's a simple example of a functional component in React:
```javascript
// A simple React component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

In this example, the `Welcome` component takes `props` as an argument and returns a `h1` element that displays a greeting message. `props` are used to pass data from one component to another.

For a class-based component, the structure is slightly different:
```javascript
// A class-based React component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like. JSX makes it easier to write and add HTML in React.

Example of JSX:
```javascript
const element = <h1>Hello, world!</h1>;
```

### State and Lifecycle

State management and lifecycle methods allow you to create dynamic and responsive apps. The state is a built-in object that allows components to create and manage their own data. Lifecycle methods are special methods in React components that allow you to run code at particular times during a component's life.

Here's an example of a class component with state:
```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

In this example, the `Clock` component sets up a timer when it is mounted to the DOM (in `componentDidMount`) and clears the timer when it is unmounted (in `componentWillUnmount`). The `tick` method updates the state every second, and React automatically re-renders the component to display the current time.

### Props

Props (short for properties) are read-only attributes used to pass data from one component to another. They are passed to components in a way similar to function arguments.

Example of passing props:
```javascript
function App() {
  return <Welcome name="Sara" />;
}
```

In the above example, the Welcome component receives name as a prop and uses it to display the greeting message.

### React Native Differences

In React Native, components are also the fundamental building blocks, but instead of using traditional HTML tags, React Native provides components like View, Text, and Image that map to native UI elements. The concept of props and state remains the same, allowing for a consistent development experience across web and mobile.

Example of a simple React Native component:
```javascript
import React from 'react';
import { Text, View } from 'react-native';

const Welcome = (props) => {
  return (
    <View>
      <Text>Hello, {props.name}</Text>
    </View>
  );
};
```

In this example, the Welcome component uses Text and View components provided by React Native to display the greeting message.

## Examples of React in Action

- **[Waze](https://www.waze.com/en-GB/live-map/)**: The navigation app Waze uses React Native to ensure a consistent experience on both iOS and Android. This helps maintain high performance and responsiveness, providing users with seamless real-time updates and navigation assistance.
- **[Instagram](https://www.instagram.com/)**:  Instagram employs React Native to expedite feature releases and maintain a consistent user interface across iOS and Android. This cross-platform approach allows for simultaneous feature rollouts and updates, ensuring a uniform user experience.
- **[Uber Eats](https://www.ubereats.com/gb)**: React Native powers the Uber Eats restaurant dashboard, facilitating efficient order management for restaurant partners. This framework allows Uber Eats to create an intuitive interface that assists staff in handling orders, tracking deliveries, and managing menus.
- **[Microsoft Office](https://www.office.com/)**: Microsoft has adopted React Native for its Office suite, providing a consistent performance and user experience across different devices. This integration allows users to access and edit documents, spreadsheets, and presentations seamlessly on mobile devices, whether using iOS or Android.

## Further Learning Resources

- [React Official Documentation](https://react.dev/learn): Best place to start learning React.
- [React Native Official Documentation](https://reactnative.dev/docs/getting-started): Comprehensive guide for React Native development.

[^1]: Anonymous. "What is the difference between React Native and React?" *Stack Overflow*, 2016, [Link](https://stackoverflow.com/questions/34641582/what-is-the-difference-between-react-native-and-react).
[^2]: Ubah, Kingsley. "React.js vs React Native – What's the Difference?" *freeCodeCamp*, 2023, [Link](https://www.freecodecamp.org/news/react-js-vs-react-native-whats-the-difference/).
[^3]: Anonymous. "How React Native is different from ReactJS?" *geeksforgeeks*, 2023, [Link](https://www.geeksforgeeks.org/how-react-native-is-different-from-reactjs/).
[^4]: Anonymous. "How different is React Native from React?" *Reddit*, 2022, [Link](https://www.reddit.com/r/reactjs/comments/z0ooos/how_different_is_react_native_from_react/).
[^5]: Anonymous. "React Native vs React JS in 2024: Differences and Shared Features" *YouTube - Kodaps Academy*, 2023, [Link](https://www.reddit.com/r/reactjs/comments/z0ooos/how_different_is_react_native_from_react/).
[^6]: Gohil, Divyesh. "The Definitive Handbook to React Native Healthcare App Development" *The One Technologies*, 2024, [Link](https://theonetechnologies.com/blog/post/the-definitive-handbook-to-react-native-healthcare-app-development).
[^7]: Bryant, Juliana. "Innovating Healthcare: The Case for React Native App Development" *DAMCO Group*, 2024, [Link](https://www.linkedin.com/pulse/innovating-healthcare-case-react-native-app-juliana-bryant-dk6qc).
[^8]: Anonymous. "Top Three Ways ReactJS can Improve Patient Care Quality in Healthcare" *Solution Analysts*, 2021, [Link](https://www.solutionanalysts.com/blog/reactjs-development-to-improve-patient-care/).
[^9]: Anonymous. "React in Healthcare: The Best Option for Building Robust and User-Friendly Applications" *Empowerit.io*, 2023, [Link](https://www.linkedin.com/pulse/react-healthcare-best-option-building-robust-user-friendly?trk=public_post).
[^10]: Hoekstra, Romana. "Pros and Cons of React Native for HealthTech Apps" *TechMagic*, 2021, [Link](https://www.techmagic.co/blog/pros-and-cons-of-react-native-for-healthtech-apps/).
[^11]: Mitrofanskiy, Kosta. "Step-by-Step Guide to Developing HIPAA-compliant Medical Apps" *Intellisoft*, 2024, [Link](https://intellisoft.io/building-trust-in-healthcare-a-step-by-step-guide-to-developing-hipaa-compliant-medical-apps/).

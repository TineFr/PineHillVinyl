

## About React

![logo](../../images/react.png)

### Intro

React is a <b>javascript library</b> for building fast and interactive user interfaces. At the heart of all react applications are <b>components</b>. A component is essentially a piece of the user interface. When building an application with React, you build a bunch of independent, isolated and reusable components and then compose them to build complex UI. In short, it takes care of rendering the view and makes sure that the view is in sync with the state.

### How it works

Each React application has a root component, mostly referred to as the 'App' component. This component represents the entire application, and contains other child components. 

A component is typically implemented as a
javascript class that has a state and a render method. The state contains the data that is displayed when the component is rendered. The render method is responsible for describing what the UI should look like. 

    class Example{
        state = {};
        render(){           
        }
    }

The output of this render method is a React element which is a simple, plain javascript object that maps the DOM element. React keeps a lightweight representation of the DOM in memory, which is referred to as the <b>virtual DOM</b>. Unlike the real DOM, this virtual DOM is cheap to create.
When the state of the component has changed, we get a new React element. React will then compare this new element with the previous one, figures out what has changed and then will update a part of the real DOM to keep it in sync with the virtual DOM.

Unlike vanilla JS, we no longer work with the DOM API in browsers. In other words, we no longer have to write code in query and manipulate the DOM or attach event handlers
to DOM elements. We simple change the state of our components and React will automatically update the DOM to match that state.


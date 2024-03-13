# What is React?
   React  is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications.It was developed by Facebook and is commonly used for creating dynamic and interactive front-end applications. React allows developers to build reusable UI components that update efficiently and seamlessly in response to changes in application state.


# React is Declarative

## Focus on What, Not How: 
Declarative programming allows developers to focus on the "what" rather than the "how." Instead of specifying the step-by-step instructions to achieve a particular UI state, you declare the intended outcome, and React handles the implementation details.

## Describing the UI: 
Instead of manually manipulating the DOM or updating the UI imperatively (step by step), you declare the desired UI state. You express how your UI should look and behave under different conditions.


# Why React is FAST?

- Virtual DOM
- Efficient Reconciliation Algorithm
- Component-Based Architecture
- Virtual DOM Diffing
  

# What is JSX?
•	JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.
•	JSX can easily convert HTML tags to react elements.
•	It is faster than regular JavaScript.
•	JSX allows writing expression in { }. The expression can be any JS expression or React variable.

### In the example below, the text inside h1 tag is returned as JavaScript function to the render function.

```JavaScript
 export default function App() {
   return (
       <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
   );
 }
 ```
 
 ### If you don't use JSX syntax then the respective JavaScript code should be written as below,
```JavaScript
 import { createElement } from 'react';

 export default function App() {
   return createElement(
     'h1',
     { className: 'greeting' },
     'Hello, this is a JSX Code!'
   );
 }
```

# Lazy Loading

Imagine you're building a big house. Instead of bringing in all the furniture and decorations at once, which would take a lot of time and effort, you decide to bring them in one by one as needed. Lazy loading in React works similarly. Instead of loading all the parts of your website or app at once when someone visits, it loads them only when they're needed. This makes the initial loading of your website faster and smoother because it's not bogged down with unnecessary stuff right away. So, lazy loading helps improve the performance of your React application by loading things only when they're required.

React provides a built-in feature called React.lazy() that allows you to lazily load components. You can use this function to import components asynchronously, which means they will only be loaded when they are rendered in the application.

```JavaScript
const LazyComponent = React.lazy(() => import('./LazyComponent'));
<Suspense fallback={<div>Loading...</div>}>
```

Suspense is a React component that allows you to handle the loading state of lazily loaded components.
- You wrap the lazily loaded component with the <Suspense> component.
- Inside <Suspense>, you specify a fallback UI that should be displayed while the lazily loaded 
  component is being fetched.
- React will automatically display the fallback UI until the lazy-loaded component is ready to be 
  rendered.
 
# Prop-Drilling 
Prop drilling occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it.

## What is Elongated PROP?
An elongated prop is a prop that is not consumed but it is only passed down to another component. When a component receives a prop from its parent and doesn't consume the prop, it passes the prop down to another component. This prop is called elongated prop because it has been extended.

## Why not to use prop drilling?
- Code Complexity: As components grow, prop drilling increases code complexity as it is difficult to track the flow of data through various components.
- Reduced Maintainability: It will become very challenging to maintain the code with prop drilling. When changes are required in the data flow, you need to make changes in many components.
- Performance Overhead: We have to pass props through unnecessary intermediary components which can impact performance.
- Decreased Component Reusability: Components used in prop drilling become tightly coupled to the structure of the parent components, so it very difficult to use it on other parts of the application.
- Increased Development Time: Prop drilling often requires additional planning to implement. This can slow down the development process, especially when the component hierarchies is complex.

## Solution 
- Context API
   - React.createContext()
   - Provider
   - Consumer
   - useContext
- HOC
- Render PROP
- Memoization and Optimization - useMemo()
- Redux

# Lifting State UP
Every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.


"Lifting state up" is a common pattern in React for managing state across multiple components by moving the state to a common ancestor component. This pattern is useful when multiple components need access to the same state or when state needs to be shared between sibling components.

## how lifting state up works:

- Identify Shared State: Determine which components need access to the same piece of state. This could be state data, such as form inputs, or state-changing functions, such as event handlers.

- Move State Up: Find the closest common ancestor component of the components that need access to the state. Move the state and state-changing functions up to this common ancestor component.

- Pass State Down as Props: Once the state is moved up, pass it down to the child components that need access to it as props. Child components can then use these props to read the state or update it by calling functions passed down as props.

- Update State in Common Ancestor: Since the state is now managed by a common ancestor component, any updates to the state should be handled there. Child components can trigger state updates by calling functions passed down from the common ancestor component.

By lifting state up, both ParentComponent and ChildComponent have access to the same state, and changes to the state are managed in a single location, making the code easier to understand and maintain.


# Controlled and UnControlled Component:
## Controlled Component: 
The parent component controls the child component by passing down props, which the child component uses to update its behavior and data.
## Uncontrolled Component: 
The component manages its own state internally without relying on a parent component to control its behavior.

### Working:
#### Parent Component controlling Child (Controlled Component):

- In a controlled component setup, the parent component manages the state, and this state is passed down to the child component as props.
- The child component receives the data from the parent component through props and uses event handlers to notify the parent component when the data needs to be updated.
- The parent component then updates its state accordingly, and the new state is passed down to the child component as props again.
- This way, the parent component has full control over the child component's behavior and data.
Component with its own State (Uncontrolled Component):

#### In an uncontrolled component setup
- the component manages its own state internally without relying on the parent component.
- The component uses the internal state to manage its data and behavior directly.
- Typically, uncontrolled components utilize React's useState or useRef hooks to maintain their state internally.
- Since the state is managed within the component itself, it doesn't need to pass props up to a parent component to update its data.

# Other Definition:

## Controlled Components:

### Controlled components 
- Controlled components are React components where the form data is controlled by React state.
- In a controlled component, the value of the form input is controlled by the component's state and is updated through props passed by React.
- When the user interacts with the form input, an event handler updates the state, and React re-renders the component with the updated value.

## Uncontrolled Components:

- Uncontrolled components are React components where the form data is managed by the DOM rather than React state.
- In an uncontrolled component, the value of the form input is directly accessed from the DOM using a ref.

# Performance optimization and Code reusability in REACT
1. Pure Component
2. Memo
3. Ref
4. HOC
5. Render Prop

# Pure Component
PureComponent implements `shouldComponentUpdate` with shallow comparision with previous props and state to current props and state. if there is no difference then component will not re-render other wise component re-renderd.

## Example
In Parent.jsx we call two component PureComponentReact and RegularComponent.
- Then We create a state 'name' 
- Then change the state in componentDidMount using setInterval,after every 2 second setInterval change the name : Aman to Aman.
- when we pass the state name to both component as props then PureComponent first render and second time it will not re-renderd. since there is no change in the state bcz previous value is Aman and current value is also Aman.

- But in Regular Component it will re- render after every two second because it does not implement shouldComponentUpdate() lifeCycle Method.  and it treat state changed but state value actually not chnaged. 


## Pure Components Key Points:
### Shallow Comparison:
- Pure components perform a shallow comparison of the props and states. If the objects are passed as props or state have the same references, a re-render is prevented.
### Performance Optimization:
- Pure components can provide performance optimizations by preventing unnecessary re-renders when the data is same and hasn’t modified.
### ShouldComponentUpdate:
- Pure components automatically implement the shouldComponentUpdate() method with a shallow prop and state comparison. This method returns false if the props and state haven’t changed.

# Memo
### Pure Component is only applicable for Class Base Component.
In Order to achieve same thing using function Component we can achieve by 
- memo Higher Order Component:
  - using React.memo();
  - Syntax : export default React.memo(FunctionComponent_Name);
- useMemo Hook

# Higher-order components 
- HOC are a powerful feature of the React library. They allow us to reuse component logic across multiple components.

- In React, a higher-order component is a pattern where a function  that takes a component as an argument and returns a new component that wraps the original component.

### Benefits of Using Higher-Order Components in React
-  Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
- Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.

Synatx :
const NewComponent = HOC(OriginalComponent);
- const CaptainCool = withCaptaincy(Dhoni);

example :

``` Javascript
const HOC = (OriginalComponent) => {
class NewComponent extends Component {
  constructor() {
  
    super();
    this.state = {
      count: 0,
    };
  }
  
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  ```

  # REF
 
- In React, a ref is an object that provides a way to access and interact with a DOM 
  element or a React component instance directly.
- Refs are commonly used for accessing DOM elements, managing focus, triggering 
 imperative animations, integrating with third-party libraries, and more.
- Refs are created using the React.createRef() function for class components or the useRef() hook for functional components.


## REF FORWARDING

In React, forwarding refs is a technique that allows a component to pass down a ref it receives to one of its children, enabling parent components to interact with child DOM elements or React components directly.

## Forwarding Refs:

- When a parent component receives a ref, it can pass it down to one of its children using the forwardRef function.
- This allows the child component to accept a ref from its parent and then forward it to a specific DOM element or another component that it renders.
- Forwarding refs is commonly used when we need to access or manage a child component's internal state or methods from a parent component.

```Javascript
const InputChild = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
});

```


# Render Prop

## The term `render prop` is refer to the technique for sharing code between components using a prop whose value is a function.

```Javascript

import React,{useState} from "react";
const RenderProps = (props) => {
  const [count , setCount] = useState(0);
  const increment = ()=>{
    setCount(count+1)
  }
  return (
    <div>
      {props.render(count , increment)}
  </div>
          )
};

export default RenderProps;
```
```JavaScript
//App
import React from "react";
import RenderProps from "./RenderProps";
import ClickCounter from "./ClickCount";
import HoverCount from "./HoverCount";

const RenderApp = () => {
  return (
    <div>
    <RenderProps render = {(count , increment )=>(<ClickCounter count={count} increment = {increment} />) }/>
    <RenderProps render = {(count , increment )=>(<HoverCount count={count} increment = {increment} />) }/>
    </div>
  );
};

export default RenderApp;

```
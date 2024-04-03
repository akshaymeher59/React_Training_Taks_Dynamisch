import '../../App.css';
import React, { Component } from 'react';

class Test extends Component {

  /* 
    constructor() Method:
      Called during initial creation of component
      Initializes component's state
      Binds methods to component's instance
  */
  constructor(props) {
    console.log("Mount Phase: constructor() ");
    super(props);
    this.state = {
      count: 0,
      favoritecolor: "red",
      favoriteFood: 'Pizza'
    };
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick() {
    this.setState(prevState => ({
      ...prevState,
      count: prevState.count + 1
    }));
  }

  // During the mounting phase, getDerivedStateFromProps() is called after the constructor and before render(). This method is called for every render cycle and provides an opportunity to update the component's state based on changes in props before the initial render.
  // It's important to note that getDerivedStateFromProps() is a static method, which means it does not have access to the this keyword and cannot interact with the component's instance methods or properties

  static getDerivedStateFromProps(props, state) {
    console.log("Mount Phase: getDerivedStateFromProps() ");
    return { favoritecolor: props.favcol };
  }


  /*
    componentDidMount() method:
        Called once component is mounted into the DOM
    Purpose:
        Set up event listeners or timers
        Perform API calls or data fetching
        Initialization tasks requiring DOM API access

  */
  componentDidMount() {
    console.log("Mount Phase: componentDidMount()");
    // setTimeout(() => {
    //   this.setState({ favoritecolor: "yellow" })
    // }, 1000)
  }


  /* 
      shouldComponentUpdate() method:
      Called before component update
      Arguments: nextProps and nextState
      Returns boolean:
      True: component will update
      False: component will not update
  */
  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the favoriteFood state has changed
    console.log("Updating Phase: shouldComponentUpdate()");
    return this.state.favoriteFood !== nextState.favoriteFood;
  }


  /*
      componentWillUpdate():
      Lifecycle method in React
      Called before component's update cycle starts
      Receives next prop and state as arguments
      Used for tasks like making API calls, updating DOM
      Not recommended for updating state to avoid infinite rendering loop
      Often used with componentDidUpdate() for handling updates
  */

  componentWillUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count) {
      console.log(`Count is about to update from ${this.state.count} to ${nextState.count}.`);
    }
  }

  changeFood = () => {
    this.setState({ favoriteFood: 'Butter Chicken🍗' });
  }


  render() {
    console.log("Mount Phase: The render() ");
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment</button>
          <div>
            <h1>My Favorite Food is {this.state.favoriteFood}</h1>
            <button type="button" onClick={this.changeFood}>Change food</button>
          </div>
        </header>
      </div>
    );
  }
}


export default Test;

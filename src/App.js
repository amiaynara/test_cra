import React, { Component } from "react";

// Import components
//import LoginView from  "./components/login/loginView"



// Import styles
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loggedIn: false,
    };
  }
  async componentDidMount() {}
  render() {
    return (
      <div className="App">
        <h1>Some asdfheading</h1>
      </div>
    );
  }
}

export default App;

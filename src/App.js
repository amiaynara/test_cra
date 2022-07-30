import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Import components
import LoginView from  "./components/login/loginView"



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
        <h1>Some heading</h1>
        <Router>
          <Routes>
            <Route exact path="/login" element={<LoginView />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

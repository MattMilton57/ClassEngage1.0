import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import AssessPage from './AssessPage';
import ClassList from './ClassList';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
render() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/classlist" component={ClassList} />
        <Route exact path="/assess" component={AssessPage} />
      </div>

    </Router>
  );
}
}

export default App;

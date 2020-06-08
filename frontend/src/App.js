import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import AssessPage from './AssessmentPage/AssessPage';
import ClassList from './ClassPage/ClassList';
import ClassStats from './StatsPage/ClassStats';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
render() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/classlist" component={ClassList} />
        <Route exact path="/assess" component={AssessPage} />
        <Route exact path="/stats" component={ClassStats} />
      </div>

    </Router>
  );
}
}

export default App;

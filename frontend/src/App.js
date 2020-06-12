import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import AssessPage from './AssessmentPage/AssessPage';
import ClassList from './ClassPage/ClassList';
import ClassStats from './StatsPage/ClassStats';
import EditClasses from './EditClasses/EditClasses';
import EnrollStudent from './EnrollStudentPage/EnrollStudent'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const APIS = ('http://localhost:3000/students')
const APIC = ('http://localhost:3000/periods')
const APIA = ('http://localhost:3000/assessments')
const APIR = ('http://localhost:3000/registrations')
const APIE = ('http://localhost:3000/students_periods')

class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      assessments: [],
      registrations: [],
      enrollments: [],
      classes: [],
      selectedClass:2
    };
  }

  setSelectedClass = (classID) => {
    this.setState({ selectedClass: classID })
  }

  componentDidMount() {
    this.fetchStudents()
    this.fetchClasses()
    this.fetchAssessments()
    this.fetchEnrollments()
    this.fetchRegistrations()
  }

  fetchClasses = () => {
    fetch (APIC) 
    .then (res => res.json())
    .then (result => {
      this.setState({
        isLoaded: true,
        classes: result
      });
      console.log('class fetch done')
    });
  }

  fetchStudents = () => {
    fetch (APIS) 
    .then (res => res.json())
    .then (result => {
      this.setState({
        isLoaded: true,
        students: result
      });
      console.log('student fetch done')
    });
  }

  fetchAssessments = () => {
    fetch (APIA) 
    .then (res => res.json())
    .then (result => {
      this.setState({
        isLoaded: true,
        assessments: result
      });
      console.log("assessment fetch done")
    });
  } 

  fetchRegistrations = () => {
    fetch (APIR) 
    .then (res => res.json())
    .then (result => {
      this.setState({
        isLoaded: true,
        registrations: result
      });
      console.log("registration fetch done")
    });
  }

  fetchEnrollments = () => {
    fetch (APIE) 
    .then (res => res.json())
    .then (result => {
      this.setState({
        isLoaded: true,
        enrollments: result
      });
      console.log("enrollment fetch done")
    });
  }

render() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
      

        <Route 
        exact 
        path="/classlist" 
        render={ props => 
          <ClassList {...props} 
            thatClass={this.setSelectedClass}
            selectedClass={this.state.selectedClass}
            allClasses={this.state.classes}
        />}
        />

        <Route 
        exact 
        path="/editclasses" 
        render={ props => 
          <EditClasses {...props} 
            allStudents={this.state.students}
            allEnrollments={this.state.enrollments}
            selectedClass={this.state.selectedClass}
            allClasses={this.state.classes}
        />}
        />

        <Route 
        exact 
        path="/enroll" 
        render={ props => 
          <EnrollStudent {...props} 
            allStudents={this.state.students}
        />}
        />

        <Route 
        exact 
        path="/stats" 
        render={ props => 
          <ClassStats {...props} 
            allStudents={this.state.students}
            allRegistrations={this.state.registrations}
            allEnrollments={this.state.enrollments}
            allAssessments={this.state.assessments}
            selectedClass={this.state.selectedClass}
        />}
        />

        <Route 
        exact 
        path="/assess" 
        render={ props => 
          <AssessPage {...props} 
            allStudents={this.state.students}
            allRegistrations={this.state.registrations}
            allEnrollments={this.state.enrollments}
            allAssessments={this.state.assessments}
            selectedClass={this.state.selectedClass}
        />}
        />
      </div>

    </Router>
  );
}
}

export default App;

{/* <Route 
exact 
path="/stats" 
render={ props => 
  <ClassStats {...props} 
    allStudents={this.state.students}
    allRegistrations={this.state.registrations}
    allEnrollments={this.state.enrollments}
    allAssessments={this.state.assessments}
    allClasses={this.state.classes}
/>}
/> */}
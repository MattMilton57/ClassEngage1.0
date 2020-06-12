import React from 'react';
import { Link } from 'react-router-dom';
import ClassStatsContainer from'./ClassStatsContainer'
const ClassID = [1]

class ClassStats extends React.Component{


  
    constructor() {
        super();
        this.state = {
          classToView: [],
          assessmentDisplay: [],
          classEnrollments: [],
          studentsInClass: [],
        };
      }

      componentDidMount() {
        console.log("stats page mounted")
      }
      
render() {
    return(
        <div>
            <div id="classSelect">
            <div>
        <Link to="/classlist">
            <button type="button">
                class list
            </button>
        </Link>
        <Link to="/editclasses">
            <button type="button">
                edit classes
            </button>
        </Link>
        <Link to="/enroll">
            <button type="button">
                enroll student
            </button>
        </Link>
        <Link to="/">
            <button type="button">
                landing page
            </button>
        </Link>
      </div>
              <ClassStatsContainer 
              students = {this.props.allStudents}
              assessments = {this.props.allAssessments}
              enrollments = {this.props.allEnrollments}
              classid = {this.props.selectedClass}
              />
            </div>
        </div>
    )
}
}

export default ClassStats




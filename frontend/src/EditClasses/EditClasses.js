import React from 'react';
import { Link } from 'react-router-dom';
import EditClassesContainer from'./EditClassesContainer'
const ClassID = [1]

class EditClasses extends React.Component{

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
            <Link to="/">
            <button type="button">
                class list!
            </button>
        </Link>
              <ClassStatsContainer 
              students = {this.props.allStudents}
              assessments = {this.props.allAssessments}
              enrollments = {this.props.allEnrollments}
              classid = {this.props.selectedClass}
              />
              Stats page
            </div>
        </div>
    )
}
}

export default EditClasses
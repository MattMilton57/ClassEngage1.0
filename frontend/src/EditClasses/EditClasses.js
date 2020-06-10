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
      }

outOfClass = (student) => {
    console.log(student.name)
}      
      
render() {
    return(
        <div>
            <div>
                <Link to="/">
                    <button type="button">
                        landing page
                    </button>
                </Link>
                <EditClassesContainer 
                students={this.props.allStudents}
                enrollments={this.props.allEnrollments}
                thisClass={this.props.selectedClass}
                outOfClass={this.outOfClass}
                />

            </div>
        </div>
    )
}
}

export default EditClasses
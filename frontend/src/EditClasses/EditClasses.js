import React from 'react';
import { Link } from 'react-router-dom';
import EditClassesContainer from'./EditClassesContainer'
import RegisterContainer from'./RegisterContainer'
const APIE = ('http://localhost:3000/students_periods')

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

intoClass = (student) => {

    let students_period = {
      period_id: 1,
      student_id: student.id,
    }
    console.log(students_period)
    this.postIntoClass(students_period)
  }

postIntoClass = (students_period) => {
        fetch((APIE), {
            method: 'POST',
            headers: {
                'access-control-allow-origin':'*',
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }, 
            body: JSON.stringify({students_period})
        })
        .then(res => res.json())
        .then(res => console.log("done"))
      
}  

removeFromClass = (students_period) => {
    fetch((APIE), {
        method: 'DELETE',
        headers: {
            'access-control-allow-origin':'*',
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }, 
        body: JSON.stringify({students_period})
    })
    .then(res => res.json())
    .then(res => console.log("done"))
  
}  


      
render() {
    return(
        <div>
            <div>
            <div>
        <Link to="/classlist">
            <button type="button">
                class list
            </button>
        </Link>
        <Link to="/stats">
            <button type="button">
                stats page
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
                <div id="inClass">
                <EditClassesContainer 
                students={this.props.allStudents}
                enrollments={this.props.allEnrollments}
                thisClass={this.props.selectedClass}
                outOfClass={this.outOfClass}
                />
                </div>
                <br></br>
                <br></br>
                <div id="outOfClass">
                <RegisterContainer 
                students={this.props.allStudents}
                enrollments={this.props.allEnrollments}
                thisClass={this.props.selectedClass}
                intoClass={this.intoClass}
                /> 
                </div> 

            </div>
        </div>
    )
}
}

export default EditClasses
import React from 'react';
import StudentCard from './StudentCard'
import {students} from '../StudentData'
import ClassDropdown from '../ClassDropdown'
import StudentContainer from'./StudentContainer'
const APIS = ('http://localhost:3000/students')
const APIP = ('http://localhost:3000/periods')
const APIA = ('http://localhost:3000/assessments')
const Teacher=(1)

class AssessPage extends React.Component{

  constructor() {
    super();
    this.state = {
      students: [],
      classes: [],
      toAssess: [],
      assessed: []
    };
  }


componentDidMount() {
  this.fetchClasses()
  this.fetchStudents()
}

fetchStudents = () => {
  fetch (APIS) 
  .then (res => res.json())
  .then (result => {
    this.setState({
      isLoaded: true,
      students: result
    });
    this.todaysAssessment()
  });
}

fetchClasses = () => {
  fetch (APIP) 
  .then (res => res.json())
  .then (result => {
    this.setState({
      isLoaded: true,
      classes: result
    });
  });
}

todaysAssessment = () => {
  this.setState((prev) => {
    return {
      students: [...prev.students.slice(4), ...prev.toAssess.filter(students=>!this.beenAssessed(students))],
      toAssess: prev.students.slice(0, 4),
    };
  });
};


newAssessP = (student) => {

  let assessment = {
    participation: true,
    comment: "I'm a new assessment",
    teacher_id: 1,
    student_id: student.id,
    cycle: 1,
  }
  console.log(assessment)

  this.postAssessment(assessment)
}

newAssessN = (student) => {
  let assessment = {
    participation: false,
    comment: "I'm a new assessment",
    datetime: null,
    teacher_id: 1,
    student_id: student.id,
    cycle: 1,
  }
  console.log(assessment)
  this.postAssessment(assessment)
}

postAssessment = (assessment) => {
  fetch((APIA), {
      method: 'POST',
      headers: {
          'access-control-allow-origin':'*',
          'Content-Type': 'application/json',
          'Accept':'application/json'
      }, 
      body: JSON.stringify({assessment})
  })
  .then(res => res.json())
  .then(res => console.log(res))
}



render() {
    return (
        <div>
          <div>
            Div for the dropdown
            <ClassDropdown 
            title="Select a Class"
            classes={this.state.classes}/>
          </div>
             <br></br>
          <div>
              Student to be assessed
            <StudentContainer 
            toAssess={this.state.toAssess}
            onParticipating = {this.newAssessP}
            onNotParticipating = {this.newAssessN}/>
        </div>
      </div>
    );
  }
}
  export default AssessPage


  // updateScore(id, score){
//   fetch(('http://localhost:3000/students/'+{id}), {
//       method: 'PATCH',
//       headers: {
//           'Content-Type': 'application/json',
//           'Accept':'application/json'
//       }, 
//       body: JSON.stringify({participation_score: score})
//   })
//   .then(res => res.json())
//   .then(res => console.log(res))

// }
import React from 'react';
import StudentCard from './StudentCard'
import {students} from './StudentData'
import ClassDropdown from './ClassDropdown'
import StudentContainer from'./StudentContainer'
const APIS = ('http://localhost:3000/students')
const APIP = ('http://localhost:3000/periods')

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

updateScore(id, score){
  fetch(('http://localhost:3000/students/'+{id}), {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json'
      }, 
      body: JSON.stringify({participation_score: score})
  })
  .then(res => res.json())
  .then(res => console.log(res))

}


render() {
    return (
        <div>
      <div>
          Im the Assess page and I like cats.
          <button>Also, im a button</button>
        </div>
<br></br>
        <div>
          Div for the dropdown
          <ClassDropdown 
          title="Select a Class"
          classes={this.state.classes}/>
        </div>
<br></br>
        <div className="student">
            Student to be assessed
          <StudentContainer toAssess={this.state.toAssess}/>
      </div>
      </div>
    );
  }
}
  export default AssessPage
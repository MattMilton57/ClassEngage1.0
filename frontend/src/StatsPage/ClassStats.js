import React from 'react';
import { Link } from 'react-router-dom';
import ClassStatsContainer from'./ClassStatsContainer'
const APIS = ('http://localhost:3000/students')
const APIP = ('http://localhost:3000/periods')
const APIA = ('http://localhost:3000/assessments')
const APIR = ('http://localhost:3000/registrations')
const APIE = ('http://localhost:3000/students_periods')
const ClassID = (1)

class ClassStats extends React.Component{

    constructor() {
        super();
        this.state = {
          students: [],
          assessments: [],
          classToView: [],
          assessmentDisplay: [],
          studentsInClass: [],
          registrations: [],
          enrollments: [],
        };
      }

componentDidMount() {
    this.fetchStudents()
    this.fetchAssessments()
    this.fetchRegistrations()
    this.fetchEnrollments()
    console.log("mounted")
}

  fetchStudents = () => {
    fetch (APIS) 
    .then (res => res.json())
    .then (result => {
      this.setState({
        isLoaded: true,
        students: result
      });
      // this.filterStudents()
      console.log(this.students)
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
      // this.fiterAssessments()
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
      // this.filterStudents()
      console.log(this.registrations)
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
      // this.filterStudents()
      console.log(this.enrollments)
    });
  }

// filterStudents = () => {
//   this.setState((prev) =>{
//     return {
//       classToView: [...prev.students.filter(student => student.hat]
//     }
//   })


// }  



filterAssessments = () => {
  

}

onTodoClick(id){
  this.setState({items: this.state.items.filter(item => item.news_id == id )
  });
}

// eatSushi = (eatenSushi) => {
//     if (eatenSushi.price <= this.state.wallet && !this.isSushiEaten(eatenSushi))
//       this.setState((prev) => {
//         return {
//           emptyPlates: [...prev.emptyPlates, eatenSushi],
//           wallet: prev.wallet - eatenSushi.price,
//         };
//       });
//   };



render() {
    return(
        <div>
            <div id="classSelect">
              <ClassStatsContainer 
              students = {this.students}
              assessments = {this.assessments}
              enrollments = {this.enrollments}
              ClassID = {this.ClassID}
              />
              Stats page
            </div>
        </div>
    )
}
}

export default ClassStats
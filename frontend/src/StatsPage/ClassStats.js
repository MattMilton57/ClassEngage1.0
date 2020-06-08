import React from 'react';
import { Link } from 'react-router-dom';
import ClassStatsContainer from'./ClassStatsContainer'
const APIS = ('http://localhost:3000/students')
const APIP = ('http://localhost:3000/periods')
const APIA = ('http://localhost:3000/assessments')
const ClassID = (1)

class ClassStats extends React.Component{

    constructor() {
        super();
        this.state = {
          students: [],
          assessments: [],
          classToView: [],
          assessmentDisplay: [],
          studentsInClass: []
        };
      }

componentDidMount() {
    this.fetchStudents()
    this.fetchAssessments()
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
    //   this.todaysAssessment()
    });
  } 

findStudents = () => {
console.log("wha?")
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
              <ClassStatsContainer />
            </div>
        </div>
    )
}
}

export default ClassStats
import React from 'react';
import { Link } from 'react-router-dom';
import ClassStatsContainer from'./ClassStatsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import LandingPage from './LandingPage/LandingPage';
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
        // this.loadState()
        // console.log(this.props.allEnrollments)
      }
      
      // handleAddFood = () => {
      //   const {allStudents} = this.props;
      //   console.log(this.props.allStudents);
      // }

// loadState() {
//   this.setState=({
//     class: allStudents})
// }

// filterPoets = () => {
//   let enrollments = this.props.allEnrollments
//   enrollments = enrollments.filter((enrollment) => {
//     let poetName = poet.firstName.toLowerCase() + poet.lastName.toLowerCase()
//     return poetName.indexOf(
//       poetFilter.toLowerCase()) !== -1
//   })
//   this.setState({
//     filteredPoets
//   })
// }

// getNextSushi = () => {
//   let enrollments = this.props.allEnrollments
//   this.setState((prev) => {
//     return {
//       classEnrollments: [enrollments.filter(sushi=>!this.isSushiEaten(sushi))],
//       currentSushi: prev.sushi.slice(0, 4),
//     };
//   });
// };

tempfunction = () =>{
  // let enrollments = this.props.allEnrollments
  return this.props.allEnrollments.map(thing =>{
   console.log("foo")
  })
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

export default ClassStats
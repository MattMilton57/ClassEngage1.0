import React, {Fragment} from 'react';
import AssessmentCard from './AssessmentCard'


class AssessmentContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          students: [],
          assessments: [],
          registrations: [],
          enrollments: [],
          classes: [],
          selectedClass:2,
          toAssess:[],
          thisClass: []
        };
      }

    componentDidMount(){
        this.setState({
            students: this.props.students,
            enrollments: this.props.enrollments,
        })        
    }
    
    buildClassList(){
        var thisClass=[]
        return this.state.enrollments.map(enrollment => {
            if (enrollment.period_id == this.state.selectedClass){
                return this.state.students.map(student => {
                    if (student.id == enrollment.student_id){
                        return thisClass.push(student)
                        }
                    })
                }
                this.setState({
                  thisClass: thisClass
                }) 
        })
      }
    
    todaysAssessment = () => {
        this.setState((prev) => {
          return {
            students: [...prev.students.slice(4), ...prev.toAssess.filter(students=>!this.beenAssessed(students))],
            toAssess: prev.students.slice(0, 5),
          };
        });
      };

    sendStudents(){
        return this.state.toAssess.map(student => {
            return (
                <AssessmentCard 
                student={student}
                onParticipating={this.onParticipating}
                onNotParticipating={this.onNotParticipating}/>
            )
        })
    }
    
    render(){
        return (
            <Fragment>
                <div>
                    
                    {this.sendStudents()}
                
                </div>
            </Fragment>
        )
    } 
    
}            
export default AssessmentContainer





// import React, {Fragment} from 'react';
// import AssessmentCard from './AssessmentCard'

// class AssessmentContainer extends React.Component{
   
//     constructor(props) {
//         super(props);
//         this.state = {
//           students: [],
//           assessments: [],
//           registrations: [],
//           enrollments: [],
//           classes: [],
//           selectedClass:2
//         };
//       }

//     componentDidMount(){
//         this.setState({
//             students: this.props.students,
//             enrollments: this.props.enrollments,
//         })        
//     }


   

// }
// export default AssessmentContainer

// render(){
//     return (
//         <Fragment>
//             <div>
                
//                 {this.sendStudents()}
             
//             </div>
//         </Fragment>
//     )
// }
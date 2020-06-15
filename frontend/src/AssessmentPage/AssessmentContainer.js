import React from 'react';
import AssessmentCard from './AssessmentCard'
const APIA = ('http://localhost:3000/assessments')


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
          thisClass: [],
          selectedStudent:3,
          toAssess: []
        };
      }
      

    componentDidMount(){
        // this.loadStudent()
        this.setState({
            students: this.props.students,
            enrollments: this.props.enrollments,
        })   
        this.buildClassList()     
    }
    
    buildClassList(){
        var thisClass = []
        return this.props.enrollments.map(enrollment => {
            if (enrollment.period_id == this.state.selectedClass){
                return this.props.students.map(student => {
                    if (student.id == enrollment.student_id){
                        return thisClass.push(student)
                        }
                    })
                }
                this.setState({
                  thisClass: thisClass
                }) 
                this.todaysAssessment()
            })
            
        }
        
    todaysAssessment = () => {
        this.setState((prev) => {
          return {
            thisClass: [...prev.thisClass.slice(1)],
            toAssess: prev.thisClass.slice(0, 1),
          };
        });
      };


    randomized(){
      this.setState({
        clicked: true, 
        thisClass: this.state.thisClass[Math.floor(Math.random() * 
      this.state.thisClass.length)]
      })
    }

    sendStudents(){
        return this.state.toAssess.map(student => {
            return (
                <AssessmentCard 
                student={student}
                onParticipating={this.onParticipating}
                onNotParticipating={this.onNotParticipating}
                nextStudent={this.nextStudent}/>
            )
        })
    }

    loadStudent = () => {
        this.setState({
            clicked: true, 
            selectedStudent: this.state.thisClass[Math.floor(Math.random() * 
          this.state.thisClass.length)]
          })
          return this.state.selectedStudent.map(student => {
            return (
                <AssessmentCard 
                student={student}
                onParticipating={this.onParticipating}
                onNotParticipating={this.onNotParticipating}
                nextStudent={this.nextStudent}/>
            )
        })
    }

    
    handleClick = () => {
      this.todaysAssessment()
      }

      onParticipating = (student) => {

        let assessment = {
          participation: true,
          comment: "",
          teacher_id: 1,
          student_id: student.id,
          cycle: 1,
        }
        console.log(assessment)
        this.todaysAssessment()
        this.postAssessment(assessment)
      }
      
      onNotParticipating = (student) => {
        let assessment = {
          participation: false,
          comment: "",
          datetime: null,
          teacher_id: 1,
          student_id: student.id,
          cycle: 1,
        }
        console.log(assessment)
        this.todaysAssessment()
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

    render(){
        return (
           
                <div>
                    <div className="App">
                        <button onClick={this.handleClick}>Assess a student</button>
                    </div>                    
                    {this.sendStudents()}
                
                </div>
           
        )
    } 
    
}            
export default AssessmentContainer






    // loadStudent(){
    //     var random = this.state.thisClass[Math.floor(Math.random() * 
    //         this.state.thisClass.length)]
 
    //     this.setState({
    //         clicked: true, 
    //         selectedStudent: random
    //       })
    // }








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
//           selectedClass:2,
//           toAssess:[],
//           thisClass: [],
//           selectedStudent: null,
//           clicked: false
//         };
//       }

//     componentDidMount(){
//         this.setState({
//             students: this.props.students,
//             enrollments: this.props.enrollments,
//         }) 
//         this.buildClassList()
//         this.firstStudent()
       
//     }
    
    // buildClassList(){
    //     var thisClass = []
 
    //     return this.props.enrollments.map(enrollment => {
    //         if (enrollment.period_id == this.state.selectedClass){
    //             return this.props.students.map(student => {
    //                 if (student.id == enrollment.student_id){
    //                     return thisClass.push(student)
    //                     }
    //                 })
    //             }
    //             this.setState({
    //               thisClass: thisClass
    //             }) 
    //     })
    //   }
    


//     firstStudent(){
//         this.setState({
//             selectedStudent: this.state.thisClass[Math.floor(Math.random() * 
//                 this.state.thisClass.length)]
//         })
//     }
      

//     sendStudents(){
//         // return this.state.thisClass.map(student => {
//             return (
//                 <AssessmentCard 
//                 student={this.state.selectedStudent}
//                 nextStudent={this.nextStudent}
//                 onParticipating={this.onParticipating}
//                 onNotParticipating={this.onNotParticipating}/>
//             )
//         })
//     }

//     // handleClick = () => {
//     //     var rando = this.state.thisClass[Math.floor(Math.random() * 
//     //         this.state.thisClass.length)]
//     //         return (
//     //             <AssessmentCard 
//     //             student={rando}
//     //             nextStudent={this.nextStudent}
//     //             onParticipating={this.onParticipating}
//     //             onNotParticipating={this.onNotParticipating}/>
//     //         )

//     //     // this.setState({
//     //     //   clicked: true, 
//     //     //   selectedStudent: this.state.thisClass[Math.floor(Math.random() * 
//     //     // this.state.thisClass.length)]
//     //     // })
//     //   }

    // handleClick = () => {
    //     this.setState({
    //       clicked: true, 
    //       selectedStudent: this.state.thisClass[Math.floor(Math.random() * 
    //     this.state.thisClass.length)]
    //     })
    //   }
    
//     render(){
//         return (
//             <Fragment>
//                 <div>
                    // <div className="App">
                    //     <button onClick={this.handleClick}>Assess a student</button>
                    // </div>
                    
//                     {this.handleClick()}
                
//                 </div>
//             </Fragment>
//         )
//     } 
    
// }            
// export default AssessmentContainer

// function from sushi lab to send four objects

    // todaysAssessment = () => {
    //     this.setState((prev) => {
    //       return {
    //         students: [...prev.students.slice(4), ...prev.toAssess.filter(students=>!this.beenAssessed(students))],
    //         toAssess: prev.students.slice(0, 5),
    //       };
    //     });
    //   };



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
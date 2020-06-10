import React, {Fragment} from 'react';
import Stats from './Stats'

const ClassStatsContainer = (props) => {
    const {students, assessments, enrollments, classid} =props

    const sortStudents = () => {
        


        return enrollments.map(enrollment => {
            const gatheredAssessments = []
            const scoreArray= []
            // console.log(enrollment.student_id)
            if (enrollment.period_id == 1){
                const thisEnrollment=enrollment
                // console.log(thisEnrollment) - works
                students.map(student => {
                    if (student.id == thisEnrollment.student_id){
                        const thisStudent=student
                        gatheredAssessments.push(student.name)
                        // console.log(thisStudent) - works
                        assessments.map(assessment => {
                            if (assessment.student_id == thisStudent.id){
                                const thisAssessment = assessment
                                // console.log(thisAssessment) - working
                                if (thisAssessment.participation == true){
                                    gatheredAssessments.push(1)
                                    // console.log(gatheredAssessments)
                                }else{
                                    gatheredAssessments.push(0)
                                }
                                   
                                
                                
                            }
                            
                        }
                        )}
                        
                    }
                    )}
                        // console.log(scoreArray)
                        console.log(gatheredAssessments)
                    }
                    
                    ) }
  
    

    

    return (
        <Fragment>
            <div>
                {sortStudents()}
            {/* <button onclick ={findStudents} >Select</button> */}
            </div>
        </Fragment>
    )

    }
export default ClassStatsContainer

// import React, {Fragment} from 'react';
// import StudentCard from './StudentCard'

// const StudentContainer = (props) => {
//     const {toAssess, onParticipating, onNotParticipating} = props;

// const sortStudents = () => {
//     return enrollments.map(enrollment => {
//         if (enrollment.student_id === ClassID){
//             return (
//                 <Stats 
//                 assessments={assessments}
//                 enrollment={enrollment}
//                 students={students}/>
//             )
//         }

//     })
// }
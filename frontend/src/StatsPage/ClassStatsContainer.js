import React, {Fragment} from 'react';
import Stats from './Stats'

const ClassStatsContainer = (props) => {
    const {students, assessments, enrollments, classid} =props

    const sortStudents = () => {
        


        return enrollments.map(enrollment => {
            const gatheredAssessments = []
            let scoreArray= []
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
                        scoreArray = (gatheredAssessments.slice(1))
                        let name = gatheredAssessments[0]
                        let length = scoreArray.length
                        var sum = 0;
                        for (var i = 0; i < length; i++) {
                        sum += scoreArray[i]
                        }
                        var score = (sum/length)
                        // let final = []
                        // final.push(scoreArray[0])
                        // final.push(score)
                        console.log(sum)
                        console.log(length)
                        if (score >= 0){
                            return (
                                <Stats
                                score={score}
                                name={name}
                                />
                            )
                        }
                       
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
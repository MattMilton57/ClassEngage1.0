import React, {Fragment} from 'react';
import Stats from './Stats'

const ClassStatsContainer = (props) => {
    const {students, assessments, enrollments, ClassID} =props

   

    

    return (
        <Fragment>
            <div>
                {/* {sortStudents()} */}
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

//     const sendStudents = () => {
//         return toAssess.map(student => {
//             return (
//                 <StudentCard 
//                 student={student}
//                 onParticipating={onParticipating}
//                 onNotParticipating={onNotParticipating}  />
//             )

//         })
//     }
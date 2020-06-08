import React, {Fragment} from 'react';
import StudentCard from './StudentCard'

const StudentContainer = (props) => {
    const {toAssess, onParticipating, onNotParticipating} = props;

    const sendStudents = () => {
        return toAssess.map(student => {
            return (
                <StudentCard 
                student={student}
                onParticipating={onParticipating}
                onNotParticipating={onNotParticipating}  />
            )

        })
    }
   
    return (
        <Fragment>
            <div>
                
                {sendStudents()}
             
            </div>
        </Fragment>
    )
}
export default StudentContainer
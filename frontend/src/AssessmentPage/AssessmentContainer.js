import React, {Fragment} from 'react';
import AssessmentCard from './AssessmentCard'

const AssessmentContainer = (props) => {
    const {toAssess, onParticipating, onNotParticipating} = props;

    const sendStudents = () => {
        return toAssess.map(student => {
            return (
                <AssessmentCard 
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
export default AssessmentContainer
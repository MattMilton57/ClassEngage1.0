import React, {Fragment} from 'react';
import StudentCard from './StudentCard'

const StudentContainer = (props) => {
    const {toAssess} = props;

    const sendStudents = () => {
        return toAssess.map(student => {
            return (
                <StudentCard student={student} />
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
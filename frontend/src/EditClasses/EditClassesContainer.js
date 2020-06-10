import React, {Fragment} from 'react';
import ClassElement from './ClassElement'

const EditClassesContainer = (props) => {
    // console.log(props)
    const {students, outOfClass, enrollments, thisClass} =props

    const buildClassList = () => {
        return enrollments.map(enrollment => {
            // console.log(enrollment)
            if (enrollment.period_id == thisClass){
           
                return students.map(student => {
                    if (student.id == enrollment.student_id){
                        return <ClassElement 
                        student={student}
                        outOfClass={outOfClass} />
                        }
                })
            }
        }) 
    }
  
    return (
        <Fragment>
            <div>
                check
                {buildClassList()}
            </div>
        </Fragment>
    )
}        
export default EditClassesContainer
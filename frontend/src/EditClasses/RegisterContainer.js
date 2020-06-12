import React, {Fragment} from 'react';
import Register from './Register'

const RegisterContainer = (props) => {
    // console.log(props)
    const {students, intoClass, enrollments, thisClass} =props

    const buildClassList = () => {
        return enrollments.map(enrollment => {
            // console.log(enrollment)
            if (enrollment.period_id !== thisClass){
           
                return students.map(student => {
                    if (student.id == enrollment.student_id){
                
                        return <Register
                        student={student}
                        intoClass={intoClass} />
                        }
                })
            }
        }) 
    }
  
    return (
        <Fragment>
            <div>
                {buildClassList()}
            </div>
        </Fragment>
    )
}        
export default RegisterContainer
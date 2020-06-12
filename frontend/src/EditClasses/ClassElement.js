import React from 'react'

const ClassElement = (props) => {
    const {student, enrollment, outOfClass} = props
    const deRegister = (e) =>{
        e.preventDefault()
        outOfClass(props.student, props.enrollment)
    }

    return(
        <div>
            <l1>{student.name} </l1>
            <button onClick={(e) =>deRegister(e)}>remove from class</button>
        </div>
    )
}
export default ClassElement
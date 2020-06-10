import React from 'react'

const ClassElement = (props) => {
    const {student, outOfClass} = props
    const deRegister = (e) =>{
        e.preventDefault()
        console.log('deRegister')
        outOfClass(props.student)
    }

    return(
        <div>
            <l1>{student.name} </l1>
            <button onClick={(e) =>deRegister(e)}>remove from class</button>
        </div>
    )
}
export default ClassElement
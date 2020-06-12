import React from 'react'

const Register = (props) => {
    const {student, intoClass} = props
    const Register = (e) =>{
        e.preventDefault()
        console.log('Register')
        intoClass(props.student)
    }

    return(
        <div>
            <l1>{student.name} </l1>
            <button onClick={(e) =>Register(e)}>Add to class</button>
        </div>
    )
}
export default Register
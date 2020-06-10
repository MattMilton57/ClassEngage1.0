import React, { Component } from 'react'

const Stats = (props) => {
    const {score, name} = props
    // const {participating, student_id} = assessments
    // const {student_id} = enrollment
    // const {name, student_id} = students

    
    
    return(
        <div>
            <label>test {name}  {score}</label>
        </div>
    )
}
export default Stats

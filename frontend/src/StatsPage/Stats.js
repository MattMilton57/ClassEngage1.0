import React, { Component } from 'react'

const Stats = (props) => {
    const {assessments, enrollment, students} = props
    // const {participating, student_id} = assessments
    // const {student_id} = enrollment
    const {name, student_id} = students

    
    
    return(
        <div>
            <label>score for: {name}{student_id}</label>
        </div>
    )
}
export default Stats

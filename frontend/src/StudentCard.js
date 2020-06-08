import React, { Component } from 'react'
import './StudentCard.css'

const StudentCard = (props) => {
    const {student} = props  
    const {name} = student

    return (
        <div className="student">
            <form>
                <label>Student Name {name}</label><br></br>
                <button>Participating</button>
                <button>Not Participating</button>
            </form>
        </div>
    )
}
export default StudentCard
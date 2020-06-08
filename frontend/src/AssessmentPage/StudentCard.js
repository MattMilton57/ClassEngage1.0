import React, { Fragment } from 'react'
import './StudentCard.css'

const StudentCard = (props) => {
    const {onParticipating, onNotParticipating, student, comment} = props  
    const {name, id} = student
    const handleYes = () =>{
        onParticipating(props.student)
    }
    const handleNo = () =>{
        onNotParticipating(props.student, props.comment)
    }

    return (
        <div>
        <div className="student">
            <form>
                <label>Student: {name}</label><br></br>
                <div onClick={handleYes} >
                <l1>Participating</l1>
                </div>
                <div  onClick={handleNo} >
                <l1>Not Participating</l1>
                </div>
                <label for="comment">Comment: </label>
                <input id="comment"></input>
                <div>

                </div>
            </form>
        </div>
        <div className="breathingRoom">
        <l1>sdfasdfasdf</l1>
            <br></br>
        </div>
        </div>
    )
}
export default StudentCard

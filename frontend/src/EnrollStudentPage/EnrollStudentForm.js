import React, { Component } from 'react'
// import './StudentCard.css'

const EnrollStudentForm = (props) => {
    const {enrollStudent, onNotParticipating, student, comment} = props  
    // const {name, id} = student
    const newStudentHandler = (e) =>{
        e.preventDefault()
        console.log('hi')
        enrollStudent(props.student)
    }
    // const handleNo = () =>{
    //     onNotParticipating(props.student, props.comment)
    // }


    return (

<div className='studentform'>
<form>
<div className="namediv" > 
    <label for="name">Student Name: </label>
    <input 
        className="name"
        onChangeText={(text) => this.setState({name:text})}>
    </input>
</div>
<div className="parentdiv" > 
    <label for="parentname">Parents Name: </label>
    <input 
        className="parentname"
        onChangeText={(text) => this.setState({parentname:text})}>
    </input>
</div>
<div className="phonediv" > 
    <label for="phone">Phone number: </label>
    <input 
        className="phone"
        onChangeText={(text) => this.setState({phone:text})}>
    </input>
</div>
<div className="prefnamediv" > 
    <label for="preferredname">Preferred Name: </label>
    <input 
        className="preferredname"
        onChangeText={(text) => this.setState({preferredname:text})}>
    </input>
</div>
<div className="pronoundiv" > 
    <label for="preferredpronouns">Preferred Pronouns: </label>
    <input 
        className="preferredpronouns"
        onChangeText={(text) => this.setState({preferredpronouns:text})}>
    </input>
</div>
<div className="participation-check-submit">
    {/* <button type="submit" onClick={(e)=>newStudentHandler(e)}> */}
    <button type="submit" onClick={(e)=>newStudentHandler(e)}>
        Submit
    </button>

</div>
</form>
</div>
    )
}
export default EnrollStudentForm


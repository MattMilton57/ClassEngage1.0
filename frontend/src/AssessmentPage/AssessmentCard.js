import React, { Component } from 'react'
import './AssessmentCard.css'

const AssessmentCard = (props) => {
    const {onParticipating, onNotParticipating, student, comment} = props  
    const {name, id} = student
    const handleYes = (e) =>{
        e.preventDefault()
        console.log('hi')
        onParticipating(props.student)
    }
    const handleNo = (e) =>{
        e.preventDefault()
        console.log('ho')
        onNotParticipating(props.student, props.comment)
    }

    return (
        <div>
        <div className="student">
            <form id={id} className="studentCard">
                <label>Student: {name}</label><br></br>
                <div>
                <button  onClick={(e) =>handleYes(e)} >Participating</button>
                </div>
                <div>
                <button  onClick={(e) =>handleNo(e)} >Nope</button>
                </div>
                {/* </div>
                <label for="comment">Comment: </label>
                <input id="comment"></input>
                <div> */}


            </form>
        </div>
        <div className="breathingRoom">
        
            <br></br>
        </div>
        </div>
    )
    
}
export default AssessmentCard




// return (
//     <div>
//         <div>
//             <form id={id} className="studentCard">
//                 <label>Student: {name}</label><br></br>
//                 {/* <div onClick={handleYes} > */}
//                 <div className="participation-check" >
//                 {/* <l1>Participating</l1> */}
//                     <input 
//                         type="radio" 
//                         name="studentCard" 
//                         value="participating" 
//                         className="participation-check-options"
//                         // checked={this.state.selectedOption === "option1"}
//                     />Participating    
//                 </div>
//                 {/* <div  onClick={handleNo} > */}
//                 <div className="participation-check" >
//                 {/* <l1>Not Participating</l1> */}
//                     <input 
//                         type="radio" 
//                         name="studentCard" 
//                         value="participating" 
//                         className="participation-check-options"
//                         // checked={this.state.selectedOption === "option2"}
//                         // onChange={this.handleOptionChange}
//                     />Not Participating  
//                 </div>
//                 <div className="participation-check-comment" > 
//                     <label for="comment">Comment: </label>
//                     <input 
//                         className="participation-check-comment-entry">
//                     </input>
//                 </div>
//                 <div className="participation-check-submit">
//                     <button type="submit" onClick={(e)=>handleFormSubmit(e)}>
//                         Submit
//                     </button>

//                 </div>
//             </form>
//         </div>
//     <div className="breathingRoom">

//         <br></br>
//     </div>
//     </div>
// )










// import React, { Component } from 'react'
// import './StudentCard.css'

// const StudentCard = (props) => {
//     const {onParticipating, onNotParticipating, student, comment} = props  
//     const {name, id} = student
//     const handleFormSubmit = (e) =>{
//         e.preventDefault()
//         console.log('hi')
//         onParticipating(props.student)
//     }
//     const handleNo = () =>{
//         onNotParticipating(props.student, props.comment)
//     }


//     return (
//         <div>
//             <div>
//                 <form id={id} className="studentCard">
//                     <label>Student: {name}</label><br></br>
//                     {/* <div onClick={handleYes} > */}
//                     <div className="participation-check" >
//                     {/* <l1>Participating</l1> */}
//                         <input 
//                             type="radio" 
//                             name="studentCard" 
//                             value="participating" 
//                             className="participation-check-options"
//                             // checked={this.state.participation === "true"}
//                             // onChange={this.handleOptionChange}
//                         />Participating    
//                     </div>
//                     {/* <div  onClick={handleNo} > */}
//                     <div className="participation-check" >
//                     {/* <l1>Not Participating</l1> */}
//                         <input 
//                             type="radio" 
//                             name="studentCard" 
//                             value="not participating" 
//                             className="participation-check-options"
//                             // checked={this.state.participation === "false"}
//                             // onChange={this.handleOptionChange}
//                             className="form-check-input"
//                         />Not Participating  
//                     </div>
//                     <div className="participation-check-comment" > 
//                         <label for="comment">Comment: </label>
//                         <input 
//                             className="participation-check-comment-entry">
//                         </input>
//                     </div>
//                     <div className="participation-check-submit">
//                         <button type="submit" onClick={(e)=>handleFormSubmit}>
//                             Submit
//                         </button>

//                     </div>
//                 </form>
//             </div>
//         <div className="breathingRoom">
 
//             <br></br>
//         </div>
//         </div>
//     )
// }
// export default StudentCard

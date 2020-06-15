import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Class = (props) => {
    const { currentClass, stateForLink, period} = props
    const {id, subject} = period
    const sendTheClick = (e) =>{
        // e.preventDefault()
        console.log(props.period)
        stateForLink(props.period)
    }

    return (

        <Link to="menu" >
            <span className="card" style={{"display": "block"}}>
                <div onClick={(e) =>sendTheClick(e)} className={id}>
                    <li><a>{subject}</a></li>
                </div>
            </span>
        </Link>



    )



}
export default Class

// this.setState({ posts: posts 

// href="http://localhost:3001/menu" 

// <div onClick={(e) =>sendTheClick(e)} className={id}>
// {/* // onClick={(e)=>sendTheClick(e)}> */}
  
//   {/* <li>{subject}</li> */}
//   <li><a href="http://localhost:3001/menu" >{subject}</a></li>
//     {/* <h1>{subject}</h1> */}
 
// </div>
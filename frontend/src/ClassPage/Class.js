import React, { Fragment } from 'react'

const Class = (props) => {
    const { stateForLink, period} = props
    const {id, subject} = period
    const sendTheClick = () =>{
        // stateForLink(props.period.id)
        stateForLink(props.period)
    }

    return (
        <div className={id}
        onClick={sendTheClick}>
          
          {/* <li>{subject}</li> */}
          <li><a href="http://localhost:3001/assess">{subject}</a></li>
            {/* <h1>{subject}</h1> */}
         
        </div>
    )



}
export default Class

// this.setState({ posts: posts 
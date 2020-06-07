import React, { Fragment } from 'react'

const Class = (props) => {
    const {period} = props
    const {id, subject} = period

    return (
        <div className={id}>
          
         
            <h1>{subject}</h1>
         
        </div>
    )



}
export default Class
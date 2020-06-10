import React, { Component } from 'react'

const Stats = (props) => {
    const {score, name} = props

    return(
        <div>
            <label>test {name}  {score}</label>
        </div>
    )
}
export default Stats

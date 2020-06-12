import React, { Component } from 'react'

const Stats = (props) => {
    const {score, name} = props

    return(
        <div>
            <label>Student name: {name}, Current Score: {score}</label>
        </div>
    )
}
export default Stats

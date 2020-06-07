import React, { Component } from 'react'
import './StudentCard.css'

export default class StudentCard extends Component {

    render() {
        return(
            <div className="student">
                <form>
                    <label>Student Name</label><br></br>
                    <button>Participating</button>
                    <button>Not Participating</button>
                </form>
            </div>
        )
    }
}
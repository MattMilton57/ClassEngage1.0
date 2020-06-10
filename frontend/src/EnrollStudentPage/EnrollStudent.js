import React from 'react';
import { Link } from 'react-router-dom';
import EnrollStudentForm from './EnrollStudentForm'
const APIS = ('http://localhost:3000/students')


class EnrollStudent extends React.Component{

        constructor() {
            super();
        this.state = {
            name: "",
            parentname: "",
            phone: "",
            preferredname: "",
            preferredpronouns: ""
            };
        }

      componentDidMount() {
      }

      newStudentHandler = (e) =>{
        e.preventDefault()
        // console.log(e)
        this.newStudent()
    }

      newStudent = () => {
        let student = {
            name: this.state.name,
            parentname: this.state.parentname,
            phone: this.state.phone,
            preferredname: this.state.preferredname,
            preferredpronouns: this.state.preferredpronouns
        }
        // console.log(student)
        this.postStudent(student)
      }
      
      postStudent = (student) => {
        fetch((APIS), {
            method: 'POST',
            headers: {
                'access-control-allow-origin':'*',
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }, 
            body: JSON.stringify({student})
        })
        .then(res => res.json())
        .then(res => console.log(res))
      }

onChange = e => this.setState({ [e.target.name]: e.target.value })
     
render() {
    const{
        name,
        parentname,
        phone,
        preferredname,
        preferredpronouns 
    }= this.state;
    return(
        <div>
            <div>
                <Link to="/">
                    <button type="button">
                        landing page
                    </button>
                </Link>
                <div className='studentform'>
                    <form>
                    <div className="namediv" > 
                        <label for="name">Student Name: </label>
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.onChange}/>                    
                    </div>
                    <div className="parentdiv" > 
                        <label for="parentname">Parents Name: </label>
                        <input 
                            type="text"
                            name="parentname"
                            value={parentname}
                            onChange={this.onChange}/>
                    </div>
                    <div className="phonediv" > 
                        <label for="phone">Phone number: </label>
                        <input 
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={this.onChange}/>
                    </div>
                    <div className="prefnamediv" > 
                        <label for="preferredname">Preferred Name: </label>
                        <input 
                            type="text"
                            name="preferredname"
                            value={preferredname}
                            onChange={this.onChange}/>
                    </div>
                    <div className="pronoundiv" > 
                        <label for="preferredpronouns">Preferred Pronouns: </label>
                        <input 
                            type="text"
                            name="preferredpronouns"
                            value={preferredpronouns}
                            onChange={this.onChange}/>
                    </div>
                    <div className="participation-check-submit">
                        {/* <button type="submit" onClick={(e)=>newStudentHandler(e)}> */}
                        <button type="submit" onClick={(e)=>this.newStudentHandler(e)}>
                            Submit
                        </button>

                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
}

export default EnrollStudent
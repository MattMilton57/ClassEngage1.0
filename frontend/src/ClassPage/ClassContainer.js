import React from 'react';
import Class from './Class'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ClassMenu from '../ClassMenu/ClassMenu'


class ClassContainer extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            selectedClass:[]
        };
      }

    sendClasses() {
        return this.props.classes.map(period => {
            return (
                <Class 
                period={period}
                stateForLink={this.stateForLink}
                currentClass={this.state.selectedClass}/>
            )

        })
    }  

    componentDidMount(){
        console.log('hi')    
    }

    stateForLink = (period) => {
        this.setState({
            selectedClass: period
        })
        // console.log(period.id)
    }
   
    render(){
        return (
 
            <div>
                <div>
                {/* <Route 
        exact 
        path="/menu" 
        render={ props => 
          <ClassMenu {...this.props} 
            currentClass={this.state.selectedClass}
        />}
        /> */}
                </div>
                <div>
                {this.sendClasses()}
                </div>
                
             
            </div>
       
    )
    }
}
export default ClassContainer
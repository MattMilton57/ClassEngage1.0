import React from 'react';
import { Link } from 'react-router-dom';
import ClassContainer from './ClassContainer';

class ClassList extends React.Component{

  constructor() {
    super();
    this.state = {
      classes: [],
      selectedClass:""
    };
  }


componentDidMount() {
  console.log(this.props.allClasses)
  this.setState({
    classes: this.props.allClasses
  })
}

setCurrentClass = (period) =>{
  var thisPer = (period.id)
  // console.log(thisPer)
  this.props.thatClass(thisPer)
}




render() {
  return (
    <div>
               <div>
        <Link to="/stats">
            <button type="button">
                stats page
            </button>
        </Link>
        <Link to="/editclasses">
            <button type="button">
                edit classes
            </button>
        </Link>
        <Link to="/enroll">
            <button type="button">
                enroll student
            </button>
        </Link>
        <Link to="/">
            <button type="button">
                landing page
            </button>
        </Link>
      </div>
          Your Classes
        <div>
          <ClassContainer 
          classes={this.props.allClasses} 
          stateForLink={this.setCurrentClass}/>
        </div>
      </div>
    );
  }
}
export default ClassList




// fetch (API) 
// .then (res => res.json())
// // .then (res => (console.log(res)))
// .then (result => {
//   this.setState({
//     isLoaded: true,
//     classes: result
//   });
// });
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

// setCurrentClass = () => {
//   console.log("a click")
  // this.setState((prev) => {
  //   return {
  //     selectedClass: 
  //   }
  // })
// }

render() {
  return (
    <div>
          Your Classes
        <div>
          <ClassContainer 
          classes={this.props.allClasses} 
          stateForLink={this.setCurrentClass}/>
        </div>
            <Link to="/assess">
                {/* <button type="button"> */}
                    Im a temporary link to the assessment page
                {/* </button> */}
            </Link>
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
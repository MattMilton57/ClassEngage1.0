import React from 'react';
import { Link } from 'react-router-dom';
import ClassContainer from './ClassContainer';


const API = ('http://localhost:3000/periods')


class ClassList extends React.Component{

  constructor() {
    super();
    this.state = {
      classes: []
    };
  }


componentDidMount() {
  // console.log(API)
  fetch (API) 
  .then (res => res.json())
  // .then (res => (console.log(res)))
  .then (result => {
    this.setState({
      isLoaded: true,
      classes: result
    });
  });
}

render() {
    return (
      <div>
          Your Classes
        <div>
          <ClassContainer classes={this.state.classes} />
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
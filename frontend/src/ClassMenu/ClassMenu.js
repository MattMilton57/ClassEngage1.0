import React from 'react';
import { Link } from 'react-router-dom';


class ClassMenu extends React.Component{

  constructor() {
    super();
    this.state = {
      classes: [],
      selectedClass:""
    };
  }


componentDidMount() {

  console.log(this.props.currentClass)
  this.setState({
    selectedClass: this.props.currentClass
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
      <l1>{this.state.selectedClass}</l1>
      </div>
    );
  }
}
export default ClassMenu
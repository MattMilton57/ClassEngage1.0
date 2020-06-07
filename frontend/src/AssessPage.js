import React from 'react';
import StudentCard from './StudentCard'
import {students} from './StudentData'
const API = ('http://localhost:3000/students', { mode: 'no-cors' })

class AssessPage extends React.Component{

  constructor() {
    super();
    this.state = {
      students: []
    };
  }


componentDidMount() {
  fetch (students) 
  .then (res => res.json())
  .then (result => {
    this.setState({
      isLoaded: true,
      students: result
    });
  });
}

// componentDidMount(){
//   fetch(students)
//   .then (res=>res.json())
//   .then (data=>console.log(data))
//   // this.fetchStudents();
// }

// fetchStudents = () => {
// fetch(API)
// // .then (res=>res.json())
// .then (allStudents=>console.log(allStudents))
// .then (res=>res.text())
// .then (allStudents=>console.log(allStudents))
// }

// fetchStudents = () => {
// fetch(API, {

//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     // Authorization: localStorage.getItem("token")
//   }, 
//   body: JSON.stringify
// })
// .then(resp => resp.json())
// .then(data => 
//   console.log(data))
// }


// fetchSushi = () => {
//   fetch(API)
//     .then((res) => res.json())
//     .then((allSushi) => {
//       this.setState(
//         {
//           sushi: allSushi,
//         },
//         this.getNextSushi
//       );
//     });
// };



render() {
    return (
        <div>
      <div>
          Im the Assess page and I like cats.
          <button>Also, im a button</button>
        </div>
<br></br>
        <div className="student">
            Student to be assessed
          <StudentCard />
      </div>
      </div>
    );
  }
}
  export default AssessPage
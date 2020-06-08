import React from 'react';
import { Link } from 'react-router-dom';
class LandingPage extends React.Component{
render() {
    return (
      <div>
        Im the landing page and I like cheese.
        <Link to="/classlist">
            <button type="button">
                Click Me for the class list!
            </button>
        </Link>
      </div>
    );
  }
}
  export default LandingPage

//   <Link to="/classlist">Class List</Link>
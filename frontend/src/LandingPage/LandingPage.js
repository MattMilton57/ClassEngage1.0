import React from 'react';
import { Link } from 'react-router-dom';
class LandingPage extends React.Component{
render() {
    return (
      <div>
        <Link to="/classlist">
            <button type="button">
                class list!
            </button>
        </Link>
        <Link to="/stats">
            <button type="button">
                stats page
            </button>
        </Link>
      </div>
    );
  }
}
  export default LandingPage

//   <Link to="/classlist">Class List</Link>
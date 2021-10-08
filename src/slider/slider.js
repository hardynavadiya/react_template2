import React from "react";
import Team from '../img/services-06.jpg'

class Slider extends React.Component {
  render() {
    return (
      <div>
        <img src={Team} alt="team"  width="100%" height="500px"/>
      </div>
    );
  }
}

export default Slider;

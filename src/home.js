import React from "react";
import Slider from "./slider/slider";
import Services from "./services/services";
import Works from "./works/works";
import Footer from "./footer/footer";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Slider />
        <Services />
        <Works />
        <Footer />
      </div>
    );
  }
}

export default Home;

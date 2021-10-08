import React from "react";
import Workprops from "./workprops";
import Workall from "./worksall";
import './works.css';
class Works extends React.Component {
  render() {
    return (
      <div>
        <section class="py-5 mb-5">
          <div class="container">
            <div class="recent-work-header row text-center pb-5">
              <h2 class="col-md-6 m-auto h2 semi-bold-600 py-5">
                Recent Works
              </h2>
            </div>
            <div className ="main_work">
            {Workall.map((value) => {
              return (
                <>
                  <Workprops image={value.image} title = {value.title} />
                </>
              );
            })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Works;

import React from "react";
class Workprops extends React.Component {
  render() {
    return (
      <div>
        <div class="row gy-5 g-lg-5 mb-4 p-4">
          <div class=" mb-3">
            <a
              href="#ds"
              class="recent-work card border-0 shadow-lg overflow-hidden"
            >
              <img
                class="recent-work-img card-img"
                src={this.props.image}
                alt="Card " width="400px"
              />
              <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                  <h3 class="card-title light-300">{this.props.title}</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Workprops;

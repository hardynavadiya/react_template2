import React from "react";
import Servicesall from "./servicesall";

class Services extends React.Component {
  render() {
    return (
      <div>
        
        <h2 class="h2 text-center col-12 py-4 semi-bold-600">Services</h2>
        <section class="container overflow-hidden py-5">
          <div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
            {/* <!-- Start Recent Work --> */}
            {Servicesall.map((value) => {
              return (
                <div class="col-xl-3 col-md-4 col-sm-6 project ui branding">
                  <a
                    href="#f"
                    class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
                  >
                    <img class="service card-img" src={value.image} alt="Card " />
                    <div class="service-work-vertical card-img-overlay d-flex align-items-end">
                      <div class="service-work-content text-left text-light">
                        <span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                          UI/UX design
                        </span>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}

            {/* <!-- End Recent Work --> */}
          </div>
        </section>
        <section class="bg-secondary">
        <div class="container py-5">
            <div class="row d-flex justify-content-center text-center">
                <div class="col-lg-2 col-12 text-light align-items-center">
                    <i class="fas fa-box-open" style={{fontSize:"50px"}}></i>
                </div>
                <div class="col-lg-7 col-12 text-light pt-2">
                    <h3 class="h4 light-300">Great transformations successful</h3>
                    <p class="light-300">Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div class="col-lg-3 col-12 pt-4">
                    <a href="#h" class="btn btn-primary rounded-pill btn-block shadow px-4 py-2">View Our Work</a>
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  }
}

export default Services;

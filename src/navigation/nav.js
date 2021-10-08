import React from "react";
import Home from "../home";
import Services from "../services/services";
import Work from "../works/works";
import Footer from '../footer/footer';
import "./nav.css";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <nav
            id="main_nav"
            class="navbar navbar-expand-lg navbar-light bg-white shadow nav_css"
          >
            <div class="container d-flex justify-content-between align-items-center">
              <a class="navbar-brand h1" href="index.html">
                <i class="bx bx-buildings bx-sm text-dark"></i>
                <span class="text-dark h4">Ad</span>
                <span class="text-primary h4">Tech</span>
              </a>
              <button
                class="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-toggler-success"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                id="navbar-toggler-success"
              >
                <div class="flex-fill mx-xl-5 mb-2">
                  <ul class="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                    <li class="nav-item">
                      <Link
                        to="/"
                        class="nav-link btn-outline-primary rounded-pill px-3"
                      >
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="/services"
                        class="nav-link btn-outline-primary rounded-pill px-3"
                      >
                        services
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="/work"
                        class="nav-link btn-outline-primary rounded-pill px-3"
                      >
                        Work
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to="/footer"
                        class="nav-link btn-outline-primary rounded-pill px-3"
                      >
                        Footer
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                  <a class="nav-link" href="d">
                    <i class="far fa-bell"></i>
                  </a>
                  <a class="nav-link" href="d">
                    <i class="fas fa-cog"></i>
                  </a>
                  <a class="nav-link" href="d">
                    <i class="fas fa-user-tie"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/services">
              <Services />
            </Route>

            <Route path="/work">
              <Work />
            </Route>

            <Route path="/footer">
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Nav;

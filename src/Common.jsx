import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ once: false });

class Common extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section id="header" className="d-flex align-items-center" data-aos="zoom-in-right" data-aos-duration="2000" data-aos-offset="200" >
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                      {this.props.name}
                      <strong className="brand-name"> KB Data Systems Indonesia </strong>
                    </h1>

                    <h2 className="my-3">
                      {this.props.contentText}
                    </h2>

                    <div className="mt-3" data-aos="zoom-in-right">
                      <NavLink to={this.props.visit} className="btn orange-color">
                        {this.props.btname}
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      data-aos="zoom-in-left"
                      src={this.props.imgsrc}
                      className="img-fluid animated mb-20"
                      alt=""
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Common;

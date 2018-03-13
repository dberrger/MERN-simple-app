import React, {Component} from "react";
import test from '../styles/images/t2.jpg';
import labs from '../styles/images/l2.jpg';

class Home extends Component {
    render() {
        return(
            <div>
            <section className="banner jarallax">
          <div className="navigation">
            <div className="container">
              <nav className="navbar navbar-default">
                <div className="navbar-header navbar-left">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                </div>
                <div className="logo">
                  <h1><a className="navber-brand" href="index.html"><i className="fa fa-heartbeat" aria-hidden="true"></i> Sanatorium</a></h1>
                </div>
                <div className="collapse navbar-collapse navbar-right navigation-right" id="bs-example-navbar-collapse-1">
                  <nav className="link-effect-3 w3ls-navma" id="link-effect-3">
                    <ul className="nav1 navbar-nav nav nav-wil">
                      <li className="active"><a data-hover="Home" href="index.html">Home</a></li>
                      <li><a data-hover="appointment" href="#appointment" className="scroll">appointment</a></li>
                      <li><a data-hover="Services" href="#services" className="scroll">Services</a></li>
                      <li><a data-hover="Staff" href="#staff" className="scroll">Staff</a></li>
                      <li><a data-hover="lab" href="#grid-gallery" className="scroll">lab</a></li>
                      <li><a data-hover="Contact" href="#contact" className="scroll">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="w3ls_banner_info del">
            <div className="container">
              <div className="w3l-banner-grids">
                <div className="slider">
                  <div className="callbacks_container">
                    <ul className="rslides" id="slider4">
                      <li>
                        <div className="w3ls-text">
                          <h3>welcome to sanatorium</h3>
                          <h3> the right potential</h3>
                          <p>Cras ultrices lorem a hendrerit condim</p>
                        </div>
                      </li>
                      {/* <li>
                        <div className="w3ls-text">
                          <h3>Good hospitality</h3>
                          <h3>super services</h3>
                          <p>Proin convallis leo vitae ligula portti</p>
                        </div>
                      </li>
                      <li>
                        <div className="w3ls-text">
                          <h3>healthy environment</h3>
                          <h3>with clean & Green</h3>
                          <p>Cras ultrices lorem a hendrerit condim</p>
                        </div>
                      </li>
                      <li>
                        <div className="w3ls-text">
                          <h3>best treatment and </h3>
                          <h3> good care</h3>
                          <p>Cras ultrices lorem a hendrerit condim</p>
                        </div>
                      </li> */}
                    </ul>
                  </div>

                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="appointment">
          <div className="container">
            <h2>appointment</h2>
            <div className="about-grids">
              <div className="col-md-3 col-sm-3 col-xs-3 abt-lt-grid text-center">
                <h4>our timing</h4>
                <p>Monday-Saturday</p>
                <p>7am-10pm</p>
                <p>Sunday(no appointment)</p>
                <p className="ma-p"><i className="fa fa-phone" aria-hidden="true"></i>+16 33 44 2345</p>

              </div>
              <div className="col-md-9 col-sm-9 col-xs-9 abt-rt-grid">
                <div className="w3ls-grid-head text-center">
                  <h6>appointment</h6>
                  <h3>online booking</h3>
                </div>
                <div className="abt-form text-center">
                  <form action="#" method="post">
                    <div className="col-sm-4 col-xs-4 w3ls-lt-form">
                      <div className="w3ls-pr">
                        <input type="text" name="Division" placeholder="Division" required="required"/>
                        <input type="text" name="Name" placeholder="Name"/>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-4 w3ls-lt-form">
                      <div className="w3ls-pr">
                        <input type="date" name="date" required="required"/>
                        <input type="tel" name="phone no" placeholder="Phone no" required="required"/>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-4 w3ls-lt-form">
                      <div className="w3ls-pr">
                        <input type="time" name="time" required="required"/>
                        <input type="email" name="email" placeholder="Email" required="required"/>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <input type="submit" value="Book Now" onclick="booking()"/>

                  </form>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </section>

        <div className="agile_secives jarallax del" id="services">
          <div className="container">
            <h3>What we Do</h3>
            <div className="markets-grids">
              <div className="col-md-4 w3ls-markets-grid">
                <div className="agileits-icon-grid">
                  <div className="icon-left">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </div>
                  <div className="icon-right">
                    <h5>Emergency Unit</h5>
                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 w3ls-markets-grid">
                <div className="agileits-icon-grid">
                  <div className="icon-left">
                    <i className="fa fa-ambulance" aria-hidden="true"></i>
                  </div>
                  <div className="icon-right">
                    <h5>Emergency Help</h5>
                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 w3ls-markets-grid">
                <div className="agileits-icon-grid">
                  <div className="icon-left">
                    <i className="fa fa-medkit" aria-hidden="true"></i>
                  </div>
                  <div className="icon-right">
                    <h5>Health Care</h5>
                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 w3ls-markets-grid">
                <div className="agileits-icon-grid">
                  <div className="icon-left">
                    <i className="fa fa-flask" aria-hidden="true"></i>
                  </div>
                  <div className="icon-right">
                    <h5>Research</h5>
                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 w3ls-markets-grid">
                <div className="agileits-icon-grid">
                  <div className="icon-left">
                    <i className="fa fa-line-chart" aria-hidden="true"></i>
                  </div>
                  <div className="icon-right">
                    <h5>Lab Test Reports</h5>
                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 w3ls-markets-grid">
                <div className="agileits-icon-grid">
                  <div className="icon-left">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                  <div className="icon-right">
                    <h5>Visiting Hours</h5>
                    <p>Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat..</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>

        <section className="team del" id="staff">
          <div className="container">
            <h3>staff </h3>
            <div className="agile-team-grids">
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>williamson</h4>
                  <h5>director</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>fisher</h4>
                  <h5>Nurse</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>jesse</h4>
                  <h5>co.director</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>riley</h4>
                  <h5>doctor</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>olivia</h4>
                  <h5>nurse</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>patrick</h4>
                  <h5>doctor</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>garrett</h4>
                  <h5>doctor</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 agile-w3ls">
                <div className="team-grid text-center">
                  <img src={test} alt="image" className="img-responsive" />
                  <h4>alvarez</h4>
                  <h5>nurse</h5>
                  <div className="social-icons-tm">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </section>

        <section className="grid-gallery del" id="grid-gallery">
          <div className="container">
            <h3 className="title text-center">Lab</h3>
            <section className="grid-wrap">
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href={labs} className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href={labs} className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href={labs} className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid project_icon">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l4.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l5.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid project_icon">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l6.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l7.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l8.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l9.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l10.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l11.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-3 agileinfo_portfolio_grid">
                <a href="images/l12.jpg" className="lsb-preview" data-lsb-group="header">
                  <div className="agileits_portfolio_grid">
                    <img src={labs} alt=" " className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="clearfix"> </div>

            </section>

          </div>

        </section>

        <section className="testimonial del jarallax">
          <div className="container">
            <h3>testimonial</h3>
            <div className="testi-grid">
              <div className="col-md-6 col-sm-6 col-xs-6 w3ls-text-grid">
                <h4>our staff believe our work and good humanity</h4>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 fslider-grid">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <div className="testi-w3ls text-center">
                        <div className="testi-text">
                          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris consectetur
                            nisl hendrerit dapibus bibendum. Mauris in purus fringilla, bibendum dui vel, mattis arcu.
                          </p>
                        </div>
                        <div className="testi-img">
                          <img src="images/ts1.jpg" alt="images" />
                          <h5>Angle</h5>
                          <h6>subtitle</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testi-w3ls text-center">
                        <div className="testi-text">
                          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris consectetur
                            nisl hendrerit dapibus bibendum. Mauris in purus fringilla, bibendum dui vel, mattis arcu.
                          </p>
                        </div>
                        <div className="testi-img">
                          <img src="images/ts2.jpg" alt="images" />
                          <h5>Jesse</h5>
                          <h6>subtitle</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testi-w3ls text-center">
                        <div className=" testi-text">
                          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris consectetur
                            nisl hendrerit dapibus bibendum. Mauris in purus fringilla, bibendum dui vel, mattis arcu.
                          </p>
                        </div>
                        <div className="testi-img">
                          <img src="images/ts3.jpg" alt="images" />
                          <h5>Rosse lee</h5>
                          <h6>subtitle</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-map del" id="contact">
          <div className="container">
            <div className="w3ls-con-map-main-grids">
              <div className="col-md-6">
                <div className="w3ls-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24561.4917541168!2d-74.26553697858265!3d39.69051118517855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c107b00044297b%3A0x9354ddfde6a7883b!2sManahawkin%2C+Stafford+Township%2C+NJ+08050%2C+USA!5e0!3m2!1sen!2sin!4v1486031546252"
                      allowfullscreen></iframe>
                </div>
              </div>
              <div className="col-md-6">
                <div className="wthree-contact-left-grid">
                  <div className="contact-head">
                    <h4>contact us </h4>
                    <div className="information">
                      <ul className="agile-inf">
                        <li><i className="fa fa-home" aria-hidden="true"></i>11/665 postal street, park avenue,USA</li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i>+040 6656 776 665</li>
                        <li><i className="fa fa-envelope" aria-hidden="true"></i><a className="w3ls-a" href="mailto:example@email.com"> mail@example.com</a></li>
                        <li><i className="fa fa-globe" aria-hidden="true"></i><a className="w3ls-a" href="mailto:example@email.com">www.example.com</a></li>
                      </ul>
                    </div>

                    <div className="contact-form-w3ls">
                      <form action="#" method="post">
                        <div className="col-sm-6 col-xs-6 w3ls-ma">
                          <input type="text" placeholder="Name" required="required" />
                        </div>
                        <div className="col-sm-6 col-xs-6 w3l-ma">
                          <input type="email" placeholder="E-mail" required="required" />
                        </div>
                        <div className="clearfix"></div>
                        <textarea placeholder="Message" required="required"></textarea>
                        <input type="submit" value="send" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </section>

        <section className="footer-top  del jarallax">
          <div className="container">
            <div className="footer-grids">
              <div className="w3ls-top-ft text-center">
                <span>get to know</span>
                <h3>hospitality</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis quam non lacus accumsan aliquet</p>
                <div className="srv-w3ls">
                  <a href="#" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Read More</a>
                </div>
              </div>
              <div className="w3ls-bt-ft">
                <div className="navigation-w3ls">
                  <nav className="navbar-btm">
                    <div className="logo">
                      <h3><a className="navber-brand" href="index.html"><i className="fa fa-heartbeat" aria-hidden="true"></i>sanatorium</a></h3>
                    </div>
                    <div className="footer-nav">
                      <ul className="nav1 w3ls-ma">
                        <li className="active"><a data-hover="Home" className="scroll" href="#home">Home</a></li>
                        <li><a data-hover="appointment" href="#appointment" className="scroll">Appointment</a></li>
                        <li><a data-hover="OurStaff" href="#staff" className="scroll">OurStaff</a></li>
                        <li><a data-hover="ourlab" href="#grid-gallery" className="scroll">Our lab</a></li>
                        <li><a data-hover="Contact" href="#contact" className="scroll">Contact</a></li>
                      </ul>
                    </div>
                  </nav>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="col-md-6 col-sm-6 col-xs-6 copy-right-grids">
                  <div className="copy-left">
                    <p className="footer-gd">© 2017 Sanatorium. All Rights Reserved | Design by <a href="https://w3layouts.com/" target="_blank">W3layouts</a></p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 top-middle">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">sanatorium</h4>
              </div>
              <div className="modal-body agileits">
                <div className="modal-img">
                  <img src="./images/md.jpg" alt="image"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque orci consectetur sapien feugiat fermentum.
                  Phasellus convallis efficitur arcu, nec convallis odio egestas sit amet. Praesent erat sem, finibus vel ornare efficitur,
                  mattis sed risus. Duis ornare sodales dui finibus molestie.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        );
    }
}

export default Home;
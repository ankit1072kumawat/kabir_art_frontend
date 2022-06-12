import logo from "./../../Images/logo.png";

import "./testimonial.scss";
import { Link } from "react-router-dom";



function Testimonial() {
  return (
    <section class="testimonial">
          <div class="container">
              <div class="row">
                <div class="col-md-4 col-lg-3">
                  <div class="testimonial-img" data-aos="fade-up" data-aos-duration="500">
                    <img src="images/testimonial-img.jpg"/>
                    <div class="quote-icon">
                      <i class="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-8 col-lg-8 offset-lg-1">
                  <div class="testimonial-inner" data-aos="fade-up" data-aos-duration="500">
                    <div class="common-heading">
                      <h2>What People Say <span>About Us</span></h2>
                    </div>
                    <div class="testimonial-inner-title">
                      <h4>Testimonials</h4>
                    </div>
                    <div id="testimonial" class="carousel slide" data-ride="carousel">
                      <ul class="carousel-indicators">
                        <li data-target="#testimonial" data-slide-to="0" class="active"></li>
                        <li data-target="#testimonial" data-slide-to="1"></li>
                        <li data-target="#testimonial" data-slide-to="2"></li>
                      </ul>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="testimonial-item">
                            <p>Phasellus id sem ligula. Curabitur tempor enim lacinia ornare semper. Sed ornare consequat consequat. Fusce ligula est, pellentesque in leo sed, dignissim volutpat orci. Morbi pulvinar, libero et scelerisque molestie, nunc purus maximus tellus, id ornare magna quam sit amet urna. In sit amet malesuada dui. Proin imperdiet, urna sed tempus dictum, lectus urna lacinia metus, sit amet malesuada massa ex vitae odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <div class="user-name">
                              <h3>Pankaj Saini</h3>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="testimonial-item">
                            <p>Phasellus id sem ligula. Curabitur tempor enim lacinia ornare semper. Sed ornare consequat consequat. Fusce ligula est, pellentesque in leo sed, dignissim volutpat orci. Morbi pulvinar, libero et scelerisque molestie, nunc purus maximus tellus, id ornare magna quam sit amet urna. In sit amet malesuada dui. Proin imperdiet, urna sed tempus dictum, lectus urna lacinia metus, sit amet malesuada massa ex vitae odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <div class="user-name">
                              <h3>Pankaj Saini</h3>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="testimonial-item">
                            <p>Phasellus id sem ligula. Curabitur tempor enim lacinia ornare semper. Sed ornare consequat consequat. Fusce ligula est, pellentesque in leo sed, dignissim volutpat orci. Morbi pulvinar, libero et scelerisque molestie, nunc purus maximus tellus, id ornare magna quam sit amet urna. In sit amet malesuada dui. Proin imperdiet, urna sed tempus dictum, lectus urna lacinia metus, sit amet malesuada massa ex vitae odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <div class="user-name">
                              <h3>Pankaj Saini</h3>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
       

  );
}

export default Testimonial;

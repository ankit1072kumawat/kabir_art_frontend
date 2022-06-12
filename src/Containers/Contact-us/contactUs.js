import React from "react";
import "./contactUs.scss";


const ContactUs = () => {
  return (
    <div className="contactUs-page">
      <section class="common-banner">
        <div class="container">
          <div class="about-filter-box" data-aos="fade-down" data-aos-duration="1000">
            <h1>Contact Us</h1>
          </div>
        </div>
      </section>
      <div className="container">
        {/* common-heading */}
        {/* <div className="common-heading">
          <div className="common-heading-title">
            <h2>Contact Us</h2>
          </div>
        </div> */}

        {/* contactUs-inner */}
        <div className="contactUs-inner">
          <div className="row">
            <div className="col-md-5 col-lg-4">
              <div className="address-detail">
                {/* address-detail-item */}
                <div className="address-detail-item">
                  <div className="address-icon">
                    <span>
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <div className="address-content">
                    <span>Address</span>
                    <p>36-B laxmi ngar, Niwaru Road, Jhotwara, Jaipur -302012, Rajasthan, India</p>
                  </div>
                </div>
                {/* address-detail-item */}
                <div className="address-detail-item">
                  <div className="address-icon">
                    <span>
                      <i class="far fa-envelope"></i>
                    </span>
                  </div>
                  <div className="address-content">
                    <span>Email</span>
                    <p>kabirart16@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8">
              <div className="address-mep">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3508.005615895847!2d-81.48372558544465!3d28.449247099104536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1619089247704!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe> */}
                <iframe width="100%"
                  height="350"
                  allowfullscreen=""
                  loading="lazy" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=36%20B,%20Laxmi%20nagar,%20Niwaru%20road,%20Netajiki%20chakki,%20Jhotwara,%20jaipur%20jaipur+(Kabir%20Art)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      );
};

      export default ContactUs;

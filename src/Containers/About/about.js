import "./../About/about.scss";
// import "./../";
import BgImg from "../../Images/client.png";
import Testimonial from "../../Components/Testimonial/testimonial";

function About() {
  return (
    <div className="contactUs-page">
           <section class="common-banner">
          <div class="container">
            <div class="about-filter-box" data-aos="fade-down" data-aos-duration="1000">
              <h1>About us</h1>
            </div>
          </div>
        </section>
      <div className="container">
        {/* contactUs-inner */}
        <section class="about-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-5">
                  <div class="about-section-img" data-aos="fade-up" data-aos-duration="500">
                    <img src="images/about-safari-escape-img.png"/>
                  </div>
              </div>
              <div class="col-md-12 col-lg-7">
                <div class="common-heading" data-aos="fade-up" data-aos-duration="500">
                  <h2>About <span>Kabir Art</span></h2>
                </div>
                <div class="about-pera" data-aos="fade-up" data-aos-duration="500">
                  <p><b>Kabir art was established in 1971 as a crafts and handicrafts by Mr. ChhitarMal Kumawat. </b></p>
                  <p>Kabir Art is a curated collection of all things ethnic. From finely handicrafted items to intricately to the wall decore items, Kabir Art offers you an exclusive range of India’s most beautiful creations for you home. Indian handicrafts are famous all across the globe because they are inventive and incomparable with lots of craftsmanship. They immensely seize the vibrant practice of India.</p>
                </div>
              </div>
              <div class="col-md-12">
                <div class="about-pera" data-aos="fade-up" data-aos-duration="500">
                  {/* <p>Phasellus id sem ligula. Curabitur tempor enim lacinia ornare semper. Sed ornare consequat consequat. Fusce ligula est, pellentesque in leo sed, dignissim volutpat orci. Morbi pulvinar, libero et scelerisque molestie, nunc purus maximus tellus, id ornare magna quam sit amet urna. In sit amet malesuada dui. Proin imperdiet, urna sed tempus dictum, lectus urna lacinia metus, sit amet malesuada massa ex vitae odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                  <p>Aenean magna sapien, dictum at nibh a, tristique accumsan diam. Maecenas aliquet odio ut lacus tristique mollis. Aliquam eu elit eu nisi fermentum volutpat ac eu tortor. Integer vulputate eget tortor a imperdiet. Morbi nec bibendum ligula, sit amet ullamcorper augue. Nullam vitae venenatis lorem. Etiam commodo volutpat pretium. Maecenas pharetra condimentum nibh et scelerisque. Curabitur suscipit sollicitudin neque ut consectetur.</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        {/* <Testimonial /> */}
    </div>
  );
}

export default About;

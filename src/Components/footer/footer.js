import { Link } from "react-router-dom";
import { categories } from './../../constants/constant'
import paytm from "./../../Images/icons/paytm.png";
import flipkart from "./../../Images/icons/flipcart.png";
import etsy from "./../../Images/icons/etsy.png";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="500">
              <div class="footer-hediang">
                <h3>About Us</h3>
              </div>
              <div class="footer-about">
                <p>Kabir art was established in 1971 as a crafts and handicrafts by my grandfather Mr. ChhitarMal Kumawat. Kabir Art is a curated collection of all things ethnic. From finely handicrafted items to intricately to the wall decore items, Kabir Art offers you an exclusive range of India’s most beautiful creations for you home.</p>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="500">
              <div class="footer-hediang">
                <h3>Category</h3>
              </div>
              <div class="footer-links">
                <ul>
                  {categories.map((item) => {
                    return <Link target="_blank" to={{
                        pathname: `/category/${item.id}`
                      }}>

                        <li><i class="fas fa-chevron-right"></i> <span>{item.name}</span></li>
                      </Link>
                  

                  })}
                </ul>
              </div>

            </div>
            <div class="col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="500">
              <div class="footer-hediang">
                <h3>Contact Us</h3>
              </div>
              <div class="contact-info mb-4">
                <ul>
                  <li><span>Phone:</span> +91-9782677660</li>
                  <li><span>E-mail:</span> support@sitename.com</li>
                  {/* <li><span>Website:</span> sitename.com</li> */}
                </ul>
              </div>
              <div class="social-links">
                <ul>
                  <li><a href="https://in.pinterest.com/kabirart16/" target="_blank" rel="noreferrer"><i class="fab fa-pinterest"></i></a></li>
                  <li><a  href="https://www.amazon.in/stores/PURUSHOTTAM+KABIR+ART/page/08D4E16C-795D-4DB3-B9B3-CD4522CEC30E?ref_=ast_bln" target="_blank" rel="noreferrer"><i class="fab fa-amazon"></i></a></li>
                  <li><a href="https://www.flipkart.com/search?q=purushottam%20kabir%20art&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" target="_blank" rel="noreferrer"> <img src={flipkart} /> </a></li>
                  <li><a href="https://www.etsy.com/in-en/shop/KabirartIndia?ref=simple-shop-header-name&listing_id=830863928" target="_blank" rel="noreferrer"> <img src={etsy}/> </a></li>
                  <li><a href="https://paytmmall.com/shop/search?q=kabir%20art%20clock&from=organic&child_site_id=6&site_id=2&category=6354&brand=486070" target="_blank" rel="noreferrer"> <img src={paytm} /> </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>© Copyright 2021 <span>Safari Escape.</span> All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

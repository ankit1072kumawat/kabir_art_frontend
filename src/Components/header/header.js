import logo from "./../../Images/logo.png";
// import logo from "./../../Images/logo.png";
// import Silver from "../../assets/images/Silver.png";
// import Gold from "../../assets/images/Gold.png";
import "./header.scss";
import { Link } from "react-router-dom";



function Header() {
  return (
    <header class="header">
      <div class="container">
        <nav class="navbar navbar-expand-md">
          <a class="navbar-brand" href="javascript:;">
            {/* <img src="images/logo.png"/> */} <h3>KABIR ART</h3>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
            <li class="nav-item">
            <Link class="nav-link active" data-lightbox="example-set1" to={'/'}>Home</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" data-lightbox="example-set1" to={'/'}>Products</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" data-lightbox="example-set1" to={'/about-us'}>About Us</Link>
              </li>
             
              <li class="nav-item">
              <Link class="nav-link" data-lightbox="example-set1" to={'/contact-us'}>Contact Us</Link>
              </li>
              {/* <li class="nav-item">
              <Link class="nav-link cart-btn" data-lightbox="example-set1" to={'/cart'}>Cart<i class="fas fa-shopping-cart"></i>
                  <span>10</span></Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
    // <header class="header">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-7 col-sm-5">
    //           <div class="header-logo">
    //             {/* <img src={logo}/>
    //              */}
    //              <h3>Purushottam Kabir art</h3>
    //                            </div>
    //         </div>
    //         <div class="col-5 col-sm-7">
    //           <div class="header-btn">
    //             <button type="button" class="theme-btn red-btn">Products</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>

  );
}

export default Header;

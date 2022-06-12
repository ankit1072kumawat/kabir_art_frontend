import "./checkout.scss";
import BgImg from "../../Images/client.png";
import product from "./../../Images/product-img.jpg";
import productDetailBg from "./../../Images/product-detail-bg.jpg";
import { getproductDetail } from "../../Redux/Action/productaction"
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'


function Checkout(props) {
return(
<div class="main-container">
<div class="checkout-page">

<div class="container">

  <div class="products-page-banner">
    <div class="banner-img">
      <img src="images/product-detail-bg.jpg" />
    </div>
    <div class="breadcrumbs">
      <ul>
        <li>
          <a href="javascript:;">Home</a>
        </li>
        <li>
          <a href="javascript:;">Product detail</a>
        </li>
        <li>Checkout</li>
      </ul>
    </div>
  </div>

 <div class="checkout-section">
    <div class="common-heading">
      <h2>Checkout</h2>
    </div>
    <div class="checkout-card">
      <div class="row">
        <div class="col-lg-6">
          <div class="billing-information">

            <div class="information-box">
              <div class="billing-heading">
                <h2>Billing details</h2>
              </div>
              <div class="billing-form">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>First name <sup>*</sup></label>
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Last name <sup>*</sup></label>
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Company name (optional) <sup>*</sup></label>
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Country / Region <sup>*</sup></label>
                        <select class="form-control">
                          <option>Loream Ipsume</option>
                          <option>Loream Ipsume</option>
                          <option>Loream Ipsume</option>
                          <option>Loream Ipsume</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Street address <sup>*</sup></label>
                        <input type="text" class="form-control" placeholder="House number and street name"/>
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Apartment, suite, unit, etc. (optional)"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Town / City <sup>*</sup></label>
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>State <sup>*</sup></label>
                        <select class="form-control">
                          <option>Loream Ipsume</option>
                          <option>Loream Ipsume</option>
                          <option>Loream Ipsume</option>
                          <option>Loream Ipsume</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>ZIP <sup>*</sup></label>
                        <input type="number" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Phone <sup>*</sup></label>
                        <input type="number" class="form-control"/>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Email address <sup>*</sup></label>
                        <input type="email" class="form-control"/>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div class="information-box">
              <div class="billing-heading">
                <h2>Additional information</h2>
              </div>
              <div class="billing-form mb-0">
                  <div class="row">
                    
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Order notes (optional)</label>
                        <textarea class="form-control" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                      </div>
                    </div>
                  </div>
              </div>
            </div>



          </div>
        </div>
      
        <div class="col-lg-6">
          <div class="order-card">
              <div class="order-heading">
                <h2>Your order</h2>
              </div>
              <div class="order-price-table">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Charging Dock Stand Station Charger Holder For Apple <span>× 1</span></td>
                        <td>$88.88</td>
                      </tr>
                      <tr>
                        <td>Charging Dock Stand Station Charger Holder For Apple <span>× 1</span></td>
                        <td>$88.88</td>
                      </tr>
                      <tr>
                        <td>Charging Dock Stand Station Charger Holder For Apple <span>× 1</span></td>
                        <td>$88.88</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Subtotal</th>
                        <th>$88.88</th>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <th>$88.88</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div class="order-info-box">
                <i class="fas fa-info-circle"></i> 
                <p>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
              </div>
              <div class="order-pera">
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="javascript:;">privacy policy.</a></p>
              </div>
              <div class="place-order-btn">
                <button type="button" class="theme-btn purple-btn">
                  Place order
                </button>
              </div>
          </div>
        </div>

      </div>
    </div>
 </div> 
</div>
</div>
</div>);
}
export default Checkout;

import "./productDetail.scss";
import BgImg from "../../Images/client.png";
import product from "./../../Images/product-img.jpg";
import productDetailBg from "./../../Images/product-detail-bg.jpg";
import { getproductDetail } from "../../Redux/Action/productaction"
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
function ProductDetail(props) {

  const [product, setproduct] = useState([]);
  const [state,setState] = useState({
    counter:1
  })
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      console.log(props.match.params.categoryId)
      let productId = props.match.params.productId
      const productDetail = await dispatch(getproductDetail(productId))
      setproduct(productDetail.data.product)
      console.log(product)
    })()
  }, [])


const changequantity = (type) => {
  console.log('*******',state.counter)
  // setState({counter :0})
  debugger
  if(state.counter >= 1) {

    if(type === 'increment') {
      setState({counter: state.counter+1})
      
    } else {
      if(state.counter > 1)
      setState({counter: state.counter-1})
      
    }
  }
}

  return (
    <div class="main-container">

      <div class="product-detail-page">

        <div class="container">
          <div class="product-detail-inner">

            <div class="products-page-banner">
              <div class="banner-img">
                <img src={productDetailBg} />
              </div>
              <div class="breadcrumbs">
                <ul>
                  <li>
                    <a href="javascript:;">Home</a>
                  </li>
                  <li>Product detail</li>
                </ul>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-5">
                <div class="product-slider" data-aos="fade-up" data-aos-duration="500">
                  <div class="slider">
                    <div id="slider" class="flexslider">

                      <img src={product.product_image} class="zoom__pic" alt=""
                      />

                    </div>

                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-7">
                <div class="product-detail" data-aos="fade-up" data-aos-duration="500">
                  <div class="product-name">
                    <h2>{product.name}</h2>
                  </div>
                  <div class="product-stock">
                    <p>Availability : In Stock</p>
                  </div>
                  <div class="product-price">
                    <p>{product.price}</p>
                  </div>
                  <div class="product-brif">
                    <p>{product.description}</p>
                  </div>

                  <div class="product-colors">
                    <div class="product-colors-head">
                      <h3>Colors:</h3>
                    </div>
                    <div class="product-colors-list">
                      <ul>
                        {product?.product_image?.map((img) => {
                          return <li>
                            <a >
                              <img src={product.product_image} alt="" />
                            </a>
                          </li>
                        })}
                      </ul>
                    </div>
                  </div>

                  <div class="product-quantity">
                    <label>Quantity :</label>
                    <div class="quantity-input form-group">
                      <button class="quantity-btn" type="button" onClick={() => {changequantity('decrement')}} >
                        <i class="fas fa-minus"></i>
                      </button>
                      <input type="number" class="form-control" value={state.counter} />
                      <button class="quantity-btn" type="button"  onClick={() => {changequantity('increment')}}>
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div class="product-btns">
                    <button
                      type="button"
                      class="theme-btn whatsapp-btn"
                    >
                      <i class="fab fa-whatsapp"></i> Check Product Availability
              </button>
                    <button
                      type="button"
                      class="theme-btn purple-btn"
                    >
                      <i class="fas fa-shopping-cart"></i> Add to Cart
              </button>
                    <button
                      type="button"
                      class="theme-btn red-btn"
                    >
                      Buy Now
              </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;

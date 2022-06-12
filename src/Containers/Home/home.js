import "./home.scss";
import banner from "./../../Images/banner.png";
import { getproductList } from "../../Redux/Action/productaction"
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import { categories } from './../../constants/constant'
function Home() {
  const [productList, setproductList] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    const list = await dispatch(getproductList())
    setproductList(list?.data?.data?.product)
    console.log('>>>>>>>>>>>>>>>>>>>>', productList, list.data.data.product)
  }



  return (

    <div class="main-container">
      <section class="home-banner">
        <div id="homeBanner" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
          <div class="carousel-item active">
              <img src='https://images-na.ssl-images-amazon.com/images/I/812GLxLruqL._SL1500_.jpg' alt="" />
            </div>
            <div class="carousel-item">
              <img src='https://images-na.ssl-images-amazon.com/images/I/71H4d7pV8sL._SL1500_.jpg' alt="" />
            </div>
            <div class="carousel-item">
              <img src='https://superadmin.homes247.in/images/blog/vastu-clock/living-room-wall-clock.jpg' alt="" />
            </div>
            <div class="carousel-item">
              <img src='https://www.wrapupbox.com/upload/slider/slider-1611040555072.jpg' alt="" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#homeBanner" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#homeBanner" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>

      <section class="home-category">
        <div class="container">
          <div class="heading" data-aos="fade-up" data-aos-duration="500">
            <h2>Choose category</h2>
          </div>

          <div class="home-category-list" data-aos="fade-up" data-aos-duration="500">
            <div class="row">
              {categories?.map((item) => {
                return <div class="col-sm-6 col-md-6 col-lg-3 pl-0 pr-0">
                  <Link class="category-item" to={{
                    pathname: `/category/${item.id}`
                  }}>

                    <div class="item-content">
                      <h3>{item.name}</h3>
                    </div>
                    <div class="item-img">
                      <img src={item?.imgUrl} />
                      <img src="images/category-item.jpg"/>
                    </div>
                  </Link>
                </div>

              })}
            </div>
          </div>


        </div>
      </section>

      <section class="home-product">
        <div class="container">
          <div class="common-heading">
            <h2>
              All Products
            </h2>
          </div>
          <div class="home-product-inner">

            <div class="row">

              {/* {productList && productList?.map((product) => {
                console.log(product)
                return <div class="col-6 col-sm-6 col-md-4 col-lg-2">
                  <div class="product-item" data-aos="fade-up" data-aos-duration="500">
                    <div class="product-img">
                      <Link class="category-item" data-lightbox="example-set1" to={{
                        pathname: `/product-detail/${product._id}`
                      }}>
                        <img src={product.product_image} alt="product_image" /></Link>
                    </div>
                    <div class="product-content">
                      <h3>    <Link class="category-item" to={{
                        pathname: `/product-detail/${product._id}`
                      }}>{product.name}</Link></h3>
                      <div class="product-content-inner">
                        <div class="link-icon">
                          <Link class="category-item" to={{
                            pathname: `/product-detail/${product._id}`
                          }}>
                            <i class="fas fa-external-link-square-alt"></i></Link>
                        </div>
                        <div class="price">
                          <p>{product.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              })} */}
            </div>

          </div>
        </div>





      </section>



    </div>
  );
}

export default Home;

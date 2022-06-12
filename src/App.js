import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./Styles/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "../src/Containers/Home/home";
import Category from "../src/Containers/Category/category";
import ProductDetail from "../src/Containers/product-detail/productDetail";
// import About from "./Containers/About/about";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Checkout from "./Containers/checkout/checkout";
import ContactUs from "./Containers/Contact-us/contactUs";
import About from "./Containers/About/about";
import AddProduct from "./Containers/add-product/addProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/category/:categoryId" component={Category} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/add-product" component={AddProduct} />
        <Route exact path="/product-detail/:productId" component={ProductDetail} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

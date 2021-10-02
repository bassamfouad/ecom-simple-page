import React from "react";
import Categories from "./components/categories/Categories";
import "./App.css";
import Filter from "./components/filters/Filter";
import ProductLists from "./components/productLists/ProductLists";
const App = () => {
  return (
    <div className="container-fluid ">
      <div className="row bg-grey text-white bg-dark">
        <div className="col-xl-12 col-sm-12 text-center">
          <h1>Our E-commerce Store</h1>
          <h4>Choose One Of Our Categories From Below</h4>
        </div>
      </div>
      <div className="row">
        <Categories />
      </div>
      <div className="row">
        <div className="col-xl-3 ">
          <Filter />
        </div>
        <div className="col-xl-9">
          <ProductLists />
        </div>
      </div>
    </div>
  );
};

export default App;

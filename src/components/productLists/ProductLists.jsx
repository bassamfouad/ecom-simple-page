import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { ProductAPI } from "../../utils/APIS";
import ProductItem from "../productItem/ProductItem";
import "./productList.css";

function ProductLists() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAllProducts = async () => {
    await axios.get(ProductAPI).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="border flex-grow-1 flex-wrap ">
      <h1 className="text-center">Products</h1>
      <div className="container mydiv">
        <div className="row">
          {loading ? (
            <Spinner animation="border" />
          ) : products ? (
            products.map((products) => (
              <ProductItem products={products} key={products.id} />
            ))
          ) : (
            <h1> No products Available</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductLists;

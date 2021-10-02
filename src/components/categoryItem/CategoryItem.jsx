import React, { useEffect } from "react";
import "./CategoryItem.css";
const CategoryItem = ({ categoriesList }) => {
  const { name, image } = categoriesList;
  useEffect(() => {
    // console.log(key);
  }, []);
  return (
    <div className="col-md-4 mb-2 d-flex align-items-center justify-content-center mb-4 category_item">
      <div className=" category_item_thumbnail">
        <img
          className="rounded"
          src={image}
          style={{ width: "100%" }}
          alt={image}
        />
      </div>
      <div className="caption bg-white  border position-absolute p-2 rounded category_item_title">
        <p className="m-auto">{name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;

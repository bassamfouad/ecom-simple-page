import axios from "axios";
import React, { useEffect, useState } from "react";
import { CategoriesAPI } from "../../utils/APIS";
import CategoryItem from "../categoryItem/CategoryItem";
const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([{}]);

  const fetchData = async () => {
    await axios
      .get(CategoriesAPI)
      .then((res) => setCategoriesList(res))
      .catch((err) => setCategoriesList(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="row d-flex p-2 justify-content-center position-relative">
      {categoriesList && categoriesList.data
        ? categoriesList.data.map((item, i) => (
            <CategoryItem categoriesList={item} key={i} />
          ))
        : ""}
    </div>
  );
};

export default Categories;

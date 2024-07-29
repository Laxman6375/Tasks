import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards";
import CategoryLink from "./CategoryLink";
import Search from "./Search";

const Categories = () => {
  const products = useSelector((state) => state.filterData);
  console.log(products);
  // console.log(products);
  const { category } = useParams();

  // console.log(category);

  const product = products.filter((prod) => {
    //  console.log(prod.category);
    return prod.category === category;
  });
  //  console.log(product);
  return (
    <div>
      {/* <div className="flex items-center justify-around gap-5">
        <CategoryLink />
        <Search />
      </div> */}

      {product.length === 0 ? (
        <div className=" flex justify-center items-center h-screen">
          <h1>Products Not Found</h1>
        </div>
      ) : (
        <Cards product={product} />
      )}
    </div>
  );
};

export default Categories;

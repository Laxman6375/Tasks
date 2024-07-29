import React from "react";
import Cards from "../Cards";
import { useSelector } from "react-redux";
import CategoryLink from "../CategoryLink";
import Search from "../Search";
import { products } from "../../redux/reducers/ecomSlice";
import Navbar from "./Navbar";

const Home = () => {
  const product = useSelector(products);
  // console.log(product);

  return (
    <div>
      {/* <Navbar /> */}
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

export default Home;

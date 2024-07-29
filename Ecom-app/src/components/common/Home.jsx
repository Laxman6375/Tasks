import React from "react";
import Cards from "../Cards";
import { useSelector } from "react-redux";
import CategoryLink from "../CategoryLink";
import Search from "../Search";
import { products } from "../../redux/reducers/ecomSlice";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  const product = useSelector(products);
  // console.log(product);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;

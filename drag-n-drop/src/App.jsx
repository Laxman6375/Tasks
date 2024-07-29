import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/reducers/ecomSlice";
import Cards from "./components/Cards";
import CardPage from "./components/CardPage";
import { Link, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/common/Home";
import Navbar from "./components/common/Navbar";

function App() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<CardPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/products" element={<Cards product={product} />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;

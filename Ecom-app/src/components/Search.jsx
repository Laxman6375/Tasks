import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Cards from "./Cards";
import { addProduct } from "../redux/reducers/ecomSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [active, setActive] = useState(false);
  const products = useSelector((state) => state.data);
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const filtered = category
      ? products.filter(
          (item) =>
            item.category.toLowerCase() === category &&
            item.title.toLowerCase().includes(search.toLowerCase())
        )
      : products.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
    setFilteredProducts(filtered);
  }, [search, products, category]);

  useEffect(() => {
    dispatch(addProduct(filteredProducts));
  }, [filteredProducts]);

  const handleResultClick = (title) => {
    setSearch(title);
    setActive(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setActive(false);
    }
  };

  // console.log(filteredProducts);

  return (
    <div className=" relative">
      <input
        className="text-black outline"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value === "") {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
        onKeyDown={handleKeyPress}
        placeholder="Search products..."
      />
      <div className={active ? "block absolute w-80" : "hidden"}>
        {filteredProducts.map((product, index) => (
          <div
            className="flex flex-col gap-2 bg-black text-white px-2 w-[300px] "
            key={index}
            onClick={() => handleResultClick(product.title)}
          >
            <Link
              className=" rounded-lg text-nowrap px-3 py-1 hover:bg-slate-800 "
              to={`/products/${product.id}`}
            >
              {product.title}
            </Link>
          </div>
        ))}
      </div>
      {/* <Cards product={filteredProducts}/> */}
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.data);

  const category = [...new Set(products.map((prod) => prod.category))];
  // console.log(products);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex gap-3  items-center mt-4 w-[800px] max-w-[800px]">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleDropDown}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <div className="flex gap-3">
          <Link
            className=" bg-blue-600 text-white px-4 py-2 rounded-lg"
            to={"/"}
          >
            All Products
          </Link>
          {category.map((cat, i) => {
            return (
              <Link
                key={i}
                className=" bg-blue-600 text-white px-4 py-2 rounded-lg"
                to={`/categories/${cat.toLowerCase()}`}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryLink;

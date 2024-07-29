import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  // console.log(product);

  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {product.map((product) => {
        return (
          <div key={product.id}>
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className=" flex flex-col gap-3 w-[20.6rem] h-[26rem] items-center justify-center    shadow-lg"
            >
              <img
                className=" w-52 h-52 object-fill"
                src={product.image}
                alt="product"
              />
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 88) + "..."}</p>
              <div>
                <p>${product.price}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

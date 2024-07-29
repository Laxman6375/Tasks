import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardPage = () => {
  const products = useSelector((state) => state.data);
  // console.log(products);
  const { productId } = useParams();

  console.log(productId);

  const currProduct = products.find((prod) => {
    return prod.id === parseInt(productId);
  });
  // console.log(currProduct);

  return (
    <div className="flex gap-5 justify-center items-center">
      <img
        src={currProduct.image}
        className=" w-96 h-96 object-fill"
        alt="current product"
      />
      <div>
        <h1>{currProduct.title}</h1>
        <p>{currProduct.description}</p>
        <p>${currProduct.price}</p>
      </div>
    </div>
  );
};

export default CardPage;

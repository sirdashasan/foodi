import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [isHeartFillted, setIsHeartFillted] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl relative my-4">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
            isHeartFillted ? "text-rose-500" : "text-white"
          }`}
          onClick={handleHeartClick}
        >
          <FaHeart className="h-5 w-5 cursor-pointer" />
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              src={item.image}
              alt=""
              className="hover:scale-105 transition-all duration-200 md:h-72"
            />
          </figure>
        </Link>
        <div className="card-body">
          <Link to={`/menu/${item._id}`}>
            <h2 className="card-title">{item.name}</h2>
          </Link>
          <p>Description</p>
          <div className="card-actions flex flex-col items-start mt-2">
            <h5 className="font-semibold mb-2">
              <span className="text-sm text-red">$</span> {item.price}
            </h5>
            <button className="btn bg-green text-white w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

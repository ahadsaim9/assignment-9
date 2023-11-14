import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ product }) => {
  const { name, img, Category, Time, id } = product;
  return (
    <div className="border p-6 rounded-md bg-sky-50 shadow-md">
      <img className="w-full rounded-md" src={img} alt="" />
      <div className="mt-8">
        <p className="font-bold text-xl text-slate-700">{Category}</p>
        <p className="text-3xl my-4 font-bold">{name}</p>
        <p className="text-red-400">{Time}</p>
      </div>

      <Link to={`details/${id}`}>
        <button className="bg-blue-600 p-3 text-white font-bold rounded-md mt-4 hover:bg-blue-900">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Cart;

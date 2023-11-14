import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <div className="lg:flex justify-between mx-10">
        <div className="mx-20 my-10">
          <h1 className="font-bold text-6xl">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-sky-600">Dream Job</span>
          </h1>
          <p className="text-gray-400 mt-6">
            Explore thousands of job opportunities with all the information you
            need. <br /> Its your future. Come find it. Manage all your job
            application from start to finish.
          </p>
          <div className="bg-sky-600 text-white hover:bg-sky-800 p-4 mt-10 w-40  text-lg font-bold rounded-xl">
            <button>Get Started</button>
          </div>
        </div>
        <div className="mr-20">
          <img
            src="https://i.ibb.co/JxMFWGL/hero.jpg"
            alt=""
          />
        </div>
      </div>

     
      <div className="mt-20">
        <h1 className="text-center font-bold text-5xl">Course</h1>
        <p className="text-center text-gray-400 mt-4">
          New Experience Learn to the Next Level Your Career
        </p>
      </div>

      <div className="grid lg:grid-cols-3 ml-48 mr-56  mt-20 gap-4 ">
        {loadData.map((product) => (
          <Cart key={product.id} product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;

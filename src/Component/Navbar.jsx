import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ----- Top Header ----- */}
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 p-2 bg-black rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 p-2 bg-black rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block ">
            Explore Premium
          </p>
          <p className="flex bg-black px-4 py-1 rounded-2xl cursor-pointer">
            Install App
          </p>
          <p className="bg-violet-500 text-white w-7 h-7 rounded-full flex items-center justify-center">
            N
          </p>
        </div>
      </div>

      {/* ==== bottom Header === */}
      <div className="flex items-center gap-2 mt-5">
        <p className="justify-center bg-white rounded-2xl text-black cursor-pointer px-2 py-1">
          All
        </p>
        <p className="justify-center bg-black rounded-2xl text-white-500 cursor-pointer px-3 py-1">
          Music
        </p>
        <p className="justify-center bg-black rounded-2xl text-white-500 cursor-pointer px-2 py-1">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;

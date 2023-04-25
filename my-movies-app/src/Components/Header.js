import React from "react";
import movieLogo from "./assets/images/movie-logo.jpg";
import users from "./assets/images/users.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utility/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-3 shadow-md ">
      <div className="flex col-span-1 cursor-pointer ">
        {" "}
        <div className="p-4 space-y-2 " onClick={toogleMenuHandler}>
          <div className="block w-8 h-0.5 bg-gray-900 animate-pulse"></div>
          <div className="block w-8 h-0.5 bg-gray-900 animate-pulse"></div>
          <div className="block w-8 h-0.5 bg-gray-900 animate-pulse"></div>
        </div>
        <a href="/">
          {" "}
          <img className=" w-12 h-8 m-2" src={movieLogo} alt="movies-time" />
        </a>
      </div>

      <div className="col-span-10 justify-center">
        <input
          type="text"
          placeholder="find something"
          className=" w-1/2 px-6 py-2 border border-gray-400 rounded-l-full"
        />
        <button className="border border-2 border-gray-400 rounded-r-full px-5 py-2 bg-gray-100">
          🔎
        </button>
      </div>
      <div className="col-span-1 p-2 justify-center">
        <img src={users} alt="users" className=" w-10 m-2" />
      </div>
    </div>
  );
};

export default Header;

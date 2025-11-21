import React, { useState } from "react";
import { Link } from "react-router";

import XSvg from "../../../components/svgs/X";
import PSvg from "../../../components/svgs/p";

import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isError = false;

  return (
    <div className="w-full min-h-screen mx-auto flex px-10 max-w-[1400px]">

      {/* LEFT LOGO - FIX: Explicit sizing + flex for SVG */}
      <div className="flex-1 hidden lg:flex items-center justify-center min-w-[450px] ">
        <div className="w-96 h-96 flex items-center justify-center">
          <XSvg className="w-full h-full fill-white" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col justify-center items-center min-w-[450px] max-w-[520px]">

        <form
          className="
            lg:w-2/3 w-full mx-auto md:mx-20 flex flex-col gap-8
            bg-white/5 p-10 rounded-2xl 
            border border-white/10 shadow-xl backdrop-blur-xl
          "
          onSubmit={handleSubmit}
        >

          {/* MOBILE LOGO - FIX: Explicit container size */}
          <div className="lg:hidden flex justify-center mb-4 mt-2">
            <div className="w-24 h-24 flex items-center justify-center">
              <PSvg className="w-full h-full fill-white opacity-90" />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-white">{"Let's"} go.</h1>

          {/* USERNAME */}
          <label className="input input-bordered rounded-xl flex items-center gap-4 h-14 bg-white/5 border border-white/10 text-white text-lg">
            <MdOutlineMail className="opacity-70 text-2xl" />
            <input
              type="text"
              className="grow bg-transparent outline-none"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </label>

          {/* PASSWORD */}
          <label className="input input-bordered rounded-xl flex items-center gap-4 h-14 bg-white/5 border border-white/10 text-white text-lg">
            <MdPassword className="opacity-70 text-2xl" />
            <input
              type="password"
              className="grow bg-transparent outline-none"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>

          <button className="btn rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-bold h-14 text-lg">
            Login
          </button>

          {isError && <p className="text-red-500">Something went wrong</p>}
        </form>

        {/* SIGNUP LINK */}
        <div className="flex flex-col lg:w-2/3 w-full gap-2 mt-8 text-center">
          <p className="text-white text-xl">{"Don't"} have an account?</p>

          <Link to="/signup">
            <button className="btn rounded-full w-full btn-outline text-white border-white/20 text-lg hover:bg-white/10">
              Sign up
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
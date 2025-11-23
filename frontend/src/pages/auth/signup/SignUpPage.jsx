import { Link } from "react-router";
import React, { useState } from "react";
import XSvg from "../../../components/svgs/X";

import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword, MdDriveFileRenameOutline } from "react-icons/md";
import PSvg from "../../../components/svgs/P.jsx";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });
  const queryClient = useQueryClient();
  const {mutate,isError,isPending,error}=useMutation({
    mutationFn:async({email,username,fullName,password})=>{
    try {
      const res=await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email,username,fullName,password})
      });
      const data=await res.json();
       if(!res.ok) throw new Error(data.error || "Something went wrong");
      
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
     throw new Error(error.message);
    }
    },onSuccess:()=>{
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="max-w-screen-xl mx-auto flex h-screen px-10">
      
      {/* LEFT LOGO FOR LARGE SCREENS */}
      <div className="flex-1 hidden lg:flex items-center justify-center overflow-visible">
        <XSvg className="w-3/4 max-w-[280px] fill-white overflow-visible" />
      </div>

      {/* RIGHT SIDE (form + mobile logo) */}
      <div className="flex-1 flex flex-col justify-center items-center">

        {/* MOBILE LOGO ABOVE THE FORM */}
        <div className="lg:hidden flex justify-center mb-6 mt-4">
          <PSvg className="w-28 h-28 min-w-[110px] min-h-[110px] opacity-90" />

        </div>

        <form
          onSubmit={handleSubmit}
          className="
            lg:w-2/3 w-full mx-auto md:mx-20 flex flex-col gap-6
            bg-white/5 backdrop-blur-xl p-8 rounded-2xl 
            border border-white/10 shadow-xl
          "
        >
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Join today
          </h1>

          {/* EMAIL */}
          <label className="input flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 text-white">
            <MdOutlineMail className="text-xl opacity-70" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="grow bg-transparent outline-none"
              onChange={handleInputChange}
              value={formData.email}
            />
          </label>

          {/* USERNAME + FULL NAME */}
          <div className="flex gap-4 flex-wrap">
            <label className="input flex items-center gap-3 flex-1 rounded-xl bg-white/5 border border-white/10 text-white">
              <FaUser className="opacity-70" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="grow bg-transparent outline-none"
                onChange={handleInputChange}
                value={formData.username}
              />
            </label>

            <label className="input flex items-center gap-3 flex-1 rounded-xl bg-white/5 border border-white/10 text-white">
              <MdDriveFileRenameOutline className="text-xl opacity-70" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="grow bg-transparent outline-none"
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </label>
          </div>

          {/* PASSWORD */}
          <label className="input flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 text-white">
            <MdPassword className="text-xl opacity-70" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="grow bg-transparent outline-none"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>

          <button className="btn rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white font-semibold">
            {isPending ?"Loading...":"Sign up"}
          </button>

          {isError && <p className="text-red-500 text-sm">{error.message}</p>}
        </form>

        <div className="flex flex-col lg:w-2/3 w-full gap-2 mt-6 text-center">
          <p className="text-white text-lg">Already have an account?</p>

          <Link to="/login">
            <button className="btn rounded-full w-full btn-outline text-white border-white/20">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

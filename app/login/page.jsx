"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const login = () => {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  console.log(inpval);

  const setdata = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInpval({ ...inpval, [name]: value });
  };

  const loginData = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    let data = {email,password}
    const response = await fetch(
      "https://nextjs-db-9eab1-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.status === 200) {
        alert("Successfully loged in");
      } else {
        alert("Please check your login information.");
      }
      console.log("Datttttta", res.json());
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen flex-1 px-20 text-center bg-white">
      <div className="bg-white rounded-xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-green-500"> Pace</span>Wisdom
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="border border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle />
              </a>
              <a
                href="#"
                className="border border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-400 my-3">or use your email account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={inpval.email}
                  onChange={setdata}
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={inpval.password}
                  onChange={setdata}
                />
              </div>
              {/* <div className="flex justify-between w-64 mb-5 ">
              <label className="flex items-center text-xs">
                <input type='checkbox' name="remember" className="mr-1"/> Remember me
              </label>
                <a href="#" className="text-xs ">Forgot Password?</a>
              </div> */}
              <a
                onClick={loginData}
                className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
              >
                Login
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/5 py-36 px-12 bg-green-500 rounded-tr-xl rounded-br-xl text-white">
          <h2 className="text-3xl font-bold mb-2">Hello, User!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            fill up personal information and start jaurney with us.
          </p>
          <Link
            href="/register"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;

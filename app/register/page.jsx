"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
// import { redirect } from "next/navigation";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaRegEnvelope,
  FaUser,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const signup = () => {
  const [inpval, setInpval] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });
  console.log(inpval);

  const setdata = (e) => {
    //   console.log(e.target.value);
    const { name, value } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  const RegisterUser = async (e) => {
    e.preventDefault();
    const { name, username, email, password, gender } = inpval;

    if (name == "") {
      toast.warning("Name is Required");
    } else if (username == "") {
      toast.warning("Name is Required");
    } else if (!email.includes("@")) {
      toast.warning("Enter valid Email....");
    } else if (email === "") {
      toast.warning("Email is Required.");
    } else if (password === "") {
      toast.warning("Password is Required");
    } else if (gender === "") {
      toast.warning("gender is Required");
    } else {
      await fetch(
        "http://127.0.0.1:3001/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inpval),
        }
      )
        .then((res) => {
          toast.success("Registered successfully ");
          if (res) {
            setInpval({
              name: "",
              username: "",
              email: "",
              password: "",
              gender: "",
            });

            // redirect("/login");
          }
        })
        .catch((err) => {
          toast.error("Failed" + err.message);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen flex-1 px-20 text-center bg-white">
      <div className="bg-white rounded-xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <ToastContainer />
          <div className="text-left font-bold">
            <span className="text-green-500"> Pace</span>Wisdom
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Sign Up to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            {/* <div className="flex justify-center my-2">
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
            </div> */}
            {/* <p className="text-gray-400 my-3">or use your email account</p> */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={inpval.name}
                  onChange={setdata}
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="username"
                  name="username"
                  placeholder="User Name"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={inpval.username}
                  onChange={setdata}
                />
              </div>
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
                  placeholder="Create Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={inpval.password}
                  onChange={setdata}
                />
              </div>
              <div className="flex justify-start w-64 mb-5 ">
                <label className="flex items-center text-s mr-1">
                  <input
                    type="radio"
                    checked={inpval.gender == "male"}
                    name="gender"
                    value="male"
                    onChange={setdata}
                    className="mr-1"
                  />{" "}
                  Male
                </label>
                <label className="flex items-center text-s mr-1">
                  <input
                    type="radio"
                    checked={inpval.gender == "female"}
                    name="gender"
                    value="female"
                    onChange={setdata}
                    className="mr-1"
                  />
                  Female
                </label>
              </div>
              <a
                onClick={RegisterUser}
                className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
              >
                SignUp
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
            href="login"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signup;

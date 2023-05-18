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

const signup = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
  });
  //    console.log(inpval);

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
    const { name, email, password } = inpval;

    if (name == "") {
      alert("Name is Required");
    } else if (!email.includes("@")) {
      alert("Enter valid Email....");
    } else if (email === "") {
      alert("Email is Required.");
    } else if (password === "") {
      alert("Password is Required");
    } else {
      const res = await axios
        .post(
          "https://nextjs-db-9eab1-default-rtdb.firebaseio.com/userData.json",
          inpval
        )
        .then((res) => console.log(res));
      if (res) {
        setInpval({
          name: "",
          email: "",
          password: "",
        });
        alert("successfully registered");
        // redirect("/login");
      } else {
        alert("Plz fill the data");
      }
    }
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
              Sign Up to Account
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
              {/* <div className="flex justify-between w-64 mb-5 ">
              <label className="flex items-center text-xs">
                <input type='checkbox' name="remember" className="mr-1"/> Remember me
              </label>
                <a href="#" className="text-xs ">Forgot Password?</a>
              </div> */}
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

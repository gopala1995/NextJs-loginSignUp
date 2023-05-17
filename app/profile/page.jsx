'use client'
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Dashboard = () => {
  const { user, isLoading, error } = useUser();
  return (
    <>
      {isLoading && (
        <p className="w-1/4 text-center m-auto text-yellow-600  text-4xl mt-[200px]">
          Loading.......
        </p>
      )}
      {user && (
        <div>
          <div className="w-3/5 m-auto mt-16 ">
            <div className=" flex flex-row px-4">
              <img
                src={user.picture}
                className="rounded-full border-2 w-20 h-20"
              />
              <h2 className="font-bold text-6xl ml-8 mt-3">{user.name}</h2>
            </div>
            <div className="border-2 px-4 shadow-md rounded-lg mt-[40px]">
              <p className="text-xl text-pink-600">
                Name:{" "}
                <span className="text-teal-700 font-mono">
                  {user.given_name}
                </span>{" "}
              </p>
              <p className="text-xl text-pink-600">
                Nick Name:{" "}
                <span className="text-teal-700 font-mono">{user.nickname}</span>{" "}
              </p>
              <p className="text-xl text-pink-600">
                {" "}
                Sub: <span className="text-teal-700 font-mono">
                  {user.sub}
                </span>{" "}
              </p>
              <p className="text-xl text-pink-600">
                {" "}
                Sid: <span className="text-teal-700 font-mono">{user.sid}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {error && (
        <>
          <h1>Please login first</h1>
        </>
      )}
    </>
  );
};

export default Dashboard;

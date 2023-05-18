"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [Data, setData] = useState([]);
  console.log(Data);

  const FetchData = async () => {
    const res = await axios
      .get(`http://127.0.0.1:3001/user?_page=${page}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    FetchData();
  }, [page]);

  return (
    <div className="flex flex-col justify-center items-center bg-teal-100 h-screen py-10 ">
      <div className="flex flex-row justify-between w-3/6 h-10">
        <h1 className="text-teal-600 text-3xl font-bold">List of Users</h1>

        <button className="bg-green-600 text-white p-2  rounded-md">
          <Link href="/adduser">Add User +</Link>
        </button>
      </div>

      <div className="w-3/6 rounded-xl bg-teal-300 drop-shadow-xl p-4 mt-2">
        <table className="w-full mb-2">
          <thead>
            <tr className="border-b-2 ">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((el, i) => (
              <tr key={i} className="border-b-2 mb-2">
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          count={7}
          color="primary"
          defaultPage={page}
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </div>
  );
};

export default Dashboard;

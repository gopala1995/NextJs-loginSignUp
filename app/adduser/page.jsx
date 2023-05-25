"use client";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const Form = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone } = inpval;

    if (name == "") {
      alert("Name is Required");
    } else if (!email.includes("@")) {
      alert("Enter valid Email....");
    } else if (email === "") {
      alert("Email is Required.");
    } else if (phone === "") {
      alert("phone is Required");
    } else {
      await axios
        .post("http://127.0.0.1:3001/user", inpval)
        .then((res) => {
          if (res) {
            setInpval({
              name: "",
              email: "",
              phone: "",
            });
            toast.success("successfully registered");
          } else {
            toast.error("Login Failed");
          }
        });
    }
  };

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  return (
    <div className="ml-[20%]">
      <Form>
        <Typography
          varient="h4"
          className="mt-8 text-center font-bold text-2xl text-gray-500"
        >
          Add User
        </Typography>

        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            type="text"
            name="name"
            value={inpval.name}
            onChange={setdata}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            value={inpval.email}
            onChange={setdata}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            text="phone"
            name="phone"
            value={inpval.phone}
            onChange={setdata}
          />
        </FormControl>
        <FormControl>
          <Button
            onClick={PostData}
            variant="contained"
            className="bg-teal-600"
          >
            Add User
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};

export default AddUser;

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
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

// import { useHistory, useNavigate } from "react-router-dom";

const Form = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const { push } = useRouter();
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
      const res = await axios
        .post("http://127.0.0.1:3001/user", inpval)
        .then((res) => console.log(res));
      if (res) {
        setInpval({
          name: "",
          email: "",
          phone: "",
        });
        alert("successfully registered");
        useEffect(() => {
          push("/dashboard");
        }, []);
      } else {
        alert("Plz fill the data");
      }
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
    <div>
      <Form>
        <Typography varient="h4">Add User</Typography>

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
          <Button onClick={PostData} variant="contained">
            Add User
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};

export default AddUser;

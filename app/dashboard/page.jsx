"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  makeStyles,
  Container,
  Paper,
  Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import styled from "@emotion/styled";

const MainCont = styled(Container)`
width: 80%;
 margin-left: 21%;
`;


const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [Data, setData] = useState([]);
  console.log("hhhhhhhhhh",Data);

  const FetchData = async () => {
    const res = await axios
      .get(`http://127.0.0.1:3001/user?_limit=5&_page=${page}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    FetchData();
  }, [page]);

  return (
    <MainCont>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Id</TableCell>
              <TableCell> Name</TableCell>
              <TableCell> Email</TableCell>
              <TableCell> Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((el, i) => (
              <TableRow>
                <TableCell>{el.id}</TableCell>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.email}</TableCell>
                <TableCell>{el.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={10}
          color="primary"
          defaultPage={page}
          onChange={(event, value) => setPage(value)}
        />
      </TableContainer>
    </MainCont>
   
  );
};

export default Dashboard;

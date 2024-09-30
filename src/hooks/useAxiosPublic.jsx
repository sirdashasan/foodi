import axios from "axios";
import React from "react";

const axiosPublic = axios.create({
  baseURL: "https://foodi-server-7cn4.onrender.com/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

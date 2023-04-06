import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";

const Interceptors = ({ children }) => {
  // Add a request interceptor

  axios.interceptors.request.use(
    function (config) {
      const header = config.headers;
      config.baseURL = process.env.REACT_APP_API_BASE_URL;

      config.headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",

        ...header,
      };
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {

        return Promise.reject(error);
      }
    );
  }, []);

  return <>{children}</>;
};

export default Interceptors;

import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import AxiosDataRequest from "./AxiosDataRequest";
import FetchDataRequest from "./FetchDataRequest";

const url = "https://localhost:44365/WeatherForecast";

function App() {
  return (
    <>
      <AxiosDataRequest />
      <FetchDataRequest />
    </>
  );
}

export default App;

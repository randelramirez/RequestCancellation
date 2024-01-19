/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { abort } from "process";
import { sign } from "crypto";

const url = "https://localhost:44365/WeatherForecast";

function FetchDataRequest() {
  const [data, setData] = useState();

  //   let cancelTokenSource = axios.CancelToken.source();

  let controller: AbortController; //new AbortController();
  let signal: AbortSignal; //controller.signal;

  const handler = async () => {
    try {
      controller = new AbortController();
      signal = controller.signal;
      const response = await (await fetch(url, { signal })).json();
      console.log("response", response);
      setData(response);
    } catch (error) {
      console.log(`Catch block ${error}`);
    }
  };

  return (
    <div className="App">
      <h1>Fetch Data Request and Abort Controller Cancellation</h1>
      <button
        onClick={async () => {
          await handler();
        }}
      >
        Request Data
      </button>
      <button
        onClick={() => {
          controller.abort();
        }}
      >
        Cancel request
      </button>
    </div>
  );
}

export default FetchDataRequest;

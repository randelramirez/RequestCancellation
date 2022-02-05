import React, { useState } from "react";
import axios from "axios";

const url = "https://localhost:44365/WeatherForecast";

function AxiosDataRequest() {
  const [data, setData] = useState<any>();

  let cancelTokenSource = axios.CancelToken.source();

  const handler = async () => {
    try {
      const { data } = await axios.get(url, {
        cancelToken: cancelTokenSource.token,
      });
      console.log("response", data);
      setData(data);
    } catch (error) {
      console.log(`Catch block ${error}`);
    }
  };

  const test = () => {};

  return (
    <div className="App">
      <h1>Axios Data Request and Cancellation</h1>
      <button
        onClick={async () => {
          await handler();
        }}
      >
        Request Data
      </button>
      <button
        onClick={() => {
          cancelTokenSource.cancel();
          cancelTokenSource = axios.CancelToken.source();
        }}
      >
        Cancel request
      </button>
    </div>
  );
}

export default AxiosDataRequest;

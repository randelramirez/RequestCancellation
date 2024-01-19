import './App.css'
import AxiosDataRequest from './AxiosDataRequest';
import FetchDataRequest from './FetchDataRequest';

function App() {
  // const url = "https://localhost:44365/WeatherForecast";
  return (
    <>
      <AxiosDataRequest />
      <FetchDataRequest />
    </>
  );
}

export default App

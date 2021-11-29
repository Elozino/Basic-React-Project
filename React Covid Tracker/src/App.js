import "./App.css";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const url = "https://covid19.mathdro.id/api";
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        const dataMin = {
          confirmed: data.confirmed,
          recoveries: data.recovered,
          deaths: data.deaths,
          lastUpdate: data.lastUpdate,
        };
        setData(dataMin)
      } catch {
        alert("Check your internet connction");
      }
    };
    fetchData()
  }, []);
  return (
    <div className="App">
      <CountryPicker />
      <Chart />
      <Cards data={data} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "../App.css";
import axios from "axios";

const Activity = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const url = "http://www.boredapi.com/api/activity/";

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((json) => displayResults(json))
  //   .catch((error) => console.error(`Error fetching dataa: ${error}`));

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleButtonClick = () => {
    // setCount((prevCount) => prevCount + 1);
    // fetchData();
    // if (data) {
    //   const dataContext = document.getElementsByClassName(".dataContext");
    //   dataContext.textContent = `Activity: ${data.activity} /n Type: ${data.type}`;
    // }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://bored-api.appbrewery.com/random"
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // function displayResults(params) {}

  return (
    <div className="card">
      <button onClick={handleButtonClick()}>count is {count}</button>
      <div className="dataContext"></div>
      {/* {data && (
        <div>
          <h2>Activity: {data.activity}</h2>
          <h3>Type: {data.type}</h3>
        </div>
      )} */}
    </div>
  );
};

export default Activity;

import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const URL = process.env.REACT_APP_URL;
      const res = await axios(URL);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <AddTutorial URL={URL} getData={getData} />
      <TutorialList data={data} getData={getData} />
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    picture: "",
    location: "",
    phone: "",
    dob: "",
  });
  const url = "https://randomuser.me/api/";

  function getUser() {
    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  }
  
  useEffect(() => {
    getUser();
  }, []);

  console.log(user);
  const { name, email, dob, picture, location, phone } = user;

  return (
    <div style={{ textAlign: "center" }}>
      <img className="rounded-circle" src={picture?.large} alt="" />
      <p>hi, My name is</p>
      <h1>{name?.first}</h1>
      <h3>email</h3>
      <h3>dob</h3>
      <h6>location</h6>
      <h5>phone</h5>
      <button onClick={getUser}>Get USer</button>
    </div>
  );
};

export default UseEffectHook;

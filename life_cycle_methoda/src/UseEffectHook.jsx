import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [user, setUser] = useState([]);
  const url = "https://randomuser.me/api/";

  function getUser() {
    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  }
  console.log(user);

  return (
    <div>
      <img src="" alt="" />
      <p>hi, My name is</p>
      <h1>name</h1>
      <h3>email</h3>
      <h3>dob</h3>
      <h6>location</h6>
      <h5>phone</h5>
      <button onClick={getUser}>Get USer</button>
    </div>
  );
};

export default UseEffectHook;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img from "../img/404.png";

const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [person, setPerson] = useState([]);
  const getPersonData = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("something got wrong");
        }

        return res.json();
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPersonData();
  }, []);

  console.log(person);

  return (
    <div className="container text-center ">
      {error ? (
        <div>
          <img src={img} alt="" />
        </div>
      ) : (
        <div>
          <img
            className="img-thumbnail"
            src={person.avatar}
            alt={person.first_name}
          />
          <h5>
            {person.first_name} {person.last_name}
          </h5>
          <h6>{person.email}</h6>
        </div>
      )}

      <button className="btn btn-warning" onClick={() => navigate(-1)}>
        BACK
      </button>
      <button className="btn btn-success" onClick={() => navigate("/")}>
        HOME
      </button>
    </div>
  );
};

export default PersonDetail;

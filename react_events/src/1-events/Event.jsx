import React from "react";

const Event = () => {
  const handleTikla = () => alert("tiklandi");
  const handleSil = function (msg) {
    console.log("silindi");
    console.log(msg);
  };

  let message = "Fs15";
  const handleChange = () => {
     (message = "ch2024");
    console.log(message);
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={handleTikla}> Tikla</button>
      <button onClick={() => handleSil(message)}>sil</button>
      <button onClick={handleChange}>değiştir</button>
    </div>
  );
};

export default Event;

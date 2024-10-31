import React, { useState } from "react";

const Counter = () => {
  const [sayac, setSayac] = useState(0);
  const handleInc = () => {
    setSayac(sayac + 1);
  };
  const handleDec = () => {
    sayac > 0 && setSayac(sayac - 1);
  };
  return (
    <div>
      <h1>Use State Counter </h1>
      <h2>Count={sayac}</h2>

      <button onClick={handleInc}>INC</button>
      <button onClick={handleDec}>DEC</button>
      <button onClick={() => setSayac(0)}>ZERO</button>
    </div>
  );
};

export default Counter;

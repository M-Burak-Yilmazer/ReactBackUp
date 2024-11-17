import React, { useState } from "react";

const KeyboardEvents = () => {
  const [content, setContent] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode > 47 && e.keyCode < 58) {
      alert("buraya  rakam girilemez");
      e.preventDefault();
    }
  };
  return (
    <div className="container mt-4">
      <h1>Keyboard events</h1>
      <input
        type=" text"
        className="form-control"
        onChange={(e) => setContent(e.target.value.toLocaleUpperCase())}
        onKeyDown={handleKeyDown}
        value={content}
      />
      <div>
        <p className="border border-danger border-2">
          {content.toLocaleLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default KeyboardEvents;

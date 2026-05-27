

import React from "react";

function Form() {
  return (
    <div className="box">
      <input type="text" placeholder="Enter your name" />

      <input type="email" placeholder="Enter your email" />

      <input type="password" placeholder="Enter your password" />

      <button>Add</button>
    </div>
  );
}

export default Form;
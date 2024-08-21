import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [nameError, setnameError] = useState("");

  //create a fucntion to validate name
  function validateName(value) {
    if (value.trim() == "") {
      setnameError("name is required");
    } else {
      setnameError("");
    }
  }
  // on change handler for name
  function handleOnchange(e) {
    let value = e.target.value;
    validateName(value);
    setname(value);
  }

  //  // on change handler for form
  function onSubmitHandle(e) {
    e.preventDefault(); // prevent default behavior
    validateName(name); // calling validatefunction

    if (nameError === "") {
      console.log("submit", name);
      setname("");
    }
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={onSubmitHandle}>
        <div>
          <label>Name : </label>
          <input type="text" onChange={handleOnchange} value={name} />
          {nameError ? <p style={{ color: "red" }}>{nameError}</p> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
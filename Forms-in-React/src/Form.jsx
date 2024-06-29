import { useState } from "react";

export default function Form() {
  let [fullName, useFullName] = useState("Shiv");
  let [userName, useUsername] = useState("");

  let handleNameChange = (event) => {
    useFullName(event.target.value);
  };

  let handleUserName = (event) => {
    useUsername(event.target.value);
  };
  return (
    <form>
      <label htmlFor="fullname">Full Name : </label>
      <input
        type="text"
        id="fullname"
        placeholder="Enter Full Name"
        value={fullName}
        onChange={handleNameChange}
      ></input>{" "}
      <br /> <br />
      <br />
      <label htmlFor="username">User Name : </label>
      <input
        type="text"
        id="username"
        placeholder="Enter User Name"
        value={userName}
        onChange={handleUserName}
      ></input>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

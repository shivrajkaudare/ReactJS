import { useState } from "react";

export default function Form() {
  let [fromData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    // setFormData((currData) => {
    //   // currData[fieldName] = newValue;
    //   // return { ...currData };
    //   //Or
    //   return { ...currData, [fieldName]: newValue };
    // });
    /* or */
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  // controll input element , make empty all inputs after form submission and add react state.
  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
    });
  };

  return (
    <>
      <h2> Basic Form In React</h2>
      <br />
      <form>
        <label htmlFor="fullname">Full Name : </label>
        <input
          type="text"
          id="fullname"
          placeholder="Enter Full Name"
          value={fromData.fullName}
          name="fullName"
          onChange={handleInputChange}
        ></input>
        <br /> <br />
        <br />
        <label htmlFor="username">User Name : </label>
        <input
          type="text"
          id="username"
          placeholder="Enter User Name"
          value={fromData.userName}
          name="userName"
          onChange={handleInputChange}
        ></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

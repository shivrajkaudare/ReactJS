import { useState } from "react";

export default function Form() {
  let [fromData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  let handleLnputChange = (event) => {
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
    <form>
      <label htmlFor="fullname">Full Name : </label>
      <input
        type="text"
        id="fullname"
        placeholder="Enter Full Name"
        value={FormData.fullName}
        name="fullName"
        onChange={handleLnputChange}
      ></input>
      <br /> <br />
      <br />
      <label htmlFor="username">User Name : </label>
      <input
        type="text"
        id="username"
        placeholder="Enter User Name"
        value={FormData.userName}
        name="userName"
        onChange={handleLnputChange}
      ></input>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

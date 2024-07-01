import { useState } from "react";

export default function CommmentForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    rating: 5,
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);

    addNewComment(formData);

    event.preventDefault();
    setFormData({
      userName: "",
      remarks: "",
      rating: "",
    });
  };
  return (
    <div>
      <h2>Comment From</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="uname">UserName : </label>
        <input
          type="text"
          placeholder="username"
          value={formData.userName}
          onChange={handleInputChange}
          id="uname"
          name="userName"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks : </label>
        <textarea
          value={formData.remarks}
          placeholder="add few Remarks"
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating : </label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

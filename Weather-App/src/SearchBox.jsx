import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  };
  return (
    <div className="SearchBox">
      <h3>Search For a Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="Search city Name"
          variant="filled"
          required
          value={city}
          name="city"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

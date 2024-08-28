import { useState } from "react";
import Button from "./src/button";
import Inputs from "./src/inputs";

export default function FormDiv() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const HandleInput = (event) => {
    setData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <div className="mydiv">
        <Inputs onInputChange={HandleInput} data={data} />
        <Button />
      </div>
    </>
  );
}

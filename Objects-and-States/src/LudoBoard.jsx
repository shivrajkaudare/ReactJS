import { useState } from "react";
export default function LudoBoard() {
  //   let [blueMove, setBlueMove] = useState(0);
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  // Updating the objects.
  // when we want to update an objects firstly we spread them (makes an copy)and if we can some updation.
  let UpdateBlue = () => {
    // moves.blue += 1;
    console.log(`moves.blue = ${moves.blue}`);
    // setMoves({ ...moves, blue: (moves.blue += 1) });
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };

  let UpdateRed = () => {
    console.log(`moves.red = ${moves.red}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };

  let UpdateYellow = () => {
    console.log(`moves.yellow = ${moves.yellow}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  let UpdateGreen = () => {
    console.log(`moves.green = ${moves.green}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: (prevMoves.green += 1) };
    });
  };

  return (
    <div>
      <p>Game Begins..!!</p>
      <div className="Board">
        <p>Blue Moves ={moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={UpdateBlue}>
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={UpdateRed}>
          +1
        </button>
        <p> Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={UpdateYellow}
        >
          +1
        </button>
        <p>Green Moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={UpdateGreen}>
          +1
        </button>
      </div>
    </div>
  );
}

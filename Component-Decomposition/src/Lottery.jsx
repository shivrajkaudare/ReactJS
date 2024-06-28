import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket, sum } from "./helper";

export default function Lottery({ n, winningSum }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lotter Game!</h1>
      <Ticket num={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congradulation, you Won !!"}</h3>
    </div>
  );
}

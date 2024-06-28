import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({ num }) {
  return (
    <div className="ticket">
      <p>Ticket</p>
      {num.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}

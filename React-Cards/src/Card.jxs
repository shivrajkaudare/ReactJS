import Price from "./Price";
import "./Card.css";

function Card({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programeble button"],
    ["intutive surface", "designed for ipad pro"],
    ["Designed for ipad pro", "intuitive surface"],
    ["Wireless", "optical orientation"],
  ];
  return (
    <div className="Cards">
      <h1>{title}</h1>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Card;

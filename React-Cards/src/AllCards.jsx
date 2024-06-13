import Card from "./Card.jsx";

function AllCards() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignIten: "center",
  };
  return (
    <div style={styles}>
      <Card title="Logitech MX Master" idx={0} />
      <Card title="Apple Pencil GenZ" idx={1} />
      <Card title="Zebronic Zeb-transformer" idx={2} />
      <Card title="Petronics toad 23" idx={3} />
    </div>
  );
}

export default AllCards;

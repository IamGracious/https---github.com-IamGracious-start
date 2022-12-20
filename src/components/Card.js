import "./Card.css";

function Card(props) {
  //eslint-disable-next-line
  // const classes = "card " + props.className;
  return <div className="card">{props.chldren}</div>;
}
export default Card;

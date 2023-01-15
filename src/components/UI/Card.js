import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
//composition is important, whenever you use or combine multiple components, you are using compositions. props.children is an important part fo composition.

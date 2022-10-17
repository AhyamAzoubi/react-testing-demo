
import { useState } from "react";
import './Haustier.css';

const Haustier = (props) => {


  return (
    <div className="haustier-container">
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Haustier;
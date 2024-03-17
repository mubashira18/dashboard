import React from "react";

import totalT from "../static/total_icon.png";
import vec from "../static/Vector.png";
import vec1 from "../static/vec1.png";
import vec2 from "../static/vec2.png";

const boxList = [
  {
    image: totalT,
    text: "Total Revenue",
    cost: "12345",
  },
  {
    image: vec,
    text: "Total Transactions",
    cost: "12345",
  },
  {
    image: vec1,
    text: "Total Users",
    cost: "12345",
  },
  {
    image: vec2,
    text: "Total Likes",
    cost: "12345",
  },
];

function Box({ boxObj }) {
  return (
    <div>
      <p>{boxObj.text}</p>
      <img src={boxObj.image} alt={boxObj.text} />
      <h1>{boxObj.cost}</h1>
    </div>
  );
}

function Container() {
  return (
    <>
      <div>
        {boxList &&
          boxList.map((boxItem) => <Box boxObj={boxItem} key={boxItem.text} />)}
      </div>
    </>
  );
}

export default Container;

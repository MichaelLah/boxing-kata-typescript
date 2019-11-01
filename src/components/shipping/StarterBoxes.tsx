import React from "react";
import ShippingBox, { BoxItem } from "./ShippingBox";

const StarterBoxes: React.FC<{ boxes: Array<Array<BoxItem>> }> = props => {
  const { boxes } = props;
  const boxDivs = boxes.map(box => {
    return <ShippingBox contents={box}></ShippingBox>;
  });
  let totalOfEach = 0
  boxes.forEach(box => {
    box.forEach(item =>{
      if(item.itemName.includes("Brush")){
        // I'm taking advantage of the fact that brushes will always have the same
        // number of heads. And I'm lazy. So there.
        totalOfEach += item.quantity;
      }
    })

  });
  return (
    <>
      <p>Summary:</p>
      <p>Starter Boxes: {boxes.length}</p>
      <p>Brushes: {totalOfEach}</p>
      <p>Replacement Heads: {totalOfEach}</p>
      {boxDivs}
    </>
  );
};

export default StarterBoxes;

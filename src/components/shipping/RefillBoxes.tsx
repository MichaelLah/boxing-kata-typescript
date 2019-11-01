import React from "react";
import ShippingBox, { BoxItem } from "./ShippingBox";

const StarterBoxes: React.FC<{ boxes: Array<Array<BoxItem>> }> = props => {
  const { boxes } = props;
  const boxDivs = boxes.map(box => {
    return <ShippingBox contents={box}></ShippingBox>;
  });
  let totalHeads = 0;
  boxes.forEach(box => {
    totalHeads += box.length;
  });
  return (
    <>
      <p>Summary:</p>
      <p>Refill Boxes: {boxes.length}</p>
      <p>Replacement Heads: {totalHeads}</p>
      {boxDivs}
    </>
  );
};

export default StarterBoxes;

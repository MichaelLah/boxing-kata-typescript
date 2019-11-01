import React from "react";
import styled from "styled-components";

interface BoxItem {
  color: "pink" | "green" | "blue";
  quantity: number;
  itemName: string;
}

const mapColorToHex = (color: string): string => {
  if (color === "pink") {
    return "#f41984";
  }
  if (color === "blue") {
    return "#00c9f0";
  }
  if (color === "green") {
    return "#daff00";
  }
  return "";
};
const StyledItemRow = styled.div<{ color: string }>`
  background-color: ${props => mapColorToHex(props.color)};
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  align-self: center;
  margin-right: 10px;
`;
const StyledShippingBox = styled.div<{}>`
  background-color: grey;
  border-radius: 20px;
  height: 70px;
  width: 125px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ShippingBox: React.FC<{ contents: Array<BoxItem> }> = props => {
  const allItems = props.contents.map(item => {
    return (
      <StyledItemRow color={item.color}>
        <div className="color-circle"></div>
        <div>
          {item.quantity}
          {item.itemName}
        </div>
      </StyledItemRow>
    );
  });
  return <StyledShippingBox>{allItems}</StyledShippingBox>;
};

export default ShippingBox;

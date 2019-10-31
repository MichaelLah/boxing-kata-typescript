import React, { useState } from "react";
import styled from "styled-components";

interface ShippingProps {
  setOnShippingPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const StyledShipping = styled.div<{}>`
  .link-text {
    color: lightblue;
  }
`;
const Shipping: React.FC<ShippingProps> = props => {
  const [tabSelection, setTabSelection] = useState("starter");
  const { setOnShippingPage } = props;
  return (
    <StyledShipping>
      <h2>Shipping</h2>
      <a onClick={e => setOnShippingPage(false)}>
        Back to Faimly Brush Preferences
      </a>
      <div>shipping container!</div>
    </StyledShipping>
  );
};

export default Shipping;

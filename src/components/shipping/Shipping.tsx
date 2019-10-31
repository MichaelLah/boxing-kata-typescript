import React, { useState } from "react";
import styled from "styled-components";

interface ShippingProps {
  setOnShippingPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const StyledShipping = styled.div<{}>`
  .link-text {
    color: #01c9f0;
    cursor: pointer;
  }
`;
const Shipping: React.FC<ShippingProps> = props => {
  const [tabSelection, setTabSelection] = useState("starter");
  const { setOnShippingPage } = props;
  return (
    <StyledShipping>
      <h2>Shipping</h2>
      <a className="link-text" onClick={e => setOnShippingPage(false)}>
        Back to Faimly Brush Preferences
      </a>
      <div>shipping container!</div>
      <div>
      </div>
    </StyledShipping>
  );
};

export default Shipping;

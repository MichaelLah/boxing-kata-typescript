import React, { useState } from "react";
import styled from "styled-components";
import TabHeader from "./TabHeader";

const STARTER_BOXES = "Starter Boxes";
const REFIL_BOXES = "Refill Boxes";

interface ShippingProps {
  setOnShippingPage: React.Dispatch<React.SetStateAction<boolean>>;
}
const StyledShipping = styled.div<{}>`
  .link-text {
    color: #01c9f0;
    cursor: pointer;
  }
  .tab-container {
    display: flex;
  }
`;
const Shipping: React.FC<ShippingProps> = props => {
  const [tabSelection, setTabSelection] = useState(STARTER_BOXES);
  const { setOnShippingPage } = props;
  return (
    <StyledShipping>
      <h2>Shipping</h2>
      <a className="link-text" onClick={e => setOnShippingPage(false)}>
        Back to Faimly Brush Preferences
      </a>
      <div className="tab-container">
        <TabHeader
          headerText={STARTER_BOXES}
          handleClick={setTabSelection}
          selected={STARTER_BOXES === tabSelection}
        />
        <TabHeader
          headerText={REFIL_BOXES}
          handleClick={setTabSelection}
          selected={REFIL_BOXES === tabSelection}
        />
      </div>
    </StyledShipping>
  );
};

export default Shipping;

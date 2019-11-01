import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TabHeader from "./TabHeader";
import { MemberPreferences } from "../FamilyPreferences";
import { BoxItem } from "./ShippingBox";
import generateStarterBoxes from "../../util/generateStarterBoxes";
import RefillBoxes from "./RefillBoxes";
import StarterBoxes from "./StarterBoxes";

const STARTER_BOXES = "Starter Boxes";
const REFIL_BOXES = "Refill Boxes";

interface ShippingProps {
  setOnShippingPage: React.Dispatch<React.SetStateAction<boolean>>;
  members: Array<MemberPreferences>;
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
  //using these weird names for the state because they clash with what generateStarterBoxes returns
  const [currentStarterBoxes, setCurrentStarterBoxes] = useState(
    Array<Array<BoxItem>>()
  );
  const [currentRefillBoxes, setCurrentRefillBoxes] = useState(
    Array<Array<BoxItem>>()
  );
  const { setOnShippingPage, members } = props;
  useEffect(() => {
    const { starterBoxes, refillBoxes } = generateStarterBoxes(members);
    setCurrentStarterBoxes(starterBoxes);
    setCurrentRefillBoxes(refillBoxes);
  }, []);
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
      {tabSelection === REFIL_BOXES && (
        <RefillBoxes boxes={currentRefillBoxes}></RefillBoxes>
      )}
      {tabSelection === STARTER_BOXES && (
        <StarterBoxes boxes={currentStarterBoxes}></StarterBoxes>
      )}
    </StyledShipping>
  );
};

export default Shipping;

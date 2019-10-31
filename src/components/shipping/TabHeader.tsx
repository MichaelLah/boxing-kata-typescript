import React from "react";
import styled from "styled-components";

interface TabHeaderProps {
  headerText: string;
  handleClick: () => void;
}
const StyledTabHeader = styled.div<{}>`
  color: #01c9f0;
`;
const TabHeader: React.FC<TabHeaderProps> = props => {
  return (
    <StyledTabHeader>
      <div>aasdf</div>
    </StyledTabHeader>
  );
};

export default TabHeader;

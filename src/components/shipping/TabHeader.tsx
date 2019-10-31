import React from "react";
import styled from "styled-components";

interface TabHeaderProps {
  headerText: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  selected: boolean;
}
const StyledTabHeader = styled.div<{ selected: boolean }>`
  background-color: ${props => (props.selected ? "white" : "#f7f7f7")};
  cursor: pointer;
  width: 300px;
  height: 100px;
  border: 1px solid grey;
  font-size: 1.7em;
  color: #01c9f0;
  .button-text {
    color: #01c9f0;
  }
`;
const TabHeader: React.FC<TabHeaderProps> = props => {
  const { headerText, selected, handleClick } = props;
  return (
    <StyledTabHeader selected={selected} onClick={e => handleClick(headerText)}>
      {headerText}
    </StyledTabHeader>
  );
};

export default TabHeader;

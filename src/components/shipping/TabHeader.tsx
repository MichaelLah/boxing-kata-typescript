import React from "react";
import styled from "styled-components";

interface TabHeaderProps {
  headerText: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  selected: boolean;
}
const StyledTabHeader = styled.div<{ selected: boolean }>`
  background-color: ${props => (props.selected ? "#d1d1d1" : "#f7f7f7")};
  cursor: pointer;
  width: 300px;
  height: 100px;
  border: 1px solid grey;
  font-size: 2em;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  .button-text {
    color: #01c9f0;
    vertical-align: middle;
  }
`;
const TabHeader: React.FC<TabHeaderProps> = props => {
  const { headerText, selected, handleClick } = props;
  return (
    <StyledTabHeader selected={selected} onClick={e => handleClick(headerText)}>
      <div className="button-text">{headerText}</div>
    </StyledTabHeader>
  );
};

export default TabHeader;

import React from "react";
import styled from "styled-components";

const StyledMemberDetails = styled.div<{ brushColor: string }>`
  background-color: grey;
  border-radius: 20px;
  height: 70px;
  width: 125px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .details-container {
    /* margin-left: 15px; */
  }
  .color-circle {
    background-color: ${props => props.brushColor};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    align-self: center;
    margin-right: 10px;
  }
  .color-container {
    display: flex;
    width: 75%;
    text-transform: capitalize;
  }
`;

const MemberDetails: React.FC<{
  color: string;
  primary: boolean;
  name: string;
}> = props => {
  const { color, primary, name } = props;
  return (
    <StyledMemberDetails brushColor={color}>
      {/* <div className="details-container"> */}
      <div className="member-name">{name}</div>
      <div>{primary ? "Primary" : "Dependent"}</div>
      <div className="color-container">
        <div className="color-circle"></div>
        <div>{color}</div>
      </div>
      {/* </div> */}
    </StyledMemberDetails>
  );
};
export default MemberDetails;

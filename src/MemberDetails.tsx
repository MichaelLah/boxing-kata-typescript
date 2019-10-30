import React from 'react'
import styled from 'styled-components'

interface MemberDetailsProps {
  color: string,
  primary: boolean,
  name: string,
}

const StyledMemberDetails = styled.div<{ brushColor: string }>`
  background-color: grey;
  border-radius: 20px;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  .color-circle{
    background-color: ${props => props.brushColor};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    align-self: center;
  }
  .color-container{
    display: flex;
    width: 75%;
  }
`

const MemberDetails: React.FC<MemberDetailsProps> = (props) => {
  const { color, primary, name } = props;
  return (
    <StyledMemberDetails brushColor={"chartreuse"}>
      <div>{name}</div>
      <div>{primary ? "Primary" : "Dependent"}</div>
      <div className="color-container">
        <div className="color-circle"></div>
        <div>{color}</div>
      </div>
    </StyledMemberDetails>
  )

};
export default MemberDetails;
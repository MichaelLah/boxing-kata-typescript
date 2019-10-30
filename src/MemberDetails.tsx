import React from 'react'
import styled from 'styled-components'

interface MemberDetailsProps {
  color: string,
  primary: boolean,
  name: string,
}

const StyledMemberDetails = styled.div<{brushColor: string}>`
  background-color: black;
  .color-circle{
    background-color: ${props => props.brushColor};
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`

const MemberDetails: React.FC<MemberDetailsProps> = (props) => {
  const { color, primary, name } = props;
  return (
    <StyledMemberDetails brushColor={"chartreuse"}>
      <p>{name}</p>
      <p>{primary ? "Primary" : "Dependent"}</p>
      <div>
        <div className="color-circle"></div>
      </div>
      <p>{color}</p>
    </StyledMemberDetails>
  )

};
export default MemberDetails;
import React from 'react';

interface MemberDetailsProps {
  color: string,
  primary: boolean,
  name: string,
}
const MemberDetails: React.FC<MemberDetailsProps> = (props) => {
  const { color, primary, name } = props;
  return (
    <div>
      <div>{color}</div>
      <div>{primary}</div>
      <div>{name}</div>
    </div>
  )

};
export default MemberDetails;
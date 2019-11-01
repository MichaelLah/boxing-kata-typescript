import React from "react";
import styled from "styled-components";
import MemberDetails from "./MemberDetails";

export interface MemberPreferences {
  brush_color: "pink" | "green" | "blue";
  contract_effective_date: string;
  id: number;
  name: string;
  primary_insured_id: number;
}
interface FamilyPreferencesProps {
  error: boolean;
  loading: boolean;
  members: Array<MemberPreferences>;
  setOnShippingPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledFamilyPreferences = styled.div<object>`
  /* display: flex; */
  .preferences-container {
    display: flex;
    flex-wrap: wrap;
  }
  button {
    margin-top: 15px;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    background-color: #00c9f0;
  }
`;

const FamilyPreferences: React.FC<FamilyPreferencesProps> = props => {
  const { loading, members, error, setOnShippingPage } = props;
  const allMembers = members.map(member => {
    return (
      <MemberDetails
        color={member.brush_color}
        primary={!member.primary_insured_id}
        name={member.name}
      />
    );
  });
  return (
    <StyledFamilyPreferences>
      <p>Family Brush Preferences</p>
      {loading && <p>IM LOADING PUT SOMETHING HERE</p>}
      {error ? (
        <p>Error: Could not receive family preferences</p>
      ) : (
        <>
          <div className="preferences-container">{allMembers}</div>
          <button onClick={e => setOnShippingPage(true)}>Go to Shipping</button>
        </>
      )}
    </StyledFamilyPreferences>
  );
};
export default FamilyPreferences;
// export MemberPreferences;

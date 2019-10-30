import React from 'react';
import MemberDetails from './MemberDetails'

export interface MemberPreferences {
    brush_color: string;
    contract_effective_date: string,
    id: number,
    name: string,
    primary_insured_id: number,
}
interface FamilyPreferencesProps {
    loading: boolean,
    members: Array<MemberPreferences>,
    error: boolean,

}
const FamilyPreferences: React.FC<FamilyPreferencesProps> = (props) => {
    const { loading, members } = props
    const allMembers = members.map((member) => {
        return <MemberDetails color={member.brush_color} primary={!member.primary_insured_id} name={member.name} />
    })
    return (<div>{allMembers}</div>)
}
export default FamilyPreferences;
// export MemberPreferences;
import React from "react";
import { useParams } from "react-router-dom";
import { getAllMember } from "../api/member";
import { InfoEntry, MemberNav } from "../components/ProfileNavigation";

export default function Memberlist() {
  const [memberList, setMemberList] = React.useState([]);
  const { eventID } = useParams();

  async function fetchMember() {
    const members = await getAllMember(eventID);
    setMemberList(members);
  }

  React.useEffect(() => {
    fetchMember();
    // eslint-disable-next-line
  }, []);

  return (
    <MemberNav>
      {memberList.map((member, index) => {
        return (
          <InfoEntry key={member.userID} item={index}>
            {member.userName}
          </InfoEntry>
        );
      })}
    </MemberNav>
  );
}

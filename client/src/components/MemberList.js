import React from "react";
import styled from "@emotion/styled";
import { getAllMember } from "../api/member";
import { InfoEntry, InfoNav } from "../components/ProfileNavigation";

const Nav = styled(InfoNav)`
  width: 100%;
  padding: 0;
`;
export default function Memberlist() {
  const [memberList, setMemberList] = React.useState([]);
  const eventID = new URLSearchParams(window.location.search).get("ID");

  async function fetchMember() {
    const members = await getAllMember(eventID);
    setMemberList(members);
  }

  React.useEffect(() => {
    fetchMember();
  }, []);

  return (
    <Nav>
      {memberList.map((member, index) => {
        return (
          <InfoEntry key={member.userID} item={index}>
            {member.userName}
          </InfoEntry>
        );
      })}
    </Nav>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { getPolls } from "../api/poll";
import { InfoNav, InfoEntry } from "../components/ProfileNavigation";
import LinkNoDeco from "../components/LinkNoDeco";

const Nav = styled(InfoNav)`
  width: 100%;
  margin-bottom: 45px;
  padding: 0;
  overflow: scroll;
`;

export default function PollOverview() {
  const [polls, setPolls] = React.useState();

  React.useEffect(() => {
    async function pollFetch() {
      const eventID = new URLSearchParams(window.location.search).get("ID");
      const result = await getPolls(eventID);
      setPolls(result);
    }
    pollFetch();
  }, []);

  return (
    <Nav>
      {polls &&
        polls.map((poll, index) => {
          return (
            <LinkNoDeco key={poll._id} to={`/poll/?ID=${poll.event}&poll=${poll._id}`}>
              <InfoEntry key={poll._id} item={index}>
                {poll.title}
              </InfoEntry>
            </LinkNoDeco>
          );
        })}
    </Nav>
  );
}

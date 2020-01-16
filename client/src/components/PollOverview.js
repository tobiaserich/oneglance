import React from "react";
import { useParams } from "react-router-dom";
import { getPolls } from "../api/poll";
import { InfoEntry, PollNav } from "../components/ProfileNavigation";
import LinkNoDeco from "../components/LinkNoDeco";

export default function PollOverview() {
  const [polls, setPolls] = React.useState();
  const { eventID } = useParams();

  React.useEffect(() => {
    async function pollFetch() {
      const result = await getPolls(eventID);
      setPolls(result);
    }
    pollFetch();
    // eslint-disable-next-line
  }, []);

  return (
    <PollNav>
      {polls &&
        polls.map((poll, index) => {
          return (
            <LinkNoDeco key={poll._id} to={`/poll/${poll.event}/${poll._id}`}>
              <InfoEntry key={poll._id} item={index}>
                {poll.title}
              </InfoEntry>
            </LinkNoDeco>
          );
        })}
    </PollNav>
  );
}

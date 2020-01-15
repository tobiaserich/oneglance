import React from "react";
import styled from "@emotion/styled";
import { getTasks } from "../api/task";
import { InfoNav, InfoEntry } from "../components/ProfileNavigation";
import LinkNoDeco from "../components/LinkNoDeco";
import { useParams } from "react-router-dom";

const Nav = styled(InfoNav)`
  width: 100%;
  overflow: scroll;
  margin-bottom: 45px;
  padding: 0;
`;

export default function TaskOverview() {
  const [tasks, setTasks] = React.useState();
  const { eventID } = useParams();

  React.useEffect(() => {
    async function tasksFetch() {
      const result = await getTasks(eventID);
      setTasks(result);
    }
    tasksFetch();
  }, []);

  return (
    <Nav>
      {tasks &&
        tasks.map((task, index) => {
          return (
            <LinkNoDeco key={task._id} to={`/task/${task.event}/${task._id}`}>
              <InfoEntry key={task._id} item={index}>
                {task.title}
              </InfoEntry>
            </LinkNoDeco>
          );
        })}
    </Nav>
  );
}

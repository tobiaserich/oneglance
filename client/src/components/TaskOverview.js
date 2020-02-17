import React from "react";
import { getTasks } from "../api/task";
import { PollTaskNav, InfoEntry } from "../components/ProfileNavigation";
import LinkNoDeco from "../components/LinkNoDeco";
import { useParams } from "react-router-dom";

export default function TaskOverview() {
  const [tasks, setTasks] = React.useState();
  const { eventID } = useParams();

  React.useEffect(() => {
    async function tasksFetch() {
      const result = await getTasks(eventID);
      setTasks(result);
    }
    tasksFetch();
    // eslint-disable-next-line
  }, []);

  return (
    <PollTaskNav>
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
    </PollTaskNav>
  );
}

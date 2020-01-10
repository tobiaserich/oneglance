import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { getTasks } from "../api/task";
import { InfoNav, InfoEntry } from "../components/ProfileNavigation";

const Nav = styled(InfoNav)`
  width: 100%;
  margin-bottom: 45px;
  padding: 0;
  overflow: scroll;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;
export default function TaskOverview() {
  const [tasks, setTasks] = React.useState();

  React.useEffect(() => {
    async function tasksFetch() {
      const eventID = new URLSearchParams(window.location.search).get("ID");
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
            <CustomLink key={task._id} to={`/task/?ID=${task.event}&task=${task._id}`}>
              <InfoEntry key={task._id} item={index}>
                {task.title}
              </InfoEntry>
            </CustomLink>
          );
        })}
    </Nav>
  );
}

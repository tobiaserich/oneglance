import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { setTask, getTask } from "../api/task";
import { AddContainer, FlexContainer } from "../components/Container";
import Label from "../components/Label";
import { Input, EntryInput } from "../components/Input";
import { NewEntryButton, FlexButton } from "../components/Button";

export default function Task() {
  const [title, setTitle] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const [animation, setAnimation] = React.useState("none");
  const history = useHistory();
  const { eventID } = useParams();
  const { taskID } = useParams();

  function addTask() {
    const task = [...tasks];
    task.push("");
    setTasks(task);
  }

  React.useEffect(() => {
    async function fetchTask() {
      const result = await getTask(taskID);
      setTitle(result.title);
      setTasks(result.task);
    }
    fetchTask();
    // eslint-disable-next-line
  }, []);

  function handleChange(event, index) {
    const task = [...tasks];
    task[index] = event.target.value;
    setTasks(task);
  }

  function handleSubmit() {
    if (title && tasks) {
      setTask(tasks, eventID, title, taskID);
      history.push(`/eventDetails/${eventID}`);
    } else {
      setAnimation("start");
      setTimeout(() => setAnimation("none"), 1000);
    }
  }
  return (
    <AddContainer>
      <Label>
        Title
        <Input
          align="center"
          value={title}
          onChange={event => setTitle(event.target.value)}
          animation={animation}
        />
      </Label>

      <Label>
        Tasks
        {tasks.map((task, index) => {
          return (
            <EntryInput
              key={index}
              value={tasks[index]}
              onChange={event => {
                handleChange(event, index);
              }}
            />
          );
        })}
      </Label>

      <NewEntryButton type="button" onClick={() => addTask()}>
        Add task
      </NewEntryButton>
      <FlexContainer>
        <FlexButton type="button" onClick={() => history.push(`/eventDetails/${eventID}`)}>
          Discard
        </FlexButton>
        <FlexButton
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </FlexButton>
      </FlexContainer>
    </AddContainer>
  );
}

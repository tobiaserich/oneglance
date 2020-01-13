import React from "react";
import { useHistory } from "react-router-dom";
import { setTask, getTask } from "../api/task";
import { AddContainer, FlexContainer } from "../components/Container";
import Label from "../components/Label";
import Input, { EntryInput } from "../components/Input";
import { NewEntryButton, FlexButton } from "../components/Button";

export default function Task() {
  const [title, setTitle] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const history = useHistory();
  const eventID = new URLSearchParams(window.location.search).get("ID");
  const taskID = new URLSearchParams(window.location.search).get("task");

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
  }, []);

  function handleChange(event, index) {
    const task = [...tasks];
    task[index] = event.target.value;
    setTasks(task);
  }

  function handleSubmit() {
    setTask(tasks, eventID, title, taskID);
    history.push(`../eventDetails/?ID=${eventID}`);
  }
  return (
    <AddContainer>
      <Label>
        Title
        <Input align="center" value={title} onChange={event => setTitle(event.target.value)} />
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
        <FlexButton type="button" onClick={() => history.push(`../eventDetails/?ID=${eventID}`)}>
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

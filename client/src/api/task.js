//get

export async function getTasks(eventID) {
  const response = await fetch(`/api/tasks/${eventID}`);
  const result = await response.json();
  return result;
}
export async function getTask(pollID) {
  const response = await fetch(`/api/task/${pollID}`);
  const result = await response.json();
  return result;
}

//post

export function setTask(task, eventID, title, taskID) {
  const totalData = { taskID, title, task };
  return fetch(`/api/task/${eventID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(totalData)
  });
}

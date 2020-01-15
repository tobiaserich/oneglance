//get

export async function getTasks(eventID) {
  const response = await fetch(`/api/events/${eventID}/tasks`);
  const result = await response.json();
  return result;
}
export async function getTask(pollID) {
  const response = await fetch(`/api/tasks/${pollID}`);
  const result = await response.json();
  return result;
}

//post

export function setTask(task, eventID, title, taskID) {
  const totalData = { taskID, title, task };
  return fetch(`/api/events/${eventID}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(totalData)
  });
}

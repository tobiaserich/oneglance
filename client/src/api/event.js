// get functions
export async function getOwnEvents(userName) {
  const response = await fetch(`/api/event/user/${userName}`);
  const events = await response.json();
  return events;
}

export async function getOneEvent(eventID) {
  if (eventID) {
    const response = await fetch(`/api/event/${eventID}`);
    const event = await response.json();
    return event;
  }
}

// set functions
export function setEvent(title, date, descr, background, user) {
  const bundledInfo = { title, date, descr, background, owner: user };
  return fetch("/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bundledInfo)
  });
}

// delete functions
export async function deleteEvent(eventID) {
  return await fetch(`/api/event/del/${eventID}`, {
    method: "DELETE"
  });
}

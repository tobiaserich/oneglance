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

export function deleteEvent(eventID) {
  console.log();
  return fetch(`/api/event/del/${eventID}`, {
    method: "DELETE"
  });
}

export async function getOwnEvents(userName) {
  const response = await fetch(`/api/event/${userName}`);
  const events = await response.json();
  return events;
}

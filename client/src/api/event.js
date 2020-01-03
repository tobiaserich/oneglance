export function setEvent(title, date, descr, background, user) {
  const data = { title, date, descr, background, owner: user };
  return fetch("/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
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
  const data = await response.json();
  return data;
}

export function addPoll(totalPoll, eventID) {
  return fetch(`/api/poll/${eventID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(totalPoll)
  });
}

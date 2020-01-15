// get
export async function getPolls(eventID) {
  const response = await fetch(`/api/events/${eventID}/polls`);
  const result = await response.json();
  return result;
}

export async function getPoll(pollID) {
  const response = await fetch(`/api/polls/${pollID}`);
  const result = await response.json();
  return result;
}
//post
export function addPoll(totalPoll, eventID, title, pollID) {
  const totalData = { pollID, title, poll: totalPoll };
  return fetch(`/api/polls/${eventID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(totalData)
  });
}

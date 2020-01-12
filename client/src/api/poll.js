// get
export async function getPolls(eventID) {
  const response = await fetch(`/api/polls/${eventID}`);
  const result = await response.json();
  return result;
}

export async function getPoll(pollID) {
  const response = await fetch(`/api/poll/${pollID}`);
  const result = await response.json();
  return result;
}
//post
export function addPoll(totalPoll, eventID, title, pollID) {
  const totalData = { pollID, title, poll: totalPoll };
  return fetch(`/api/poll/${eventID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(totalData)
  });
}

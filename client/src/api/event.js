export function setEvent(title, date, descr, background, user) {
  const datas = { title, date, descr, background, owner: user };
  return fetch("/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datas)
  });
}

export async function getOwnEvents(userName) {
  const response = await fetch(`/api/event/:${userName}`);
  const datas = await response.json();
  return datas;
}

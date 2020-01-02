export function setEvent(title, date, descr, background, user) {
  const datas = { title, date, descr, background, owner: user };
  return fetch("/api/addEvent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datas)
  });
}

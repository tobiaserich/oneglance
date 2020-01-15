//get functions

export async function getAllMember(ID) {
  const response = await fetch(`/api/events/${ID}/users`);
  const user = await response.json();

  return user;
}

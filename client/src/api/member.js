export async function getAllMember(ID) {
  const response = await fetch(`/api/user/event/${ID}`);
  const user = await response.json();

  return user;
}

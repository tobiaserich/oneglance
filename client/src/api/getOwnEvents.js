export default async function getOwnEvents(userName) {
  const response = await fetch(`/api/events/:TobiasErich`);
  const datas = await response.json();
  return datas;
}

import renderUsersList from './renderUsersList';

export default async function () {
  const response = await fetch('/data.json');
  const data = await response.json();

  console.log(data);

  renderUsersList(data);
}

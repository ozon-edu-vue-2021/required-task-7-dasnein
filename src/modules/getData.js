import renderUsersList from './renderUsersList';
import state from './state';

export default async function () {
  const response = await fetch('/data.json');
  const data = await response.json();

  state.users = data;
  renderUsersList();

  console.log(data);
  console.log(state.popular);
}

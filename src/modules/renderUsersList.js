import showUserInfo from './showUserInfo';
import { contactsList, detailsView } from './elements';
import state from './state';

function renderUsersList() {
  const { users } = state;

  for (const user of users) {
    const listElement = document.createElement('li');

    listElement.innerHTML = `<strong>${user.name}</strong>`;
    contactsList.append(listElement);

    listElement.addEventListener('click', function (e) {
      e.preventDefault();

      state.scroll = window.scrollY;

      this.classList.add('active');
      showUserInfo(user);

      if (detailsView.classList.contains('hidden')) {
        detailsView.classList.remove('hidden');
      }
    });
  }
}

export default renderUsersList;

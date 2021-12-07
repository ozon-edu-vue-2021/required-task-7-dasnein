import { container, backButton, contactsList } from './elements';
import state from './state';

function backToMainPage(e) {
  e.preventDefault();

  container.classList.remove('details');
  contactsList.querySelector('li.active').classList.remove('active');

  if (state.scroll) {
    window.scrollTo({ top: state.scroll, behavior: 'smooth' });
  }
}

export default function () {
  backButton.addEventListener('click', backToMainPage);
}

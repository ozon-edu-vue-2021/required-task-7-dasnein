import { container } from './elements';

export default function (user) {
  container.classList.add('details');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

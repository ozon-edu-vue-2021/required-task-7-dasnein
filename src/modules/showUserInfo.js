import { container } from './elements';
import renderUserCard from './renderUserCard';

export default function (user) {
  renderUserCard(user);  
  container.classList.add('details');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

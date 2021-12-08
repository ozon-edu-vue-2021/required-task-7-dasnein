import fragments from './fragments';
import { detailsViewList } from './elements';

export default function (user) {
  detailsViewList.innerHTML = '';

  detailsViewList.append(fragments.friends.get(user.id).cloneNode(true));
  detailsViewList.append(fragments.strangers.get(user.id).cloneNode(true));
  detailsViewList.append(fragments.popular.cloneNode(true));
}

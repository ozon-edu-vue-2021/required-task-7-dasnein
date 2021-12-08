import './css/style.css';
import 'regenerator-runtime/runtime';

import getData from './modules/getData';
import initCommonEvents from './modules/initCommonEvents';

(async () => {
  await getData();
  initCommonEvents();
})();

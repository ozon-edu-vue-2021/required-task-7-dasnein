import { buildPopularUsersList } from './operations';

const state = {
  _popular: [],

  users: [],
};

Object.defineProperty(state, 'popular', {
  get() {
    if (this._popular.length === 0) {
      buildPopularUsersList();
    }

    return this._popular;
  },
  set(val) {
    this._popular = val;
  },
});

export default state;

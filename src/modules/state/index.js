import { buildPopularUsersList } from './operations';

const state = {
  _popular: [],

  users: [],
};

Object.defineProperties(state, {
  popular: {
    get() {
      if (this._popular.length === 0) {
        this._popular = buildPopularUsersList();
      }

      return this._popular;
    },
  },
});

export default state;

import state from './state';
import createFragment from './createFragment';

const fragments = {
  _popular: null,

  friends: {
    _state: {},
    get(userId) {
      if (!this._state[userId]) {
        const friends = state.users[userId - 1].friends
          .map((id) => state.users[id - 1].name)
          .slice(0, 3);

        this._state[userId] = createFragment({
          title: 'Друзья',
          list: friends,
        });
      }

      return this._state[userId];
    },
  },

  strangers: {
    _state: {},
    get(userId) {
      if (!this._state[userId]) {
        const strangers = state.users
          .filter((user) => !state.users[userId - 1].friends.includes(user.id))
          .slice(0, 3);

        this._state[userId] = createFragment({
          title: 'Не в друзьях',
          list: strangers,
        });
      }

      return this._state[userId];
    },
  },
};

Object.defineProperties(fragments, {
  popular: {
    get() {
      if (!this._popular) {
        this._popular = createFragment({
          title: 'Популярные люди',
          list: state.popular,
        });
      }

      return this._popular;
    },
  },
});

window.fragments = fragments;

export default fragments;

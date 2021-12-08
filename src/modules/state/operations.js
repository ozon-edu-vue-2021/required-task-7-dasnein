import state from './index';

export function buildPopularUsersList() {
  const allUsersList = state.users.flatMap((user) => user.friends);
  const popularityMap = allUsersList.reduce((acc, id) => {
    return Object.assign({}, acc, {
      [id]: (acc[id] || 0) + 1,
    });
  }, {});

  state.users.forEach((user) => {
    user.popularity = popularityMap[user.id];
  });

  const sortedByPopularity = [...state.users].sort((a, b) => {
    if (a.popularity === b.popularity) {
      return a.name.localeCompare(b.name);
    }

    return b.popularity - a.popularity;
  });

  return sortedByPopularity.slice(0, 3);
}

export default function ({ title, list }) {
  const fragment = document.createDocumentFragment();
  const titleElement = document.createElement('li');

  titleElement.classList.add('people-title');
  titleElement.textContent = title;
  fragment.append(titleElement);

  list.forEach((item) => {
    const text = item.name || item;
    const el = document.createElement('li');

    el.innerHTML = `<i class="fa fa-male"></i><span>${text}</span>`;
    fragment.append(el);
  });

  return fragment;
}

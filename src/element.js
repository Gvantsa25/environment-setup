export function el(type, attrs, events, ...content) {
  const element = document.createElement(type);

  if (attrs) {
    for (let attr in attrs) {
      element.setAttribute(attr, attrs[attr]);
    }
  }

  if (events)
    element.addEventListener(Object.keys(events)[0], Object.values(events)[0]);

  if (content) {
    content.forEach((item) => {
      if (item instanceof Element) element.appendChild(item);
      else element.textContent = item;
    });
  }

  return element;
}
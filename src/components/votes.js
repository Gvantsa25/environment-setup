import "./votes.css";

import { el } from "../element";

export default function (id, voteCount) {
  const element = el(
    "div",
    { class: "votes" },
    null,
    el(
      "img",
      { src: "../../images/icons/icon-plus.svg" },
      {
        click: () =>
          (document.getElementById(`count-${id}`).innerHTML =
            Number(document.getElementById(`count-${id}`).innerHTML) + 1),
      }
    ),
    el("span", { id: `count-${id}` }, null, voteCount),
    el("img", { src: "../../images/icons/icon-minus.svg" })
  );

  return element;

  // return `<div class="votes">
  //   <img src=${plus} />
  //   <span>${voteCount}</span>
  //   <img src=${minus} />
  // </div>`;
}

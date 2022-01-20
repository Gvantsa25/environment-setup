import "./comment.css";
import votes from "./votes";
import { el } from "../element";

function singleComment({ id,score, user, createdAt, content }) {
  const voteMarkup = votes(id,score);

  const markup = el(
    "div",
    { class: "comment" },
    null,
    voteMarkup,
    el(
      "div",
      { class: "comment-content" },
      null,
      el(
        "div",
        null,
        null,
        el(
          "div",
          { class: "user-info" },
          null,
          el("img", { src: user.image.png }),
          el("span", null, null, el("strong", null, null, user.username)),
          el("span", null, null, createdAt)
        ),
        el(
          "div",
          { class: "reply" },
          null,
          el("img", { src: "../../images/icons/icon-reply.svg" }),
          el("button", null, null, "Reply")
        )
      ),
      el("p", null, null, content)
    )
  );

  return markup;

  // const markup = `
  //   ${voteMarkup}
  //   <div class="comment-content">
  //     <div>
  //       <div class="user-info">
  //         <img src="${user.image.png}" />
  //         <span><strong>${user.username}</strong></span>
  //         <span>${createdAt}</span>
  //       </div>
  //       <div class="reply">
  //         <img src=${replyBtn}>
  //         <button>Reply</button>
  //       </div>
  //     </div>
  //     <p>${content}</p>
  //   </div>
  // `;
}

function Comment(data) {
  const commentMarkup = singleComment(data);
  let replies = [];

  if (data.replies.length) {
    replies = data.replies.map((reply) => singleComment(reply));
  }

  const markup = el(
    "div",
    null,
    null,
    commentMarkup,
    el("div", { class: "all-replies" }, null, ...replies)
  );
  // const markup = `
  //   <div>
  //     ${commentMarkup}
  //     <div class="all-replies">${replies.join("")}</div>
  //   </div>
  // `;

  return markup;
}

export default Comment;

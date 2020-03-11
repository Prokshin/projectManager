import React from "react";

import "./comment.css";

export type comment = {
  text?: string;
  author?: string;
  link?: {
    url?: string;
    text?: string;
  };
};

interface ICommentProps {
  taskId?: string;
  comments?: comment[];
}

const Comment = (props: ICommentProps) => {
  let commentsList = [<p>Ни один комментарий ещё не добавленн</p>];
  if (props.comments) {
    commentsList = props.comments.map((comment, index) => {
      return (
        <div key={index} className="comment">
          <div>
            <ion-icon name="person" />
            {comment.author}
          </div>
          {comment.text}
          <a className="comment__link" href={comment.link?.url}>
            {comment.link?.text}
          </a>
        </div>
      );
    });
  }
  return (
    <div className="wrap">
      <h2>Комментарии</h2>
      {commentsList}
    </div>
  );
};

export default Comment;

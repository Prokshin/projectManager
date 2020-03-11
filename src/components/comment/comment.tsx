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
  let comm = [<p>Ни один комментарий ещё не добавленн</p>];
  if (props.comments) {
    comm = props.comments.map(com => {
      return (
        <div className="comment">
          <div>
            <ion-icon name="person" />
            {com.author}
          </div>
          {com.text}
          <a className="comment__link" href={com.link?.url}>
            {com.link?.text}
          </a>
        </div>
      );
    });
  }
  return (
    <div className="wrap">
      <h2>Комментарии</h2>
      {comm}
    </div>
  );
};

export default Comment;

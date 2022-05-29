import React from "react";
import s from "./Comment.module.css";

const Comment = (props) => {
    return (
        <div key={props.comment.id} className={s.comment}>
            <div className={s.comment__email}>{props.comment.email}</div>
            <div className={s.comment__text}>{props.comment.body}</div>
        </div>
    )
}

export default Comment;
import React from "react";
import s from "./Posts.module.css";
import {NavLink} from "react-router-dom";

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <h3 className={s.posts__header}>Посты</h3>
            <div className={s.posts__box}>
                <div className={s.posts__item}>
                    <div className={s.posts__info}>
                        <h4 className={s.posts__title}>{props.posts ? props.posts[1].title : null}</h4>
                        <p className={s.posts__date}>12.01.22</p>
                    </div>
                    <div className={s.posts__text}>
                        {props.posts ? props.posts[1].body : null}
                    </div>
                </div>
                <div className={s.posts__item}>
                    <div className={s.posts__info}>
                        <h4 className={s.posts__title}>{props.posts ? props.posts[1].title : null}</h4>
                        <p className={s.posts__date}>12.01.22</p>
                    </div>
                    <div className={s.posts__text}>
                        {props.posts ? props.posts[2].body : null}
                    </div>
                </div>
            </div>
            <NavLink to={'/user' + props.userId + '/posts'} className={s.posts__link}>Все посты</NavLink>
        </div>
    )
}

export default Posts;
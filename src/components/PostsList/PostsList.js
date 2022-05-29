import React from "react";
import {connect} from "react-redux";
import s from "./PostsList.module.css";
import {NavLink} from "react-router-dom";

const PostsList = (props) => {
    return (
        <div className={s.posts__list}>
            {props.posts ? props.posts.map(post => {
                return (
                    <div key={post.id} className={s.posts__item}>
                        <div className={s.posts__info}>
                            <h4 className={s.posts__title}>{post.title}</h4>
                            <p className={s.posts__date}>12.01.22</p>
                        </div>
                        <div className={s.posts__text}>
                            {post.body}
                        </div>
                        <NavLink className={s.posts__link} to={'/post' + post.id}>Открыть пост</NavLink>
                    </div>
                )
            }) : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.user.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList);

export default PostsListContainer;
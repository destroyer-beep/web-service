import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getComments, getPost} from "../../redux/postReducer";
import {useParams} from "react-router-dom";
import s from "./Post.module.css";
import Comment from "./Comment/Comment";

const Post = (props) => {

    const params = useParams();

    useEffect(() => {
        props.getPost(params.id);
        props.getComments(params.id)
    }, []);

    return (
        <div className={s.post}>
            <div className={s.post__title}>{props.post ? props.post.title : null}</div>
            <div className={s.post__date}>12.02.22</div>
            <div className={s.post__text}>{props.post ? props.post.body : null}</div>
            <div className={s.post__comments}>
                {console.log(props.comments)}
                {props.comments ? props.comments.map(comment => {
                    return (
                        <Comment comment={comment} key={comment.id}/>
                    )
                }) : null}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.post.post,
        comments: state.post.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (postId) => {
            dispatch(getPost(postId));
        },
        getComments: (postId) => {
            dispatch(getComments(postId));
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;

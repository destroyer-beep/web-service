import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getUser, getPosts} from "../../redux/userReducer";
import s from './User.module.css';
import Posts from "./Posts/Posts";
import Publications from "./publications/Publications";

const User = (props) => {
    const params = useParams();

    useEffect(() => {
        props.getUser(params.id);
        props.getPosts(params.id)
    }, [])

    return (
        <div className={s.user}>
            <div className={s.user__header}>
                <div className={s.user__name_box}>
                    <h2 className={s.user__name}>{props.user ? props.user.name : null}</h2>
                </div>
                <div className={s.user__info}>
                    <div className={s.user__info_box}>
                        <p className={s.user__city}>{props.user ? props.user.address.city : null}</p>
                        <p className={s.user__email}>{props.user ? props.user.email : null}</p>
                        <p className={s.user__phone}>{props.user ? props.user.phone : null}</p>
                    </div>
                    <button className={s.user__button_message}>Написать сообщение</button>
                    <button className={s.user__button_invite}>Предложить сходить на концерт</button>
                </div>
            </div>
            <div className={s.user__content}>
                <Posts posts={props.posts} userId={params.id}/>
                <Publications/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
        user: state.user.user,
        posts: state.user.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (userId) => {
            dispatch(getUser(userId));
        },
        getPosts: (userId) => {
            dispatch(getPosts(userId));
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
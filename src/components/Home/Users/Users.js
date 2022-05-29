import React, {useEffect} from 'react';
import UserItem from "./UserItem/UserItem";
import {connect} from "react-redux";
import {getUsers} from "../../../redux/usersReducer";
import s from './Users.module.css';

const Users = (props) => {

    useEffect(() => {
        props.getUsers();
    }, []);

    return (
        <div className={s.users}>
            <div className={s.users__info}>
                <h2 className={s.users__head}>Купили билеты</h2>
                <p className={s.users__count}><span className={s.users__add}>{props.users ? props.users.length : 0}/ </span>1000</p>
            </div>
            <div className={s.users__box}>
                {props.users ? props.users.map(user => {
                    return <UserItem user={user} key={user.id}/>
                }) : null}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.users.usersList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
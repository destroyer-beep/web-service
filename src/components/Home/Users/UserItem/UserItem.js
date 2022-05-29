import React from "react";
import s from './UserItem.module.css';
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    return (
        <div className={s.user__item}>
            <h4 className={s.user__name}>{props.user.name}</h4>
            <p className={s.user__address}>{props.user.address.city}</p>
            <NavLink to={'/user' + props.user.id} className={s.user__link}>Смотреть профиль</NavLink>
        </div>
    )
}

export default UserItem;
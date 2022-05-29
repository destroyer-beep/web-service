import React from "react";
import s from './Header.module.css'
const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__box}>
                <h1 className={s.header__logo}>CONCERT CLUB</h1>
                <div className={s.header__buttons}>
                    <button className={`${s.header__button} ${s.header__button_version}`}>Версия для слабовидящих</button>
                    <button className={`${s.header__button} ${s.header__button_profile}`}>Мой профиль</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
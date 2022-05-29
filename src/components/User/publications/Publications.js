import React from "react";
import s from "./publications.module.css";

const Publications = () => {
    return (
        <div className={s.publications}>
            <h3 className={s.publications__header}>
                Публикации
            </h3>
            <div className={s.publications__box}>
                <div className={s.publications__item}></div>
                <div className={s.publications__item}></div>
                <div className={s.publications__item}></div>
                <div className={s.publications__item}></div>
                <div className={s.publications__item}></div>
                <div className={s.publications__item}></div>
            </div>
        </div>
    )
}

export default Publications;
import React from "react";
import s from './History.module.css';

const History = () => {
    return (
        <div className={s.history}>
            <div className={s.history__head}>О группе</div>
            <div className={s.history__description}>
                Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
                Группа образовалась в 2009 году и на данный момент состоит
                из Тайлера Джозефа и Джоша Дана.
                Коллектив самостоятельно выпустил два альбома:
                Twenty One Pilots в 2009 и Regional at Best в 2011.
            </div>
        </div>
    )
}

export default History;
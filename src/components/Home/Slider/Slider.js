import React from "react";
import s from './Slider.module.css';

const Slider = () => {
    return (
        <div className={s.slider}>
            <div className={s.slider__text}>
                <h3 className={s.slider__head}>Twenty One Pilots</h3>
                <div className={s.slider__data}>22.02.23 В 21:00</div>
            </div>
            <button className={s.slider__button}>Купить билет</button>
            <div className={`${s.slider__arrow_left} + ' ' + ${s.slider__arrow}`}>
                <div> </div>
            </div>
            <div className={`${s.slider__arrow_right} + ' ' + ${s.slider__arrow}`}>
                <div> </div>
            </div>
        </div>
    )
}

export default Slider;
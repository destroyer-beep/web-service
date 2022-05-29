import React, {useState} from "react";
import s from './Description.module.css';

const Description = () => {

    let [message, setMessage] = useState('');

    const onMessageChange = (e) => {
        setMessage(e.currentTarget.value);
    }

    return (
        <div className={s.description}>
            <div className={s.description__box}>
                <h2 className={s.description__head}>О площадке</h2>
                <div className={s.description__text}>
                    <p className={s.description__text_bold}>
                        Современная площадка для проведения
                        концертов и других мероприятий любой
                        сложности.
                    </p>
                    <p className={s.desription__text_light}>
                        Мы предоставляем всю необходимую для
                        организаторов инфраструктуру и готовые
                        решения под все основные задачи любого
                        события, а также современное оборудование,
                        соответствующее самым высоким мировым
                        стандартам.
                    </p>
                </div>
            </div>
            <div className={s.description__form}>
                <h3 className={s.description__form_head}>
                    Оставить заявку на проведение концерта
                </h3>
                <textarea onChange={onMessageChange} value={message} className={s.description__input} name="description__form" placeholder="Расскажите о вашем предложении"></textarea>
                <button className={s.description__button}>Отправить</button>
            </div>
        </div>
    )
}

export default Description;
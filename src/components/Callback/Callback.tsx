import {useState} from 'react';
import Select from "../UI/Select/Select.tsx";
import {IoTriangle} from "react-icons/io5";

const Callback = () => {
    const [value, setValue] = useState<string>('Выберите услугу');
    return (
        <section className={'callback'}>
            <span style={{translate: '60%', right: '50%', top: 200, opacity: 0.1, width: 500}} className={'light white-big'}></span>
            <div className={'callback__figures'}>
                <IoTriangle className={'callback__figure first'}/>
                <IoTriangle className={'callback__figure second'}/>
                <IoTriangle className={'callback__figure third'}/>
            </div>
            <h1>Связаться со мной</h1>
            <div className={'callback__content'}>
                <div className={'callback__messages'}>
                    <div className={'callback__image'}></div>
                    <div style={{top: '10%', left: '5%'}}>Спасибо большое! ❤️</div>
                    <div style={{top: '30%', left: '10%'}}>Вышло даже лучше</div>
                    <div style={{top: '25%', right: '1%'}}>Очень понравилось 😍</div>
                    <div style={{top: '38%', left: '12%'}}>Все супер 🥳</div>

                </div>

                <form className={'callback__form glass'}>
                    <h1>Заказать услугу</h1>
                    <p>Оставьте свои контактные данные и я свяжусь с вами в ближайшее время </p>
                    <label>Имя</label>
                    <input type="text" placeholder={'Иван'}/>
                    <label>Телефон</label>
                    <input type="text" placeholder={'+7 (XXX) XXX-XX-XX'}/>
                    <label>Услуга</label>


                    <Select value={value} options={[
                        {value: '', label: 'Выберите услугу', disabled: true},
                        { value: 'Фото и видеосъемка', label: 'Фото и видеосъемка' },
                        { value: 'Озвучка', label: 'Озвучка' },
                        { value: 'Проведение свадьбы', label: 'Проведение свадьбы' },
                        { value: 'Корпоративы, юбилеи', label: 'Корпоративы, юбилеи' },

                    ]} onChange={(e) => setValue(e.target.dataset?.value)} />
                    <button>Отправить</button>
                </form>
            </div>

        </section>
    );
};

export default Callback;
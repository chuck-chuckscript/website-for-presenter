import {useState, FC} from 'react';
import {BsChevronDown} from "react-icons/bs";
import style from './select.module.scss';


interface Option {
    value: string;
    label: string;
    disabled?: boolean;
}

interface SelectProps{
    value: string
    options: Option[]
    onChange: (e: any) => void
}

const Select : FC<SelectProps> = ({value, options, onChange}) => {

    const [isOpen, setOpen] = useState(false);
    const clickHandler = () => {
        console.log(isOpen);
        setOpen(!isOpen)
    }

    if(options){
        return (
            <div onClick={clickHandler} className={[style.selectUi].join(' ')}>
                <h2>{value}<button className={isOpen ? style.active : ''} type={'button'}><BsChevronDown/></button></h2>
                <ul className={[style.selectUi__options, isOpen ? style.visible : ''].join(' ')} >
                    {options.map((el, index) => {
                        return (<li key={index} className={el.disabled ? style.disabled : ''} onClick={!el.disabled ? (e) => onChange(e) : undefined} data-value={el.value}>{el.label}</li>)
                    })}
                </ul>
            </div>
        );
    }
    return null;




};

export default Select;
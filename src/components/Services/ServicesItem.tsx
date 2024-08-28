import {FC, useEffect, useState, CSSProperties} from 'react';
import {FaCircle, FaSquare} from "react-icons/fa";
import {IoTriangle} from "react-icons/io5";
export interface Light {
    opacity?: number
    zIndex?: number
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
    boxShadow?: string
}

export type FigureType = 'square' | 'circle' | 'triangle'
export interface Figure{
    options: CSSProperties
    type: FigureType
}

interface ServiceProps {
    isReversed: boolean;
    title: string,
    description: string,
    price: number,
    photo: string,
    lights?: Light[]
    figures?: Figure[]
}




export const ServicesItem : FC<ServiceProps> = ({isReversed, photo, description, price, title, lights, figures}) => {
    const [light, setLight] = useState<Light[]>();
    const [figure, setFigures] = useState<Figure[]>();

    const createFigure = (options : Figure['options'], type : Figure['type'], key: number) => {
        if(type === 'circle'){
            return <FaCircle key={key} style={{...options}}/>
        }
        if (type === 'square'){
            return <FaSquare key={key} style={{...options}}/>
        }
        if (type === 'triangle'){
            return <IoTriangle key={key} style={{...options}}/>
        }

        return null;
    }


    useEffect(() => {
        if(lights) setLight([...lights])
    }, [lights]);

    useEffect(() => {
        if(figures) setFigures([...figures])
    }, [figures]);

    return (
        <article className={['services__service', isReversed ? 'reverse' : ''].join(' ')}>
            <img className={'services__service-image'} src={photo} alt={title}/>
            <div className={'services__service-desc'}>

                <h1>{title}</h1>
                <p>{description}</p>
                <div className={'services__service-price'}>
                    <h1><span>{Intl.NumberFormat('ru-Ru', {style: 'decimal'}).format(price)}</span> рублей за праздник
                    </h1>
                    <a>Подробнее об услуге</a>
                </div>

            </div>
            {
                light && light.map((el, i) => <span key={i} style={{...el}} className={'light'}></span>)
            }
            {
                figure && figure.map((el, index) => createFigure(el.options, el.type, index))
            }

        </article>
    );
};


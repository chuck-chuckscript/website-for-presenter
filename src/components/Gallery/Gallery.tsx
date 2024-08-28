
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Navigation} from "swiper/modules";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {useRef} from "react";

const urls = [
    'https://sun9-1.userapi.com/impg/jn__1VTVf7VAzyg9KBVSkwxFH44LW9BndyTm1w/Ka309Mu7MDY.jpg?size=2560x1707&quality=95&sign=84a8783a5716842548d5e2662bb587ac&type=album',
    'https://sun9-61.userapi.com/impg/fyhYjGHFw1XNiQFLtpdr-8hLIjNe6yI5d4eZbA/xxDxyx6NXSU.jpg?size=2560x1707&quality=95&sign=4653a8798398d143e469d65b5e6e0949&type=album',
    'https://sun9-65.userapi.com/impg/O6bbahoRuK33a-3d6CmrBkbIsCwkTL8VGT8aQg/9TmW2n4yDYg.jpg?size=2560x1707&quality=95&sign=383a3d46bd82229f7ca0bb05a3c9587d&type=album',
    'https://sun9-33.userapi.com/impg/oXDuGxueASWH4eh_jLmifsnQW0XCWyvUPWS7Hw/4fdOmyA2VDA.jpg?size=2560x1707&quality=95&sign=85926d31b9274d804d8e00641ab04bec&type=album'
];

const Gallery = () => {

    const swiperRef = useRef<SwiperRef>(null);


    const btnNext = useRef<HTMLButtonElement>(null);
    const btnPrev = useRef<HTMLButtonElement>(null);
    return (
        <section className={'gallery'}>
            <h1>Галерея</h1>


            <div className={'gallery__wrapper'}>

                <div className={'gallery__buttons'}>
                    <button ref={btnPrev} onClick={() => swiperRef.current?.swiper.slidePrev()}><BiChevronLeft/></button>
                    <button ref={btnNext} onClick={() => swiperRef.current?.swiper.slideNext()}><BiChevronRight/></button>
                </div>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },

                        720: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    ref={swiperRef}
                    className={'gallery__slider'}
                    slidesPerView={3}
                    spaceBetween={20}
                    modules={[Navigation]}
                    grabCursor={true}
                    onBeforeInit={(swiper) => {
                        if(btnPrev.current && btnNext.current) {
                            swiper.navigation.prevEl = btnPrev.current;
                            swiper.navigation.nextEl = btnNext.current;
                        }
                    }}
                    navigation={{
                        prevEl: btnPrev.current,
                        nextEl: btnNext.current,
                        disabledClass: 'disabled'
                    }}

                >
                    {urls.map((url, index) => <SwiperSlide className={'gallery__slide'} key={index}>
                        <img src={url} alt={'photo' + index}/>
                    </SwiperSlide>)}
                </Swiper>
            </div>


        </section>
    );
};

export default Gallery;
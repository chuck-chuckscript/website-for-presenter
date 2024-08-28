
import { IoTriangle } from "react-icons/io5";
import { FaSquare, FaCircle } from "react-icons/fa";
const Intro = () => {
    return (
        <section className={'intro'}>
                <span style={{width: 100, bottom: 150, left: 150, zIndex: 2, opacity: 0.1}}
                      className="light white-big"></span>
            <span style={{width: 914, top: 300, left: 200, opacity: 0.4, zIndex: 0}} className="light purple"></span>
            <span style={{width: 114, top: 300, left: 0, opacity: 0.4}} className="light purple"></span>
            <span style={{width: 514, top: '90%', left: '80%', opacity: 0.4, zIndex: 4}} className="light purple"></span>


            <div className={'intro__content'}>
                <div className="intro__content-text">
                    <div className={'intro__figures'}>
                        <IoTriangle className={'intro__figure first'}/>
                        <FaCircle className={'intro__figure third'}/>
                        <FaSquare className={'intro__figure second'}/>

                    </div>

                    <article className="intro__text glass">
                        <h2>Мы делаем ахуенно</h2>
                        <p>
                            Ведущий <span>Владик Глыба</span> сделает вам ебанутейший<br/> праздник с дракой в конце и
                            лицом
                            в конче
                        </p>
                    </article>

                    <h2>В том числе</h2>
                    <article className={'intro__tags'}>


                        <div className={'intro__tags-tag glass'}>
                            <img src={'/images/Ring.png'} alt="Ring"/>
                            <span>Проведение свадеб</span>
                        </div>
                        <div className={'intro__tags-tag glass'}>
                            <img src={'/images/Camera.png'} alt="Camera"/>
                            <span>Фото и видеосъемка</span>
                        </div>
                        <div className={'intro__tags-tag glass'}>
                            <img src={'/images/Party Popper.png'} alt="Party Popper"/>
                            <span>Юбилеи, корпоративы</span>
                        </div>
                        <div className={'intro__tags-tag glass'}>
                            <img src={'/images/Studio Microphone.png'} alt="Studio Microphone"/>
                            <span>Озвучка</span>
                        </div>


                    </article>
                </div>


                <img className={'intro__content-image'} src={'/images/image 2.png'} alt={'vlados'}/>
                <div className={'intro__content-image-alt'}>
                    <img src={'/images/image 2.png'} alt={'vlados'}/>
                </div>
            </div>


            <div className={'intro__poly'}>


                <svg className={'intro__poly-main'} version="1.2" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1438 380"
                     fill="transparent">


                    <g id="Layer">
                        <path
                            d="m1438 0v380h-1442v-72.3c0 0-6 0 127.1 0 133 0 216.1-38 289.1-61 73-23.1 205.6-3 325.6-17 120.1-14.1 250.1-99.6 340.1-156.2 90.1-56.5 360.1-73.5 360.1-73.5z"/>
                        <path
                            d="m-3.5 379.5v-71.3h0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0.1 0.1 0.1 0.2 0.1 0.1 0.2 0.1 0.1 0.1 0.2 0.1 0.1 0.2 0.1 0.2 0.1 0.1 0.2 0.1 0.2 0.1 0.2 0.1 0.2 0.1 0.2 0.1 0.2 0.2 0.1 0.2 0.1 0.2 0.2 0.1 0.2 0.2 0.1 0.2 0.2 0.2 0.1 0.2 0.2 0.2 0.2 0.2 0.1 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.2 0.3 0.2 0.2 0.2 0.2 0.2 0.3 0.2 0.2 0.2 0.3 0.2 0.2 0.3 0.2 0.2 0.3 0.2 0.3 0.2 0.2 0.3 0.2 0.3 0.2 0.3 0.3 0.2 0.3 0.2 0.3 0.3 0.2 0.3 0.3 0.3 0.2 0.3 0.3 0.3 0.2 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.3 0.4 0.3 0.3 0.3 0.4 0.3 0.3 0.3 0.4 0.3 0.3 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.3 0.4 0.4 0.3 0.4 0.4 0.3 0.4 0.4 0.4 0.3 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.4 0.5 0.4 0.4 0.4 0.5 0.4 0.4 0.5 0.4 0.4 0.5 0.4 0.5 0.4 0.5 0.4 0.5 0.5 0.4 0.5 0.4 0.5 0.5 0.5 0.4 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.5 0.6 0.5 0.5 0.6 0.5 0.5 0.6 0.5 0.6 0.5 0.5 0.6 0.6 0.5 0.6 0.5 0.6 0.6 0.5 0.6 0.6 0.6 0.6 0.5 0.6 0.6 0.6 0.6 0.6 0.6 0.6 0.6 0.6 0.6 0.7 0.6 0.6 0.6 0.7 0.6 0.6 0.7 0.6 0.6 0.7 0.6 0.7 0.6 0.7 0.6 0.7 0.7 0.6 0.7 0.7 0.7 0.6 0.7 0.7 0.7 0.7 0.7 0.7 0.7 0.7 0.7 0.7 0.7 0.7 0.7 0.8 0.7 0.7 0.7 0.8 0.7 0.8 0.7 0.7 0.8 0.8 0.7 0.8 0.7 0.8 0.8 0.7 0.8 0.8c110 0 185.9-26 250.1-48 13.5-4.6 26.5-9.1 39.1-13.1 36.5-11.4 87.8-12.2 145.1-11.8q9.6 0 19.5 0.1c51.9 0.5 107.7 1 161-5.3 60.1-7 122.7-31.9 181.5-62.1 52.3-26.9 101.6-58 143.6-84.5q7.8-4.9 15.2-9.5c22.4-14.1 56.1-25.8 94.1-35.3 38-9.5 80.1-17 119.5-22.6 39.4-5.7 75.9-9.6 102.7-12.1 13.3-1.2 24.2-2.1 31.8-2.7 3.7-0.2 6.7-0.5 8.7-0.6q1.5-0.1 2.3-0.2 0.1 0 0.2 0v379z"/>
                    </g>
                </svg>

            </div>

        </section>
    );
};

export default Intro;
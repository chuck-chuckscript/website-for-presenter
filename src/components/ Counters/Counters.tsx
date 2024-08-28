// import {useEffect, useState} from "react";


// interface TotalCounter{
//     val1: number,
//     val2: number,
//     val3: number,
//     val4: number,
// }

const Counters = () => {


    // const [counters, setCounters] = useState<TotalCounter>({
    //     val1: 0,
    //     val2: 0,
    //     val3: 0,
    //     val4: 0,
    // });




    return (
        <section className={'counters'}>
            <div className={'counters__counter glass'}>
                <h1>200+</h1> {/* 200 */}
                <p>Проведено<br/>свадеб</p>
            </div>

            <div className={'counters__counter glass'}>
                <h1>100+</h1> {/* 100 */}
                <p>Проведено<br/>мероприятий</p>
            </div>

            <div className={'counters__counter glass'}>
                <h1>80+</h1> {/* 80 */}
                <p>Озвучено<br/>проектов</p>
            </div>

            <div className={'counters__counter glass'}>
                <h1>10+</h1> {/* 10 */}
                <p>Лет<br/>опыта</p>
            </div>

        </section>
    );
};

export default Counters;
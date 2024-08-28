
import {Figure, Light, ServicesItem} from "./ServicesItem.tsx";


const light1 : Light[] =
[
    {
        zIndex: 1,
        top: 100,
        left: 200,
        boxShadow: '0 0 1000px 200px rgba(184, 113, 227, 0.28)'
    },
    {
        zIndex: 1,
        top: 200,
        left: '100%',
        opacity: 0.04,
        boxShadow: '0 0 1000px 500px white'
    }

];

const light2 : Light[] = [
    {
        zIndex: 1,
        top: 100,
        left: 500,

        boxShadow: '0 0 900px 400px rgba(184, 113, 227, 0.14)'
    }


]

const light3 : Light[] = [
    {

        zIndex: 1,
        top: 200,
        right: 0,
        opacity: 0.04,
        boxShadow: '0 0 400px 200px rgba(184, 113, 227, 0.14)'
    },
    {

        zIndex: 1,
        top: '100%',
        right: '40%',
        boxShadow: '0 0 1000px 400px rgba(184, 113, 227, 0.1)'
    },
    {
        zIndex: 1,
        top: '100%',
        left: 0,
        opacity: 0.04,
        boxShadow: '0 0 1000px 400px white'
    }
]
const frame1_figures : Figure[] = [
    {
        options: {
            position: 'absolute',
            top: 50,
            right: '10%',
            fontSize: 150,
            rotate: '15deg',
            zIndex: 0,
            filter: 'blur(20px)',
            fill: '#584059',
            opacity: 0.2
        },
        type: 'circle'
    },
    {
        options:{
            position: 'absolute',
            top: '-50%',
            left: '20%',
            fontSize: 250,
            rotate: '-15deg',
            zIndex: 1,
            filter: 'blur(8px)',
            fill: '#483448',
            opacity: 0.4

        },
        type: 'triangle'
    }
]
const frame2_figures : Figure[] = [
    {
        options: {
            position: 'absolute',
            top: -50,
            left: 0,
            fontSize: 250,
            rotate: '15deg',
            zIndex: 0,
            filter: 'blur(10px)',
            fill: '#584059',
            opacity: 0.2
        },
        type: 'square'
    },
    {
        options: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            fontSize: 350,
            rotate: '-15deg',
            zIndex: 1,
            filter: 'blur(20px)',
            fill: '#584059',
            opacity: 0.2
        },
        type: 'triangle'
    }
]

const frame3_figures : Figure[] = [
    {
        options: {
            position: 'absolute',
            top: '15%',
            left: 100,
            fontSize: 200,
            rotate: '15deg',
            zIndex: 0,
            filter: 'blur(20px)',
            fill: '#584059',
            opacity: 0.2
        },
        type: 'circle'
    },
    {
        options: {
            position: 'absolute',
            top: '-35%',
            left: '60%',
            fontSize: 350,
            rotate: '25deg',
            zIndex: 0,
            filter: 'blur(20px)',
            fill: '#584059',
            opacity: 0.2
        },
        type: 'triangle'
    },
    {
        options: {
            position: 'absolute',
            top: '-120%',
            left: '30%',
            rotate: '-15deg',
            filter: 'blur(20px)',
            fill: '#584059',
            fontSize: 350,
            opacity: 0.2
        },
        type: 'square'
    }
]



const Services = () => {

    return (
        <section  className={'services'}>

            <ServicesItem isReversed={false} title={'Проведение свадьбы'}
                          description={'Смех смехом а пизда к верху мехом, мы реально делаем вещи. Свадьу у Реввы конечно не вел, но\n' +
                              '                            нихуя себе так-то где Ревва а где Ульяновск вы тоже сильно не хуейте. Я хуй знает че еще\n' +
                              '                            здесь написать если честно поэтому бебебе бубубу эээ ъъъ'}
                          price={1000000} photo={'/images/photos/p1.png'}
                          lights={light1}
                          figures={frame1_figures}
            />
            <div style={{backgroundImage: `url(/images/photos/paste1.jpg)`}} className={'pastesPhoto'} data-id={1}>

            </div>
            <ServicesItem isReversed={true} title={'Корпоративы, юбилеи'}
                          description={'Смех смехом а пизда к верху мехом, мы реально делаем вещи. Свадьу у Реввы конечно не вел, но\n' +
                              '                            нихуя себе так-то где Ревва а где Ульяновск вы тоже сильно не хуейте. Я хуй знает че еще\n' +
                              '                            здесь написать если честно поэтому бебебе бубубу эээ ъъъ'}
                          price={1000000} photo={'/images/photos/p2.png'}
                          lights={light2}
                          figures={frame2_figures}
            />
            <div style={{backgroundImage: `url(/images/photos/paste2.jpg)`}} className={'pastesPhoto'} data-id={2}>

            </div>

            <ServicesItem isReversed={false} title={'Фото и видеосъемка'}
                          description={'Смех смехом а пизда к верху мехом, мы реально делаем вещи. Свадьу у Реввы конечно не вел, но\n' +
                              '                            нихуя себе так-то где Ревва а где Ульяновск вы тоже сильно не хуейте. Я хуй знает че еще\n' +
                              '                            здесь написать если честно поэтому бебебе бубубу эээ ъъъ'}
                          price={1000000} photo={'/images/photos/p3.png'}
                          lights={light3}
            />
            <div style={{backgroundImage: `url(/images/photos/paste3.jpg)`}} className={'pastesPhoto'}>

            </div>
            <ServicesItem isReversed={true} title={'Озвучка'}
                          description={'Смех смехом а пизда к верху мехом, мы реально делаем вещи. Свадьу у Реввы конечно не вел, но\n' +
                              '                            нихуя себе так-то где Ревва а где Ульяновск вы тоже сильно не хуейте. Я хуй знает че еще\n' +
                              '                            здесь написать если честно поэтому бебебе бубубу эээ ъъъ'}
                          price={1000000} photo={'/images/photos/p4.png'}

                          figures={frame3_figures}
            />


        </section>
    );
};

export default Services;
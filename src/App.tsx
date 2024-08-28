
import './App.scss'
import HeaderLinks from "./components/Header/HeaderLinks.tsx";
import {IoLogoVk} from "react-icons/io";
import {FaInstagram, FaTelegramPlane} from "react-icons/fa";

import {ImPhone} from "react-icons/im";
import Intro from "./components/Intro/Intro.tsx";
import Counters from "./components/ Counters/Counters.tsx";
import Services from "./components/Services/Services.tsx";

import Gallery from "./components/Gallery/Gallery.tsx";
// import Select from "./components/UI/Select/Select.tsx";
import Callback from "./components/Callback/Callback.tsx";


function App() {


  return (
    <>
        <header className={'header'}>
            <h1>Владислав Глыба</h1>
            <nav className={'header__menu'}>
                <HeaderLinks href={''} icon={<IoLogoVk/>}/>
                <HeaderLinks href={''} icon={<FaTelegramPlane/>}/>
                <HeaderLinks href={''} icon={<FaInstagram/>}/>
                <HeaderLinks href={''} icon={<ImPhone/>}/>
            </nav>
        </header>
        <main>

            <Intro/>
            <Counters/>
            <Services/>
            <Gallery/>
            <Callback/>

        </main>
        <footer className={'footer'}>
            <span style={{top: -200, left: '0%', opacity: 0.1}} className={'light white-big'}></span>
            <span style={{top: 0, left: '50%', zIndex: 2}} className={'light purple-big'}></span>
            <span style={{top: 0, width: '320px', translate: '-50%', left: '50%', zIndex: -1}} className={'light purple-sweet'}></span>
            <div className={'footer__about'}>
                <h2>VLADISLAV KHARLANOV
                    <br/>
                    2024</h2>
                <h3>Designed by Nikita Fedoseev</h3>
                <h3>Made by Nail Chukanov</h3>
            </div>

            <nav className={'footer__menu'}>
                <a href={''}>Контакты</a>
                <a href={''}>Обратная связь</a>
                <a href={''}>Для организаторов</a>
            </nav>
        </footer>
    </>
  )
}

export default App

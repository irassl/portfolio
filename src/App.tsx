import React from 'react';
import './App.scss';
import {Header} from "./componentOld/header/Header";
import {Projects} from "./componentOld/projects/Projects";
import {Footer} from "./components/footer/Footer";
import {About} from "./components/about/About";
import {Home} from "./components/home/Home";
import {Services} from "./components/service/Services";
import {Resume} from "./components/resume/Resume";
import {Contact} from "./components/contact/Contact";
import {FooterNew} from "./components/footer/FooterNew";
import {ClassicHeader} from "./components/classicHeader/ClassicHeader";
import {Portfolio} from "./components/porfolio/Portfolio";


function App() {
    return (
        <>
            <div className='main-wrapper'>
                <div id="content" role="main">
                    {/*<Header/>*/}
                    <ClassicHeader/>
                    {/*<Main/>*/}
                    <Home/>
                    <About/>
                    <Services/>
                    {/*<Skills/>*/}
                    {/*<Projects/>*/}
                    <Portfolio/>
                    <Resume/>
                    <Contact/>
                </div>
                {/*<Footer/>*/}
                <FooterNew/>
            </div>
        </>
    );
}

export default App;

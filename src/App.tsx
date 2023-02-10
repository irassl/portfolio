import React from 'react';
import './App.scss';
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

                    <ClassicHeader/>
                    <Home/>
                    <About/>
                    <Services/>
                    <Portfolio/>
                    <Resume/>
                    <Contact/>
                </div>
                <FooterNew/>
            </div>
        </>
    );
}

export default App;

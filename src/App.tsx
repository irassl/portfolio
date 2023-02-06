import React from 'react';
import './App.scss';
import {Header} from "./header/Header";
import {Projects} from "./projects/Projects";
import {Footer} from "./footer/Footer";
import {About} from "./about/About";
import {Home} from "./home/Home";
import {Services} from "./service/Services";
import {Resume} from "./resume/Resume";
import {Contact} from "./contact/Contact";
import {FooterNew} from "./footer/FooterNew";
import {ClassicHeader} from "./classicHeader/ClassicHeader";
import {Portfolio} from "./porfolio/Portfolio";


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

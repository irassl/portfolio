import React from 'react';
import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {About} from "./about/About";
import {Home} from "./home/Home";
import {Services} from "./service/Services";
import {Resume} from "./resume/Resume";
import {Contact} from "./contact/Contact";


function App() {
    return (
        <div className="">
            <div className='main-wrapper'>
                <div id="content" role="main">


                    <Header/>
                    {/*<Main/>*/}
                    <Home/>
                    <About/>
                    <Services/>
                    {/*<Skills/>*/}
                    <Projects/>
                    <Resume/>
                    {/*<Contacts/>*/}
                    <Contact/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;

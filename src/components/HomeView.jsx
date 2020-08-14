import React, { Fragment } from 'react';
import Navbar from './Navbar.jsx';
import './css/general.css';
import './css/about-me.css';

function HomeView() {
    return (
        <Fragment>
            <div className='bck-img-general'>
                <Navbar />
                <div className='text-about-me'>
                    <p className='info-text'> Actualmenet soy Frontend Developer, sin embargo no siempre fue así, antes de empezar a programa estudie Arquitectura y un día decidí que quería quería hacer algo diferente, y en lugar de crear espacios físicos, opte por dedicar mi tiempo a crear espacios virtuales.</p>
                    <p className='info-text'> Los retos a los que me he enfrentado durante mi vida, los he transformado siempre en oportunidades para poder desarrollar mis habilidades y conocimientos, me gusta estar en un constante aprendizaje.
                    Me gusta retarme a ser mejor día con día y soy consciente de que siempre hay cosas nuevas por aprender y mejorar.</p>
                    <p className='info-text'>Soy una persona creativa y disfruto las ilimitadas posibilidades que ofrece la programación. El camino que he recorrido no ha sido fácil, sin embargo no cambiaría nada por que me encanta estar en el mundo de la tecnología y no me imagino mi vida sin ella.</p>
                </div>
                <div className='title-container'>
                    <p className='text-title-section'> SOBRE MI</p>
                </div>
            </div>

        </Fragment>
    );

}

export default HomeView;
/*
import React, { Fragment } from 'react';
import Navbar from './Navbar.jsx';
import './css/general.css';
import './css/about-me.css';

function HomeView() {
    return (
        <Fragment>
            <div className='bck-img-general'>
                <Navbar />
                <div className='text-about-me'>
                    <p className='info-text'> I am currently a Frontend Developer, however it was not always the same way, before I started programming I studied architecture and one day I decided I wanted to start doing something different, and instead of create physical spaces, I determine I wanted dedicate my time to create virtual spaces.</p>
                    <p className='info-text'> The challenges that have appear in my life, I have transform each one I a opportunity for develped my skills and knowledge, in a constant learning and self-knowledge. I love challenge myself to improve and to be better every day, being aware that always is something to learn or improve.</p>
                    <p className='info-text'> I am a creative person and I enjoy the endless posibilities that programming offers, the path I have walked through to be where I am right now inmersed in the tech field had ups and down, but I would not change anything, because I don't imagine my life without technology.</p>
                </div>
                <div className='title-container'>
                    <p className='text-title-section'> ABOUT ME...</p>
                </div>
            </div>

        </Fragment>
    );

}

export default HomeView;  */
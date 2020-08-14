import React, { Fragment } from 'react';
import './css/navbar.css';

function Navbar() {
    console.log('hola');
    return (
        <Fragment>
            <div className='menu'>
                <div className='box-btn'>
                    <button className='btn-menu'><a href='/' className='text-btn-menu'>bienvenido</a></button>
                </div>
                <div className='box-btn'>
                    <button className='btn-menu'><a href='/about' className='text-btn-menu'>sobre mi</a></button>
                </div>
                <div className='box-btn'>
                    <button className='btn-menu'><a href='/projects' className='text-btn-menu'>proyectos</a></button>
                </div>
                <div className='box-btn'>
                    <button className='btn-menu'><a href='/skills' className='text-btn-menu'>habilidades</a></button>
                </div>
                <div className='box-btn'>
                    <button className='btn-menu'><a href='/contact' className='text-btn-menu'>contacto</a></button>
                </div>
            </div>
        </Fragment>
    );
}

export default Navbar;
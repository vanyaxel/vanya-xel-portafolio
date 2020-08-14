import React, { Fragment } from 'react';
import Navbar from './Navbar.jsx';
import './css/initial-view.css';

function InitialView() {
    return (
        <Fragment>
            <div className='bck-image'>
                <Navbar />
                <div className='title-name'>
                    <p className='title-name-part1'> &lt; XEL </p>
                    <p className='title-name-part2'>JIMENEZ &gt;</p>
                </div>
                <p className='fe-title'>Frontend Developer</p>
                <button type='button' className='btn-welcome'><a href='/about' className='welcome'>bienvenido</a></button>
            </div>
        </Fragment >
    );
}

export default InitialView;
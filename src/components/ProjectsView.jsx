import React, { Fragment } from 'react';
import './css/projects.css';

import civitas from '../components/images/civitas.png';
/* import pokendia from '../components/images/pokendia.jpg';
 */
import Navbar from './Navbar.jsx';
import Cipher from '../components/InfoProjects/Cipher';
import Civitas from '../components/InfoProjects/Civitas';
import Pokendia from '../components/InfoProjects/Pokendia';
import BurgerQueen from '../components/InfoProjects/BurgerQueen';
import ConqueringPlanets from '../components/InfoProjects/ConqueringPlanets';

function ProjectsView() {
    return (
        <Fragment>
            <div className='bck-img-general'>
                <Navbar />
                <div className='project-all'>
                    <div className='project-container1'>
                        <Cipher />
                        <div className='container-text-project'>
                            <h1 className='text-header-project num'>1</h1>
                            <h2 className='text-header-project'>CIPHER</h2>
                        </div>
                    </div>
                    <div className='project-container2'>
                        <div className='container-text-project2'>
                            <h1 className='text-header-project num2'>2</h1>
                            <h2 className='text-header-project'>POKENDIA</h2>
                        </div>
                        <Pokendia />
                    </div>
                    <div className='project-container1'>
                        <Civitas />
                        <div className='container-text-project'>
                            <h1 className='text-header-project num'>3</h1>
                            <h2 className='text-header-project'>CIVITAS</h2>
                        </div>
                    </div>
                    <div className='project-container2'>
                        <div className='container-text-project2'>
                            <h1 className='text-header-project num2'>4</h1>
                            <h2 className='text-header-project'>BURGER QUEEN</h2>
                        </div>
                        <BurgerQueen />
                    </div>
                    <div className='project-container1'>
                        <ConqueringPlanets />
                        <div className='container-text-project'>
                            <h1 className='text-header-project num'>5</h1>
                            <h2 className='text-header-project'>BATTLESHIP</h2>
                        </div>
                    </div>
                </div>
                <div className='title-container'>
                    <p className='text-title-section'>PROJECTOS</p>
                </div>
            </div>
        </Fragment>
    );
}

export default ProjectsView;
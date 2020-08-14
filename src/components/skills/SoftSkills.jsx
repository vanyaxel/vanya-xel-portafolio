import React, { Fragment } from 'react';
import Navbar from '../Navbar.jsx';
import BtnSkills from './BtnSkills.jsx';
import '../css/skill.css';

function TechSkills() {
    return (
        <Fragment>
            <div className='bck-img-general'>
                <Navbar />
                <div className='skills'>
                    <BtnSkills />
                    <div className='skills-all'>
                        <div className='skills-list'>
                            <p className='text-skills'>Trabajo en equipo</p>
                            <p className='text-skills'>Adaptabilidad</p>
                            <p className='text-skills'>Resolución de problemas</p>
                            <p className='text-skills'>Auto-aprendizaje</p>
                            <p className='text-skills'>Creatividad</p>
                            <p className='text-skills'>Multi-tareas</p>
                            <p className='text-skills'>Proactiva</p>
                            <p className='text-skills'>Colaborativa</p>
                            <p className='text-skills'>Orientada a resultados</p>
                        </div>
                    </div>
                </div>
                <div className='title-container'>
                    <p className='text-title-section'>Habilidades blandas</p>
                </div>
            </div>
        </Fragment>
    );
}

export default TechSkills;
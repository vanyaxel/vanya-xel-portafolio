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
                            <p className='text-skills2'>JavaScript</p>
                            <p className='text-skills2'>React.js</p>
                            <p className='text-skills2'>HTML</p>
                            <p className='text-skills2'>CSS</p>
                            <p className='text-skills2'>Firebase</p>
                            <p className='text-skills2'>Node.js</p>
                            <p className='text-skills2'>Figma</p>
                            <p className='text-skills2'>Illustrator</p>
                            <p className='text-skills2'>Photoshop</p>
                        </div>
                    </div>
                </div>
                <div className='title-container'>
                    <p className='text-title-section'>Habilidades Técnicas</p>
                </div>
            </div>
        </Fragment>
    );
}

export default TechSkills;
import React, { Fragment } from 'react';
import Navbar from '../Navbar.jsx';
import '../css/general.css';
import '../css/skill.css';

function SkillView() {
    return (
        <Fragment>
            <div className='bck-img-general'>
                <Navbar />
                <div className='skill-container'>
                    <button type='button' className='btn-skills'><a href='/soft-skills' className='btn-text-skills'>Blandas</a></button>
                    <button type='button' className='btn-skills'><a href='/tech-skills' className='btn-text-skills'>Técnicas</a></button>
                </div>
                <div className='title-container'>
                    <p className='text-title-section'> HABILIDADES</p>
                </div>
            </div>
        </Fragment>
    );
}

export default SkillView;
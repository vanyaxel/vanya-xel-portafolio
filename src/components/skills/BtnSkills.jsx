import React, { Fragment } from 'react';
import '../css/navbar.css';

function BtnSkills() {
    return (
        <Fragment>
            <div className='skills-btn-container'>
                <button type='button' className='btn-menu'><a href='/soft-skills' className='text-btn-menu2'>Blandas</a></button>
                <button type='button' className='btn-menu'><a href='/tech-skills' className='text-btn-menu2'>Técnicas</a></button>
            </div>
        </Fragment>
    );
}

export default BtnSkills;
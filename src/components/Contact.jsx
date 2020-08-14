import React, { Fragment } from 'react';
import Navbar from './Navbar.jsx';
import linkedIn from './css/imagenes/linkedin.svg';
import github from './css/imagenes/github.svg';
import phone from './css/imagenes/phone.svg';
import mail from './css/imagenes/mail.svg';
import './css/general.css';
import './css/contact.css';

function Contact() {
    return (
        <Fragment>
            <div className='bck-img-general'>
                <Navbar />
                <div >
                    <div className='container-contact'>
                        <div className='info-container'>
                            <div className='cont'>
                                <div className='text-img'>
                                    <img src={mail} alt='mail' className='img-contact' />
                                    <p className='info-text-contact'>vanya_xel@live.com.mx</p>
                                </div>
                                <div className='text-img'>
                                    <img src={phone} alt='phone' className='img-contact' />
                                    <p className='info-text-contact'>5519198397</p>
                                </div>
                                <div className='text-img'>
                                    <img src={github} alt='github' className='img-contact' />
                                    <p className='info-text-contact'>vanyaxel</p>
                                </div>
                                <div className='text-img'>
                                    <img src={linkedIn} alt='linkedIn' className='img-contact' />
                                    <p className='info-text-contact'>linkedin.com/in/vanyaxel/</p>
                                </div>
                            </div>
                            <div className='line'></div>
                        </div>
                    </div>
                    <div className='title-container'>
                        <p className='text-title-section'>CONTACTO</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default Contact;
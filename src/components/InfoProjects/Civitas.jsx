import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import civitas from '../images/civitas.png';
import github2 from '../css/imagenes/github2.svg';
import webPage from '../css/imagenes/internet.svg';

import '../css/modal-project.css';

export default function Cipher() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Button variant="outlined" color="primary" onClick={handleClickOpen} className='btn-project-modal'>
                <div className='btn-title-project2' >
                    <img src={civitas} alt="civitas" className='img-project' />
                </div>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className='project'>
                        <h1 className='title-project'>CIVITAS</h1>

                        <div className='container-info-project'>
                            <a href="https://gyazo.com/5f59a28930f0a07e7add43968ba1c129"><img src="https://i.gyazo.com/5f59a28930f0a07e7add43968ba1c129.gif" alt="Image from Gyazo" width="308" className='gif-project' /></a>
                            <div className='text-container'>
                                <div className='link-container'>
                                    <img src={github2} alt="github" className='logo-link' />
                                    <a href="https://github.com/vanyaxel/CDMX009-Social-Network" className='text-info-project'>https://github.com/vanyaxel/CDMX009-Social-Network</a>
                                </div>
                                <div className='link-container'>
                                    <img src={webPage} alt="webPage" className='logo-link' />
                                    <a href="https://social-network-d33e4.web.app/#/login" className='text-info-project'>https://social-network-d33e4.web.app/#/login</a>
                                </div>
                                <div className='tools-project'>
                                    <h3 className='tools-project-title'>Herramientas utilizadas</h3>
                                    <li>Javascript</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                    <li>Firebase</li>
                                    <li>Bootstrap</li>
                                </div>
                            </div>
                        </div>
                        <div className='description-project'>
                            <h3>Descripción</h3>
                            <p>Civitas es una app mobile/web desarrollada y pensada como una plataforma de comunicación entre una comunidad, surgió como respuesta a la necesidad de interacción que se ha visto limitada por las medidas de aislamiento derivadas de la pandemia del COVID-19.
                            </p>
                            <p>A través de ella se puede crear y compartir reseñas de actividades, lugares y servicios de manera local, dependiendo de la ubicación de cada usuario. De esta manera nuestro segundo objetivo es impulsar la economía local.</p>
                        </div>
                        <div>

                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" style={{ marginRight: '10px' }}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

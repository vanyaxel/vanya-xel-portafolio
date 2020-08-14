import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import '../css/modal-project.css';

import pokendia from '../images/pokendia.jpg';
import github2 from '../css/imagenes/github2.svg';
import webPage from '../css/imagenes/internet.svg';

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
                    <img src={pokendia} alt="civitas" className='img-project' />
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
                        <h1 className='title-project'>POKENDIA</h1>

                        <div className='container-info-project'>
                            <img src="https://i.gyazo.com/da99a01130b1abf8ba64676ba5691fd2.gif" alt="Image from Gyazo" className='gif-project' />
                            <div className='text-container'>
                                <div className='link-container'>
                                    <img src={github2} alt="github" className='logo-link' />
                                    <a href="https://github.com/vanyaxel/CDMX009-Data-Lovers" className='text-info-project'>https://github.com/vanyaxel/CDMX009-Data-Lovers</a>
                                </div>
                                <div className='link-container'>
                                    <img src={webPage} alt="webPage" className='logo-link' />
                                    <a href="https://pokendia-xel.netlify.app/" className='text-info-project'>https://pokendia-xel.netlify.app/</a>
                                </div>
                                <p className='text-info-project'></p>
                                <div className='tools-project'>
                                    <h3 className='tools-project-title'>Herramientas utilizadas</h3>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Material UI</li>
                                </div>
                            </div>
                        </div>
                        <div className='description-project'>
                            <h3>Descripción</h3>
                            <p>Pokendia Go! es una aplicación complementaría para el juego de Pokémon Go!, en el cual puede visualizarse un catálogo de todos los pokemones y sus carateristicas de forma detallada.</p>
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

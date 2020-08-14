import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import randomized from '../images/randomized.jpg';
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
                    <img src={randomized} alt="civitas" className='img-project' />
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
                        <h1 className='title-project'>CIPHER</h1>
                        <div className='container-info-project'>
                            <img src="https://i.gyazo.com/63583556de8fa18e7df336950d61ce61.gif" alt="Image from Gyazo" className='gif-project' />
                            <div className='text-container'>
                                <div className='link-container'>
                                    <img src={github2} alt="github" className='logo-link' />
                                    <a href="https://github.com/vanyaxel/CDMX009-cipher" className='text-info-project'>https://github.com/vanyaxel/CDMX009-cipher</a>
                                </div>
                                <div className='link-container'>
                                    <img src={webPage} alt="webPage" className='logo-link' />
                                    <a href="https://chipher-xel.netlify.app/" className='text-info-project'>https://chipher-xel.netlify.app/</a>
                                </div>
                                <div className='tools-project'>
                                    <h3 className='tools-project-title'>Herramientas utilizadas</h3>
                                    <li>Javascript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </div>
                            </div>
                        </div>
                        <div className='description-project'>
                            <h3>Descripción</h3>
                            <p>El proyecto consistia en crear una página web que nos permitiera cifrar cualquier texto con el cifrado Cesar, y como requisito debiamos poder visualizar el resultado del cifrado y la palabra original.
                            </p>
                            <p>En este caso se diseño una aplicacion que ayudará a empresas a tener control sobre espacios con acceso limitado, dando la posibilidad de tener en todo momento información sobre quien entra/sale de estos, dando informacion sobre el tiempo estimado que permanecieron y horas exactas de ingreso.</p>
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

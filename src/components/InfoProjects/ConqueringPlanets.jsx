import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import conqueringPlanets from '../images/conqueringPlanets.jpg';
import github2 from '../css/imagenes/github2.svg';
import webPage from '../css/imagenes/internet.svg';

import '../css/modal-project.css';

export default function ConqueringPlanets() {
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
                    <img src={conqueringPlanets} alt="civitas" className='img-project' />
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
                        <h1 className='title-project'>BURGER QUEEN</h1>
                        <div className='container-info-project-bq'>
                            <div className='tools-project2'>
                                <img src="https://i.gyazo.com/c498e918e1fff8b80d878c156c9ca4fa.gif" alt="conquering-planets" className='gif-project2' />
                                <div className='container-tools-project-title'>
                                    <h3 className='tools-project-title-bq'>Herramientas utilizadas</h3>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Firebase</li>
                                    <li>Material UI</li>
                                    <li>Figma</li>
                                </div>
                            </div>
                            <div className='text-container2'>
                                <div className='link-container'>
                                    <img src={github2} alt="github" className='logo-link' />
                                    <a href="https://github.com/vanyaxel/CDMX009-Battleship" className='text-info-project'>https://github.com/vanyaxel/CDMX009-Battleship</a>
                                </div>
                                <div className='link-container'>
                                    <img src={webPage} alt="webPage" className='logo-link' />
                                    <a href="" className='text-info-project'>En proceso</a>
                                </div>
                            </div>
                        </div>
                        <div className='description-project'>
                            <h3>Descripción</h3>
                            <p>Conquering Planets es una adaptación del juego Battle Ship, dandole un giro a la temática, siendo la conquista del universo el objetivo, a aplicación esta diseñada para ser jugarse entre dos usuarios, y el ganador será el que adivine la posición de los planetas del contrincante.
                            </p>
                            <p>El juego tiene la capacidad de tener interacción entre los usuarios en tiempo real, actualizando la base de datos con cada jugada realzada. </p>
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
        </div >
    );
}

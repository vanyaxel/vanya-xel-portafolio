import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import burgerQueen from '../images/bq.jpg';
import github2 from '../css/imagenes/github2.svg';
import webPage from '../css/imagenes/internet.svg';

import '../css/modal-project.css';

export default function BurgerQueen() {
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
                    <img src={burgerQueen} alt="civitas" className='img-project' />
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
                                <img src="https://i.gyazo.com/b7ae24e96fef8608d9693f8932900c26.gif" alt="Image from Gyazo" className='gif-project2' />
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
                                    <a href="https://github.com/BrendaCarranco/CDMX009-BurgerQueen" className='text-info-project'>https://github.com/BrendaCarranco/CDMX009-BurgerQueen</a>
                                </div>
                                <div className='link-container'>
                                    <img src={webPage} alt="webPage" className='logo-link' />
                                    <a href="https://burger-queen-xel-bren.netlify.app/" className='text-info-projec'>https://burger-queen-xel-bren.netlify.app/</a>
                                </div>
                                <div className='user-password-bq'>
                                    <p className='text-user-password'><b>Usuario:</b>xel@burgerqueen.mx </p>
                                    <p className='text-user-password'><b>Contraseña:</b>123456</p>
                                </div>
                            </div>
                        </div>
                        <div className='description-project'>
                            <h3>Descripción</h3>
                            <p>Burger Queen es una aplicación que ofrece una alternativa en la forma de tomar pedidos en los restaurantes. Burger queen ofrece tomar nuevas ordenes, editarlas, borrarlas y almacenarlas permitiendo una actualización de la información en tiempo real entre cocina y meseros.
                            </p>
                            <p>La aplicación esta diseñada para Ipad, por lo que te recomiendo visualizarla en modo de dispositivo móvil</p>
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

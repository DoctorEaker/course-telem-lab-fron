import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';

const AboutScreen = () => {
    return (
        <Fragment>
            <Header />
            <main className='py-3'>
                <Container>
                    <div>
                        <p>
                            Este sitio web esta concebido como una tienda virtual de obras literarias, la cual permite
                            obtener el listado de obras disponibles para reservar y/o comprar. El sitio fue desarrollado 
                            para que los usuarios pueda obtener información útil acerca de...   
                        </p>
                    </div>
                </Container>
            </main>
        </Fragment>
    )
}

export default AboutScreen
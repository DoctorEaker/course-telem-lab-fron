import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap';

import Book from '../components/Book'
import Header from '../components/Header';

const HomeScreen = () => {

    const [books, setBooks] = useState([])

    useEffect( () => {
        const fetchBooks = async () => {
            const { data } = await axios.get('/api/books')
            
            setBooks(data)
        }
        
        fetchBooks()
    }, [])

    return (
        <Fragment>
            <Header />
            <main className='py-3'>
                <Container>
                    <h1> Catalogo de Libros </h1> 
                    <Row>
                        {books.map((book) => (
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <Book book={book} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
        </Fragment>
    )
}

export default HomeScreen

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../artikel.css"

const url = 'https://6451c103a2860c9ed4fa3d95.mockapi.io/api/v1/artikel';

const ArtikelCard = () => {

    
    const [artikel, setArtikel] = useState([]);

    const getDataArtikel = async () => {
        const response = await fetch(url);
        const dataArtikel = await response.json();
        setArtikel(dataArtikel);
    }

    useEffect( () => {
        getDataArtikel();
    }, []);

    const trimText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
    }

    return (
        <>
        <Container>
        <Row>
        {artikel.map( (artikel) => (
        <Col sm={9} md={4} lg={4}>
            <div className="card">
                <img src={artikel.image} className='card-img-top' alt='banner-organik' />
                <div className="categoryy">{artikel.category}</div>
                <div className="card-body">
                    <h5 className="card-title">{trimText(artikel.titleartikel, 50)}</h5>
                    <p className="card-text">{trimText(artikel.descartikel, 100)}</p>
                    <Link to={`/detail-artikel/${artikel.id}`} className="bttn">
                    Selengkapnya
                    </Link>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Publish {artikel.publish}</small>
                </div>
            </div>
            <br></br>
        </Col>
        ) )}
        </Row>
        </Container>

        </>
        
    );
}

export default ArtikelCard;
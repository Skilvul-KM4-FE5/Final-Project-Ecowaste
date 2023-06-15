// @ts-nocheck
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCalendar2Date, BsFillPersonFill, BsGlobe } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const url = 'https://6451c103a2860c9ed4fa3d95.mockapi.io/api/v1/artikel/';

const DetailArtikelCard = () => {

    const params = useParams();

    const [artikel, setArtikel] = useState([]);

    const getDataArtikel = async () => {
        const response = await fetch(url + params.artcId);
        const dataArtikel = await response.json();
        setArtikel(dataArtikel);
    }

    useEffect( () => {
        getDataArtikel();
    }, []);


    return (
        <>

        </>
        
    );
}

export default DetailArtikelCard;
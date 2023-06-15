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
            <section id="blog" className="blog">
            <Container data-aos="fade-up">
              <Row className="g-10">
                
                  <Col lg={12} key={artikel.id}>
                    <article className="blog-details">
                      <div className="row gy-5" data-aos="fade-in">
                        <img src={artikel.image} alt="" className="img" />
                      </div>
      
                      <h2 className="title">{artikel.titleartikel}</h2>
      
                      <div className="meta-top" style={{ marginTop: '5px' }}>
                        <ul className="list-unstyled" style={{ padding: 0 }}>
                          <li className="d-flex align-items-center">
                            <BsFillPersonFill style={{marginRight: '5px'}}/>
                            {artikel.author}
                          </li>
                          <li className="d-flex align-items-center">
                            <BsCalendar2Date style={{marginRight: '5px'}}/>
                            {artikel.publish}
                          </li>
                          <li className="d-flex align-items-center">
                            <BsGlobe style={{marginRight: '5px'}}/>
                            {artikel.sumber}
                          </li>
                        </ul>
                      </div>
      
                      <div className="content">
                        <p className='paragraph'>{artikel.descartikel}</p>
                      </div>
                    </article>
                  </Col>
                
              </Row>
            </Container>
            </section>

        </>
        
    );
}

export default DetailArtikelCard;
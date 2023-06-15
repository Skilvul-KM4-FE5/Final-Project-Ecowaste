import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../berita.css";

const ListBerita = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://644e26454e86e9a4d8f1fcf6.mockapi.io/api/v1/berita")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, []);

  const trimText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
  };

  return (
    <>
      <Container>
        <Row>
          {news.map((item) => (
            <Col sm={9} md={4} lg={4}>
              <div className="card">
                <img src={item.images} className="card-img-top" />
                <div className="category">{item.category}</div>
                <div className="card-body">
                  <h5 className="card-title">{trimText(item.titleNews, 50)}</h5>
                  <p className="card-text">{trimText(item.descNews, 100)}</p>
                  <Link to={`/detailberita/${item.id}`} className="bttn">
                    Selengkapnya
                  </Link>
                </div>
              </div>
              <br></br>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListBerita;

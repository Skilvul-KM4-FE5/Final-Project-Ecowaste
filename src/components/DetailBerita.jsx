// @ts-nocheck
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsPersonCircle, BsFillCalendarCheckFill, BsNewspaper } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import CommentSection from "./Comments";
import { AuthContext } from "../context/AuthContext";

const url = "https://644e26454e86e9a4d8f1fcf6.mockapi.io/api/v1/berita/";
const DetailBerita = () => {
  const param = useParams();

  const [berita, setBerita] = useState([]);

  const { isLoggedIn } = useContext(AuthContext);

  const getDataBerita = async () => {
    const response = await fetch(url + param.newsId);
    const dataBerita = await response.json();
    setBerita(dataBerita);
  };

  useEffect(() => {
    getDataBerita();
  }, []);

  return (
    <>
      <section id="blog" className="blog">
        <Container data-aos="fade-up">
          <Row className="">
            <Col lg={12} key={berita.id}>
              <article className="blog-details">
                <div className="row gy-5" data-aos="fade-in">
                  <img src={berita.images} alt="" className="image" />
                </div>

                <div className="meta-top">
                  <h2 className="title">{berita.titleNews}</h2>
                  <ul>
                    <li className="d-flex align-items-center"></li>
                    <li className="d-flex align-items-center">
                      <BsPersonCircle style={{ marginRight: "5px" }} />
                      {berita.author}
                    </li>
                    <li className="d-flex align-items-center">
                      <BsFillCalendarCheckFill style={{ marginRight: "5px" }} />
                      {berita.publish}
                    </li>
                    <li className="d-flex align-items-center">
                      <BsNewspaper style={{ marginRight: "5px" }} />
                      {berita.sumber}
                    </li>
                  </ul>

                  <div className="button-container">
                    <h2 className="title">Share</h2>
                    <FacebookShareButton url={berita.link} className="title">
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={berita.link} className="title">
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton url={berita.link} className="title">
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </div>
                </div>
                <div className="content">
                  <p className="paragraph">{berita.descNews}</p>

                  {isLoggedIn ? <CommentSection /> : ""}
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DetailBerita;

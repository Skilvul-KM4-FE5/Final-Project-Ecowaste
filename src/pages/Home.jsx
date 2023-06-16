import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [message, setMessage] = useState("");

  const [article, setArticle] = useState([]);
  const [news, setNews] = useState([]);
  const [modalAlert, setModalAlert] = useState(false);

  useEffect(() => {
    axios
      .get("https://648442b4ee799e3216266fea.mockapi.io/article")
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => console.log("Gagal memuat data"));

    axios
      .get("https://648442b4ee799e3216266fea.mockapi.io/news")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => console.log("Gagal memuat data"));
  }, []);

  const handleModal = () => {
    const items = [name, email, telp, message];
    localStorage.setItem("message", JSON.stringify(items));
    setName("");
    setEmail("");
    setTelp("");
    setMessage("");
    setModalAlert(!modalAlert);
  };

  return (
    <main id="main">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>
                Mari peduli <span>lingkungan sekitarmu</span>
              </h2>
              <p>
                Yuk mulai langkah nyata peduli lingkungan dengan cara membuang
                sampah pada tempatnya dan jangan lupa untuk memilah sampah
                sesuai dengan jenisnya ya.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="/login" className="btn-get-started">
                  Get Started
                </a>
                <a
                  href="https://youtu.be/WlauqoKUteo"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-3 order-lg-2">
              <img
                src=""
                className="img"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <Container
        className="section-header"
        style={{ backgroundColor: "#fff" }}
        fluid
      >
        <section id="services" className="services sections-bg">
          <Container>
            <Row>
              <Col lg={12} data-aos="fade-up">
                <div className="section-title">
                  <h2>Tentang Kami</h2>
                </div>
              </Col>
              <Col md={6}>
                <h3 className="text-start">
                  Selamat datang di website kami yang berfokus pada lingkungan
                  dan pengelolaan sampah!
                </h3>
                <img src="/environment.svg" style={{ height: "50vh" }} />
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="text-start">
                  <p className="mb-3">
                    Kami ingin mengajak Anda untuk peduli terhadap lingkungan
                    dan mengambil bagian dalam menjaga kebersihan dan
                    kelestarian bumi kita. Kami menyadari bahwa masalah sampah
                    merupakan masalah global yang sangat kompleks.
                  </p>

                  <p className="mb-3">
                    Di sini, Anda akan menemukan berbagai artikel dan tips
                    tentang cara mengurangi sampah, memilah sampah, dan
                    mengelola limbah.
                  </p>

                  <p className="mb-3">
                    Kami juga menyajikan berita terbaru tentang isu-isu
                    lingkungan terkini dari berbagai sumber terpercaya.
                  </p>

                  <p className="mb-3">
                    Jangan ragu untuk menghubungi kami jika Anda memiliki
                    pertanyaan atau ingin berbagi ide mengenai bagaimana kita
                    semua dapat bersama-sama menjaga kelestarian lingkungan.
                  </p>

                  <p>Terima kasih telah mengunjungi website kami!</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>

      {/* Pilah Sampah Section */}
      <Container
        className="section-header"
        style={{ backgroundColor: "#fff" }}
        fluid
      >
        <section id="services" className="services sections-bg">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} data-aos="fade-up">
                <div className="section-title">
                  <h2>Pilah Sampah</h2>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="service-item position-relative text-center">
                  <img src="/organik.svg" alt="Organik" />
                  <h3 style={{ marginRight: "8px", textAlign: "center" }}>
                    Organik
                  </h3>
                  <Link
                    to="/sampah-organik"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="service-item position-relative text-center">
                  <img src="/anorganik.svg" alt="Anorganik" />
                  <h3 style={{ marginRight: "8px", textAlign: "center" }}>
                    Anorganik
                  </h3>
                  <Link
                    to="/sampah-anorganik"
                    className="readmore stretched-link"
                  >
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="service-item position-relative text-center">
                  <img src="/b3.svg" alt="B3" />
                  <h3 style={{ marginRight: "8px", textAlign: "center" }}>
                    B3
                  </h3>
                  <Link to="/sampah-b3" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>

      {/* Artikel Section */}
      <Container
        className="section-header"
        style={{ backgroundColor: "#fff" }}
        fluid
      >
        <section id="recent-post" className="recent-posts sections-bg">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} data-aos="fade-up">
                <div className="section-title">
                  <h2>Artikel</h2>
                </div>
              </Col>
              {article.map((item) => (
                <Col xl={4} md={6}>
                  <article>
                    <div className="post-img">
                      <img
                        src={item.images}
                        alt=""
                        className="img-fluid"
                        style={{ height: "200px", width: "300px" }}
                      />
                    </div>

                    <h5
                      className="title"
                      style={{
                        fontSize: "14px",
                        textDecoration: "none",
                        marginBottom: "40px",
                      }}
                    >
                      <a href="/artikel" style={{ borderBottom: "none" }}>
                        {item.title}
                      </a>
                    </h5>
                    <Link to="/artikel" className="bttn">
                      Selengkapnya
                    </Link>

                    {/* <div className="d-flex align-items-center"></div> */}
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Container>

      {/* Berita Section */}
      <Container
        className="section-header"
        style={{ backgroundColor: "#fff" }}
        fluid
      >
        <section id="recent-post" className="recent-posts sections-bg">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} data-aos="fade-up">
                <div className="section-title">
                  <h2>Berita</h2>
                </div>
              </Col>
              {news.map((item) => (
                <Col xl={4} md={6}>
                  <article>
                    <div className="post-img">
                      <img
                        src={item.images}
                        alt=""
                        className="img-fluid"
                        style={{ height: "200px", width: "300px" }}
                      />
                    </div>

                    <h5
                      className="title"
                      style={{
                        fontSize: "14px",
                        textDecoration: "none",
                        marginBottom: "40px",
                      }}
                    >
                      <a href="/artikel" style={{ borderBottom: "none" }}>
                        {item.title}
                      </a>
                    </h5>
                    <Link to="/Berita" className="bttn">
                      Selengkapnya
                    </Link>

                    {/* <div className="d-flex align-items-center"></div> */}
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Container>

      {/* Contact Section */}
      <section id="Contact" className="Contact">
        <div className="section-header">
          <h2>Kontak Kami</h2>
        </div>
        <div className="contact-container">
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Silahkan tinggalkan pesan Anda pada kolom yang tersedia
              </p>

              <div className="info">
                <div className="information">
                  <i className="fa-solid fa-map-location-dot icon"></i>
                  <p>
                    Jl. Simprug Golf 8 No. 6, RT.2/RW.8, Grogol Sel., Kec. Kby.
                    Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                    12220
                  </p>
                </div>
                <div className="information">
                  <i className="fa-solid fa-envelope icon"></i>
                  <p>info@skilvul.com</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with Us</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/skilvul/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/skilvul">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/skilvul/mycompany/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <Modal
                show={modalAlert}
                // @ts-ignore
                onHide={setModalAlert}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Pemberitahuan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Terima kasih telah menghubungi kami! </Modal.Body>
              </Modal>
              <form id="my-form">
                <h3 className="title">Kontak Kami</h3>
                <div className="input-container">
                  <input
                    type="text"
                    className="input"
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-container">
                  <input
                    type="telp"
                    className="input"
                    placeholder="Telp"
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                    required
                  />
                </div>
                <div className="input-container textarea">
                  <textarea
                    name="message"
                    className="input"
                    placeholder="Pesan"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <Button
                  type="button"
                  onClick={handleModal}
                  className="btn-contact"
                >
                  Kirim
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal show={modalAlert} onHide={() => setModalAlert(!modalAlert)}>
        <Modal.Header closeButton>
          <Modal.Title>Pemberitahuan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Terima kasih telah menghubungi kami!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setModalAlert(!modalAlert)}
          >
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

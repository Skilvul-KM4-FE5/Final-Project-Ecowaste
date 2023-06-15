// @ts-nocheck
import Axios from "axios";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  Row,
  Modal,
  Button,
} from "react-bootstrap";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [message, setMessage] = useState("");

  const [article, setArticle] = useState([]);
  const [news, setNews] = useState([]);
  const [modalAlert, setModalAlert] = useState(false);

  const handleModal = () => {
    const items = [name, email, telp, message];
    localStorage.setItem("message", JSON.stringify(items));
    localStorage.setItem("message", JSON.stringify(items));
    setName("");
    setEmail("");
    setTelp("");
    setMessage("");

    setModalAlert(!modalAlert);
  };

  Axios.get("https://648442b4ee799e3216266fea.mockapi.io/article")
    .then((res) => {
      setArticle(res.data);
    })
    .catch((err) => console.log("Gagal memuat data"));

  Axios.get("https://648442b4ee799e3216266fea.mockapi.io/news")
    .then((res) => {
      setNews(res.data);
    })
    .catch((err) => console.log("Gagal memuat data"));
  return (
    <main id="main">
      {/* <div className="breadcrumbs">
        <nav>
          <div className="container">
            <ol>
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>Pilah sampah</li>
            </ol>
          </div>
        </nav>
      </div> */}

      <Card className="text-white">
        <Card.Img
          style={{
            height: "400px",
            objectFit: "cover",
            objectPosition: "100% 75%",
          }}
          src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        />
        <Card.ImgOverlay>
        
          <Container >
          <Col md={6}>
            <h1 className="display-4">Mari peduli lingkungan sekitarmu</h1>
          </Col>
          <Col md={6}>
            <p style={{ marginBottom: '40px' }}>
              Yuk mulai langkah nyata peduli lingkungan dengan cara membuang
              sampah pada tempatnya dan jangan lupa untuk memilah sampah sesuai
              dengan jenisnya ya.
            </p>
          </Col>
          <Col md={6}>
            <Button className="btn-get-started" style={{ marginRight: '12px' }}>Get Started</Button>
            <Button className="glightbox btn-watch-video">
              <div className="d-flex align-items-center">
                <FaPlay />
                <span className="mr-2">Watch Video</span>
              </div>
            </Button>
          </Col>
          </Container>
        </Card.ImgOverlay>
        
      </Card>

      <Container className="mt-4 section-header">
        <h2 id="tentang-kami">Tentang Kami</h2>
        <Row>
          <Col md={6}>
            <h3 className="text-start">
              Selamat datang di website kami yang berfokus pada lingkungan dan
              pengelolaan sampah!
            </h3>
            <Image src="/environment.svg" />
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-start">
              <p className="mb-3">
                Kami ingin mengajak Anda untuk peduli terhadap lingkungan dan
                mengambil bagian dalam menjaga kebersihan dan kelestarian bumi
                kita. Kami menyadari bahwa masalah sampah merupakan masalah
                global yang sangat kompleks.
              </p>

              <p className="mb-3">
                Di sini, Anda akan menemukan berbagai artikel dan tips tentang
                cara mengurangi sampah, memilah sampah, dan mengelola limbah.
              </p>

              <p className="mb-3">
                Kami juga menyajikan berita terbaru tentang isu-isu lingkungan
                terkini dari berbagai sumber terpercaya.
              </p>

              <p className="mb-3">
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
                atau ingin berbagi ide mengenai bagaimana kita semua dapat
                bersama-sama menjaga kelestarian lingkungan.
              </p>

              <p>Terima kasih telah mengunjungi website kami!.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="section-header"
        style={{ backgroundColor: "#f6f6f6" }}
        fluid
      >
        <h2 id="pilah-sampah" className="pt-4">
          Pilah Sampah
        </h2>
        <Row>
          <Col md={4}>
            <Card border="light" className="p-4">
              <Card.Img variant="top" src="/organik.svg" />
              <Card.Title>Organik</Card.Title>
              <a href="#" className="readmore stretched-link">
                Read more
                <FaAngleRight />
              </a>
            </Card>
          </Col>

          <Col md={4}>
            <Card border="light" className="p-4">
              <Card.Img variant="top" src="/anorganik.svg" />
              <Card.Title>Anorganik</Card.Title>
              <a href="#" className="readmore stretched-link">
                Read more
                <FaAngleRight />
              </a>
            </Card>
          </Col>

          <Col md={4}>
            <Card border="light" className="p-4">
              <Card.Img variant="top" src="/b3.svg" />
              <Card.Title>B3</Card.Title>
              <a href="#" className="readmore stretched-link">
                Read more
                <FaAngleRight />
              </a>
            </Card>
          </Col>
        </Row>

        <h2 className="pt-4">Artikel</h2>
        <Row>
          {article.map((item) => (
            <Col>
              <Card style={{ minHeight: "300px" }} border="light" key={item.id}>
                <Card.Img
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                  src={item.images}
                />
                <Card.Body>{item.title}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="pt-4">Berita</h2>
        <Row>
          {news.map((item) => (
            <Col>
              <Card style={{ minHeight: "300px" }} border="light" key={item.id}>
                <Card.Img
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                  src={item.images}
                />
                <Card.Body>{item.title}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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
              <Modal show={modalAlert} onHide={setModalAlert}>
                <Modal.Header closeButton>
                  <Modal.Title>Pemberitahuan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Terima kasih telah menghubungi kami </Modal.Body>
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
                <Button onClick={handleModal} className="btn">
                  Kirim
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";
import ListBerita from "./ListBerita";
function BeritaPage() {
  return (
    <>
      <main id="main">
        <div className="breadcrumbs">
          <nav>
            <div className="container">
              <ol>
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/berita">Blog</Link>
                </li>
                <li>Berita</li>
              </ol>
            </div>
          </nav>
        </div>
        <section id="kategori" className="kategori sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Berita</h2>
              <p>Berikut berita tentang dampak lingkungan serta cara pengolahan sampah yang benar</p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <ListBerita />
          </div>
        </section>
      </main>
    </>
  );
}

export default BeritaPage;

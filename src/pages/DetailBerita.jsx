import { Link } from "react-router-dom";
import DetailBerita from "../components/DetailBerita";

export default function DetailBeritaPage() {
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
                  <Link to="/Berita">Berita</Link>
                </li>
                <li>Detail Berita</li>
              </ol>
            </div>
          </nav>
        </div>
        <section id="kategori" className="kategori sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Detail Berita</h2>
            </div>
          </div>
        </section>
        <DetailBerita />
      </main>
    </>
  );
}

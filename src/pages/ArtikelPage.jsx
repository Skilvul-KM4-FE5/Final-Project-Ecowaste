import { Link } from "react-router-dom";
import ArtikelCard from "../components/ArtikelCard";

export default function Artikel() {
  return (
    <>
      <main id="main">
      <div className="breadcrumbs">
        <nav>
          <div className="container">
            <ol>
              <li>
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li>
                  <Link to="/artikel">Blog</Link>
             </li>
              <li>Artikel</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="kategori" className="kategori sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>ARTIKEL</h2>
          </div>
        </div>
      </section>
      </main>
      <ArtikelCard />
    </>
    
  );
}

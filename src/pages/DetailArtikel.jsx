import { Link } from "react-router-dom";

export default function DetailArtikel() {
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
                <Link className="" to="/artikel">
                  Artikel
                </Link>
              </li>
              <li>Detail Artikel</li>
            </ol>
          </div>
        </nav>
      </div>
      
    </main>
    </>
    
  );
}

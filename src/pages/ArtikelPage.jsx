import { Link } from "react-router-dom";

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
      </main>
    </>
    
  );
}

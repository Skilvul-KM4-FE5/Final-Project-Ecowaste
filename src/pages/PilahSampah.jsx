import { Link } from "react-router-dom";

export default function PilahSampah() {
  return (
    <main id="main">
      <div className="breadcrumbs">
        <nav>
          <div className="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Pilah sampah</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="kategori" className="kategori sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Pilah Sampah</h2>
            <p>
              Buang Sampah Sesuai Jenisnya, Ciptakan Lingkungan yang Sehat dan
              Bersih
            </p>
          </div>

          <div className="d-flex flex-column align-items-center">
            <div className="card mb-3" style={{ maxWidth: "850px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="/organik1.jpg"
                    className="img-fluid rounded-start"
                    alt="organik"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Sampah Organik</b>
                    </h5>
                    <p className="card-text">
                      Sampah organik adalah jenis sampah yang berasal dari
                      bahan-bahan organik atau yang dapat terurai secara alami
                      seperti sisa makanan, daun, dan kayu. Sampah organik dapat
                      diuraikan oleh bakteri dan mikroorganisme dalam proses
                      dekomposisi menjadi bahan organik yang berguna seperti
                      pupuk kompos.
                    </p>
                    <Link className="btn-button" to="/sampah-organik">
                      Lihat Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: "850px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="/anorganik1.jpg"
                    className="img-fluid rounded-start"
                    alt="organik"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Sampah Anorganik</b>
                    </h5>
                    <p className="card-text">
                      Sampah anorganik adalah jenis sampah yang tidak dapat
                      terurai secara alami atau membutuhkan waktu yang sangat
                      lama untuk terurai seperti plastik, kaca, logam, dan bahan
                      kimia. Sampah anorganik cenderung sulit didaur ulang dan
                      menumpuk di tempat pembuangan sampah sehingga dapat
                      mencemari lingkungan.
                    </p>
                    <Link className="btn-button" to="/sampah-anorganik">
                      Lihat Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3" style={{ maxWidth: "850px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="/b3-1.jpg"
                    className="img-fluid rounded-start"
                    alt="organik"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Sampah Limbah / B3</b>
                    </h5>
                    <p className="card-text">
                      Sampah limbah atau B3 (Bahan Berbahaya dan Beracun) adalah
                      jenis sampah yang mengandung zat-zat berbahaya dan beracun
                      seperti logam berat, bahan kimia, dan limbah medis. Sampah
                      B3 dapat berdampak negatif pada kesehatan manusia dan
                      lingkungan jika tidak dikelola dengan benar.
                    </p>
                    <Link className="btn-button" to="/sampah-B3">
                      Lihat Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

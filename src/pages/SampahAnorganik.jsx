import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function SampahAnorganik() {
  return (
    <main id="main">
      <div className="breadcrumbs">
        <nav>
          <div className="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pilah-sampah">Pilah Sampah</Link>
              </li>
              <li>Kategori Sampah</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="kategori" className="kategori sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Sampah Anorganik</h2>
            <p>Apa itu sampah anorganik?</p>
          </div>
        </div>
      </section>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <img
              src="/anorganik-banner.png"
              alt="banner-anorganik"
              style={{ maxWidth: "1100px" }}
            />
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>Apa itu sampah anorganik?</h2>
                <p>
                  Sampah anorganik adalah jenis sampah yang sulit untuk terurai.
                  Berbeda dengan sampah organik, sampah ini pada umumnya tudak
                  berasal dari mahluk hidup. Sampah anorganik ialah sampah yang
                  berasal dari bahan non hayati yang juga meliputi produk
                  sintesis dan hasil proses teknologi dari pengolahan bahan
                  tambang.
                </p>
                <p>
                  Permasalahan limbah anorganik hingga saat ini masih belum
                  menemukan titik terang. Meskipun beberapa ikhtiar telah
                  dilaksanakan, jumlah sampah di Indonesia masih saja bisa
                  dikatakan sangat besar besar.
                </p>
                <p>
                  Berdasarkan data dari Kementerian Lingkungan Hidup dan
                  Kehutanaan (KLHK) pada tahun 2019, jumlah sampah sebesar 67,8
                  juta ton, yang terdiri dari 57% sampah organik, 15% sampah
                  plastik, 11% sampah kertas, dan 17% sampah yang lainnya.
                </p>
                <h2>Contoh Sampah Anoganik</h2>
                <p>
                  Sampah anorganik dapat dibagi menjadi dua jenis, yakni sampah
                  lunak dan sampah keras.
                </p>
                <ol>
                  <b>
                    <li>Sampah Lunak</li>
                  </b>
                  <p>
                    Sampah lunak anorganik seperti namanya adalah sampah yang
                    memiliki sifat lunak atau lentur dan mudah utuk dibentuk.
                    Adapun contohnya yakni sampah plastik, baik yang memiliki
                    bentuk kantong, styrofoam, sedotan, atau bungkus dari
                    makanan cepat saji. Selain itu, ada juga jenis limbah cair,
                    misalnya bekas air deterjen, limbah sabun cuci, minyak
                    goreng, dan lain sebagainya.
                  </p>
                  <b>
                    <li>Sampah Keras</li>
                  </b>
                  <p>
                    Kebalikan dari sampah lunak, sampah keras anorganik memiliki
                    sifat yakni tidak mudah untuk dihancurkan karena mengandung
                    bahan yang kuat. Limbah ini hanya bisa dihancurkan dengan
                    menggunakan metode penghancuran tertentu seperti pembakaran
                    atau dipanaskan. Adapun contoh dari sampah keras antara lain
                    yakni pecahan kaca, keramik, besi berkarat, dan juga kaleng.
                  </p>
                </ol>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>Informasi</h3>
                <ul>
                  <li>
                    <strong>Penulis</strong> <span>Sugeng Hermawan</span>
                  </li>
                  <li>
                    <strong>Tanggal terbit</strong>
                    <span>Jumat, 10 Maret 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <h2 style={{ textAlign: "center" }}>Contoh Sampah Anorganik</h2>

          <Swiper
            spaceBetween={50}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            style={{ textAlign: "center" }}
            breakpoints={{
              // Jumlah slide per view saat lebar layar kurang dari 576px
              576: {
                slidesPerView: 1,
              },
              // Jumlah slide per view saat lebar layar kurang dari 768px
              768: {
                slidesPerView: 2,
              },
              // Jumlah slide per view saat lebar layar kurang dari 992px
              992: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <img src="/swiper-anorganik/img1.png" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-anorganik/img2.png" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-anorganik/img3.png" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-anorganik/img4.png" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-anorganik/img5.png" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-anorganik/img6.png" alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function SampahB3() {
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
            <h2>Sampah Limbah / B3</h2>
            <p>Apa itu sampah limbah/b3?</p>
          </div>
        </div>
      </section>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <img
              src="/b3-banner.png"
              alt="banner-b3"
              style={{ maxWidth: "1100px" }}
            />
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>Apa itu sampah limbah/b3?</h2>
                <p>
                  B3 merupakan singkatan dari bahan beracun dan berbahaya. Dapat
                  diartikan sampah B3 adalah buangan atau limbah yang mengandung
                  zat beracun dan berbahaya yang secara langsung ataupun tidak
                  langsung dapat merusak lingkungan, menganggu kesehatan
                  manusia, dan mengancam kelangsungan hidup manusia serta
                  makhluk lainnya.
                </p>
                <p>
                  Jangan mengira bahwa sampah B3 hanya dihasilkan dari kegiatan
                  industri atau pabrik. Nyatanya, tidaklah sulit untuk menemukan
                  sampah B3 di kehidupan sehari-hari. Kegiatan rumah tangga juga
                  ikut menyumbang sampah B3, seperti: deterjen, pemutih pakaian,
                  pengharum ruangan, pembersih lantai, hair spray, pembasmi
                  serangga, batu baterai, dan masih banyak lagi.
                </p>
                <br />
                <h2>Jenis - jenis Sampah B3</h2>
                <p>
                  Berdasarkan sumbernya, sampah B3 dapat dibedakan menjadi 3
                  jenis, yaitu:
                </p>
                <ol>
                  <b>
                    <li>Sampah B3 dari sumber spesifik</li>
                  </b>
                  <p>
                    Dihasilkan dari suatu proses atau kegiatan utama, misalkan
                    industri atau pabrik.
                  </p>
                  <b>
                    <li>Sampah B3 dari sumber tidak spesifik</li>
                  </b>
                  <p>
                    Tidak berasal dari kegiatan utama, melainkan aktivitas
                    sampingan seperti pemeliharaan alat, pencucian, pengemasan,
                    dan lain-lain.
                  </p>
                  <b>
                    <li>Sampah B3 dari sumber lain</li>
                  </b>
                  <p>
                    Berasal dari sumber yang tidak terduga, misalkan produk yang
                    sudah kedaluwarsa, tumpahan, sisa kemasan, buangan produk
                    yang tidak memenuhi spesifikasi, dan masih banyak lainnya.
                  </p>
                </ol>
                <br />
                <h2>Cara Mengolah Sampah B3 yang Aman</h2>
                <p>
                  Karena ada banyak jenis sampah B3, dan kandungannya
                  berbeda-beda, maka cara memperlakukannya juga berbeda. Mulai
                  dari pemakaian, penyimpanan hingga pembuangan. Melansir dari
                  laman Environmental Protection Agency USA, ada beberapa tips
                  yang bisa dilakukan untuk mengolah sampah B3 dengan baik:
                </p>
                <ul>
                  <li>
                    Ikuti petunjuk penggunaan dan penyimpanan yang benar pada
                    label produk yang tercantum.
                  </li>
                  <li>
                    Pastikan untuk membaca setiap label yang tertera pada
                    produk, salah satunya tentang risiko.
                  </li>
                  <li>
                    Sediakan tempat khusus. Jangan menyimpan sampah B3 dalam
                    wadah makanan dan jangan lepas label yang tertera.
                  </li>
                  <li>Jangan dicampur dengan sampah lainnya.</li>
                  <li>
                    Mengurangi penggunaan produk yang berpotensi menjadi sampah
                    B3, dan mencari alternatif.
                  </li>
                  <li>Cari informasi layanan pembuangan sampah B3.</li>
                </ul>
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
          <h2 style={{ textAlign: "center" }}>Contoh Sampah Limbah/B3</h2>

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
              <img src="/swiper-b3/img1.png" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-b3/img2.png" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-b3/img3.png" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-b3/img4.png" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-b3/img5.png" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-b3/img6.png" alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

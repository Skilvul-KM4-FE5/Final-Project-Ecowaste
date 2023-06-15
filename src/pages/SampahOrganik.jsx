import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function SampahOrganik() {
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
            <h2>Sampah Organik</h2>
            <p>Apa itu sampah organik?</p>
          </div>
        </div>
      </section>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <img
              src="/organik-banner.jpg"
              alt="banner-organik"
              style={{ maxWidth: "1100px" }}
            />
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>Apa itu sampah organik?</h2>
                <p>
                  Sampah organik ialah jenis sampah yang berasal dari makhluk
                  hidup, baik manusia, tumbuhan, maupun hewan. Sampah organik
                  ini umumnya masih bisa dipakai apabila dikelola menyesuaikan
                  dengan prosedur yang benar. Jadi, sampah ini dapat memiliki
                  berbagai manfaat bagi kehidupan.
                </p>
                <p>
                  Sampah organik sendiri, dapa terbagi menjadi dua jenis, yakni
                  sampah organik kering dan basah. Sama seperti namanya, sampah
                  organik kering adalah sampah organik yang kandungan airnya
                  sedikit sedangkan sampah organik basah adalah sampah organik
                  yang banyak mengandung air.
                </p>
                <h2>Contoh Sampah Organik</h2>
                <ol>
                  <b>
                    <li>Sisa-sisa makanan</li>
                  </b>
                  <p>
                    Sisa makanan ini termasuk atau merupakan ke dalam golongan
                    sampah organik karena memiliki sifat yang bisa didaur ulang
                    kembali untuk dijadikan sebagai pupuk kompos.
                  </p>
                  <b>
                    <li>Kotoran manusia dan hewan</li>
                  </b>
                  <p>
                    Kotoran hewan adalah salah satu di antara berbagai sampah
                    organik yang mempunyai manfaat yang cukup baik. Satu di
                    antaranya ialah kotoran sapi. Kotoran sapi merupakan contoh
                    sampah organik yang bisa dimanfaatkan menjadi biogas alam.
                    Sementara itu, kotoran manusia juga bisa dimanfaatkan
                    sebagai pupuk tanaman yang memiliki nilai ekonomi yang cukup
                    tinggi.
                  </p>
                  <b>
                    <li>Kayu</li>
                  </b>
                  <p>
                    Kayu merupakan satu di antara berbagai sampah organik lain
                    yang mungkin dianggap tidak memiliki kegunaan bagi sebagian
                    orang. Meski demikian, apabila kayu berada di tangan orang
                    yang kreatif, kayu tersebut bisa dimanfaatkan sebagai karya
                    seni maupun sumber energi terbaharukan karena kayu
                    mengandung selulosa.
                  </p>
                  <b>
                    <li>Dedaunan</li>
                  </b>
                  <p>
                    Dedaunan yang telah rontok jika tidak dilakukan perawaatan
                    tertentu, secara alami akan menjadi pupuk bagi tumbuhan di
                    sekitarnya. Akan tetapi, daun juga bisa dimanfaatkan sebagai
                    karya seni serta pupuk kompos yang dapat diperjualbelikan.
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
          <h2 style={{ textAlign: "center" }}>Contoh Sampah Organik</h2>

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
              <img src="/swiper-organik/img1.png" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-organik/img2.png" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-organik/img3.png" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-organik/img4.png" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-organik/img5.png" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/swiper-organik/img6.png" alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

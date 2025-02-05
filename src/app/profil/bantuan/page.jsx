"use client"
import { useState } from "react"

export default function PusatBantuan() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null); 
    } else {
      setSelectedQuestion(index); 
    }
  };

  const faqData = [
    {
      question: "Apa Langkah Selanjutnya Setelah Mendaftar Di Bijak Cuan?",
      answer: "Anda dapat memilih beragam paket Membership yang menarik yaitu trial, langganan bulanan, dan Lifetime."
    },
    {
      question: "Adakah Grup Telegram Ataupun Whatsapp Di Bijak Cuan?",
      answer: "Tidak, saat ini kami belum memiliki Grup Telegram atau WhatsApp resmi di Bijak Cuan. Namun, jika Anda mengalami kendala atau memerlukan bantuan, Anda dapat menghubungi kami melalui kontak yang tersedia di bawah."
    },
    {
      question: "Bagaimana Cara Memperpanjang Masa Langganan Membership?",
      answer: "Anda dapat memilih paket Lifetime lalu melanjutkan proses pembayaran. Setelah pembayaran selesai, paket program Lifetime Anda akan segera aktif."
    },
    {
      question: "Adakah Free Class Di Bijak Cuan?",
      answer: "Tentu, kami menawarkan paket uji coba (trial) yang memungkinkan Anda untuk mengakses kelas-kelas gratis di platform kami."
    },
    {
      question: "Apa Ada Diskon Untuk Jadi Membership?",
      answer: "Tentu, kami memiliki beragam diskon yang dapat Anda temukan di halaman Promo."
    }
  ];

  return (
    <main>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
      <section id="deskripsi">
        <div className="container py-5">
          <h2 className="text-center mb-4">Temukan Jawaban untuk Pertanyaan Anda di Sini.</h2>
          <div className="text-center">
            <img
              src="/assets/pusat-bantuan/pb.jpg"
              alt="Pusat Bantuan"
              style={{ borderRadius: '1rem', height: '200px', width: '900px' }}
              className="mb-4"
            />
          </div>
          <div className="col">
            <p style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "900px", textAlign: 'justify' }}>
              Selamat datang di Halaman Bantuan Bijak Cuan, tempat yang dirancang
              khusus untuk membantu Anda mengatasi permasalahan finansial dan
              menjalani kehidupan yang lebih bijak secara finansial. Kami
              memahami bahwa mengelola keuangan bisa menjadi tugas yang rumit,
              itulah sebabnya kami hadir di sini untuk memudahkan perjalanan Anda.
            </p>
            <br />
            <p style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "900px", textAlign: 'justify' }}>
              Di sini, Anda akan menemukan panduan lengkap mengenai penggunaan
              Bijak Cuan, termasuk cara memanfaatkan alat dan layanan kami dengan
              efektif. Kami akan membimbing Anda melalui langkah demi langkah yang
              mudah diikuti, sehingga Anda bisa mengambil keputusan finansial yang
              bijak dan terinformasi. Tim layanan pelanggan kami yang ramah siap
              memberikan dukungan 24/7. Jika Anda memiliki pertanyaan atau butuh
              bantuan, jangan ragu untuk menghubungi kami. Kami berkomitmen
              untuk memberikan respon cepat dan solusi yang sesuai dengan kebutuhan Anda.
            </p>
            <br />
            <p style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "900px", textAlign: 'justify' }}>
              Selain itu, jangan lupa untuk menjelajahi daftar pertanyaan yang
              sering diajukan (FAQ) kami. Di sini, Anda akan menemukan jawaban atas
              banyak pertanyaan umum yang mungkin Anda miliki mengenai produk dan
              layanan kami.
            </p>
            <br />
            <p style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "900px", textAlign: 'justify' }}>
              Kami hadir dengan satu tujuan utama: membantu Anda meraih kesuksesan
              keuangan. Bersama Bijak Cuan, Anda tidak sendirian dalam perjalanan
              finansial Anda. Kami siap mendampingi Anda dan memberikan dukungan
              yang Anda butuhkan agar Anda dapat mencapai tujuan finansial Anda
              dengan lebih percaya diri. Terima kasih atas kepercayaan Anda kepada
              Bijak Cuan. Kami berharap Anda menemukan semua informasi yang Anda cari
              di halaman bantuan kami dan dapat memanfaatkan layanan kami dengan maksimal.
            </p>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <h3 className="text-center">Pertanyaan yang Sering Ditanyakan</h3>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-3" style={{marginLeft: "auto", marginRight: "auto",maxWidth: "900px"}}>
              <hr />
              <div
                onClick={() => toggleQuestion(index)} 
                style={{ borderBottom: "1px solid #ccc", paddingBottom: "8px", cursor:'pointer', color:'grey'}}
              >
                <strong>{faq.question}</strong>
              </div>
              <ul>
              {selectedQuestion === index && (
                <li><div style={{ paddingTop: "8px" }}>{faq.answer}</div></li>
              )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      
      <section id="hubungi-kami">
        <div className="container py-5">
          <h3 className="text-center mb-4">Hubungi Kami!</h3>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                src="/assets/pusat-bantuan/cta.jpg"
                alt="Hubungi Kami"
                style={{ borderRadius: '1rem', height: '200px', width: '400px' }}
                className="mb-4"
              />
            </div>
            <div className="align-self-start ms-3">
              <a href="">
                <p className="px-5 py-2 mb-4 text-white" style={{borderRadius:'1rem', backgroundColor:'#295AE3'}}>
                  <i class="fab fa-whatsapp fa-lg pe-2" style={{color:'#1e9c1c'}}></i>
                  +62 123-1234-1234
                </p>
              </a>
              <a href="">
                <p className="px-5 py-2 mb-4 text-white" style={{borderRadius:'1rem', backgroundColor:'#295AE3' }}>
                <i class="far fa-envelope fa-lg pe-2" style={{color:'#ff0033'}}></i>
                bijakcuan@gmail.com
                </p>
              </a>
                <h6 className="ps-2 pb-1">Sosial Media Kami</h6>
                <div className="d-flex flex-row gap-2 ps-2">
                  <a href="">
                    <i class="fab fa-twitter fa-lg"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-whatsapp fa-lg"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-youtube fa-lg"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-instagram fa-lg"></i>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

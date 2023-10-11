import Link from "next/link"

export default function Event() {
	return (
		<main>
			<div className="container">
				<h2>Event</h2>
				<h5>Sedang Berlangsung</h5>
				<div className="row row-cols-1 row-cols-md-4 g-3">
					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">
									Webinar "Mengelola Keuangan Bisnis dengan Bijak"
								</h6>
								<p className="card-text">
									Membahas strategi dan praktik terbaik dalam pengelolaan
									keuangan bisnis, dengan pemateri ahli keuangan...
								</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">Kompetisi Rencana Bisnis</h6>
								<p className="card-text">
									Kompetisi di mana pebisnis dapat menyusun rencana bisnis
									kreatif dan berpotensi mendapatkan pendanaan.
								</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">
									Webinar "Dasar-dasar Pengelolaan Keuangan Bisnis"
								</h6>
								<p className="card-text">
									Webinar ini akan membahas konsep dasar pengelolaan keuangan
									bisnis untuk pebisnis usaha menengah...
								</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">
									Laporan Tren Keuangan Bisnis 2023
								</h6>
								<p className="card-text">
									Peluncuran laporan tahunan yang menganalisis tren keuangan
									terbaru yang memengaruhi pebisnis...
								</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>
				</div>
				<h5>Mendatang</h5>

				<div className="row row-cols-1 row-cols-md-4 g-3">
					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">
									Seminar "Mengelola Keuangan di Era Digital"
								</h6>
								<p className="card-text">
									Seminar untuk membahas teknologi terkini yang dapat membantu
									dalam pengelolaan keuangan bisnis.
								</p>
								<p id="tanggal">1 Juli 2023</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">Laporan Tren Teknologi Finansial</h6>
								<p className="card-text">
									Peluncuran laporan tahunan yang menganalisis tren teknologi
									finansial yang relevan untuk bisnis menengah.
								</p>
								<br />
								<p id="tanggal">1 Agustus 2023</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">
									Seminar "Strategi Keuangan untuk Kewirausahaan"
								</h6>
								<p className="card-text">
									Seminar tentang strategi keuangan khusus untuk pemilik bisnis
									kecil dan menengah.
								</p>
								<br />
								<p id="tanggal">12 Oktober 2023</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<img
								src="/assets/event/event.jpg"
								className="card-img-top"
								alt=""
							/>
							<div className="card-body d-flex flex-column">
								<h6 className="card-title">Sesi "Membangun Dana Darurat"</h6>
								<p className="card-text">
									Sesi pemahaman dan perencanaan tentang pentingnya memiliki
									dana darurat untuk bisnis.
								</p>
								<br />
								<p id="tanggal">23 Oktober 2023</p>
								<Link
									href={"#"}
									className="btn btn-primary text-center mt-auto rounded-2">
									Lihat Detail
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
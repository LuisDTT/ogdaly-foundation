import Image from 'next/image'

export default function NewsSection() {
	return (
		<section id="news" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-blue-900 mb-4">Noticias</h2>
					<p className="text-lg text-gray-700 max-w-2xl mx-auto">
						Mantente al día con las últimas novedades, eventos y logros de
						nuestra fundación.
					</p>
				</div>
				{/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
						<Image
							src={'/image-objetivo.jpg'}
							alt={'Noticias'}
							className="w-full h-48 object-cover"
							width={100}
							height={100}
						/>
						<div className="p-6">
							<h3 className="text-xl font-bold text-blue-900 mb-2">
								Lorem ipsum dolor sit amet
							</h3>
							<p className="text-gray-700 mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
								aperiam distinctio delectus quod fugit sapiente! Delectus modi
								ullam repellat eveniet incidunt nobis quisquam. Rerum
								dignissimos rem consectetur ullam, repellendus qui?
							</p>
							<a
								href={`/noticias/`}
								className="text-blue-500 hover:text-blue-700 font-semibold"
							>
								Leer más →
							</a>
						</div>
					</div>
				</div> */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
					<div className="rounded-sm overflow-hidden ring-pink-100 ring shadow-2xl shadow-pink-200 hover:scale-[1.01] transition-transform ">
						<Image
							src={'/el-universal-news-3.jpg'}
							alt="Noticias del universal"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="rounded-md overflow-hidden ring-pink-100 ring shadow-2xl shadow-pink-200 hover:scale-[1.01] transition-transform">
						<Image
							src={'/el-universal-news-2.jpg'}
							alt="Noticias del universal"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="rounded-md overflow-hidden ring-pink-100 ring shadow-2xl shadow-pink-200 hover:scale-[1.01] transition-transform">
						<Image
							src={'/el-universal-news-1.jpg'}
							alt="Noticias del universal"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="rounded-md overflow-hidden ring-pink-100 ring shadow-2xl shadow-pink-200 hover:scale-[1.01] transition-transform">
						<Image
							src={'/el-universal-news.jpg'}
							alt="Noticias del universal"
							width={1000}
							height={1000}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

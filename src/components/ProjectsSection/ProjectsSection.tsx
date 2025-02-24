import Image from 'next/image'

const projects = [
	{
		id: 1,
		title: 'Educación para todos',
		description:
			'Brindamos acceso a educación de calidad a niños en zonas vulnerables.',
		image: '/image-objetivo2.jpg'
	},
	{
		id: 2,
		title: 'Alimentación saludable',
		description:
			'Programa de nutrición para niños en comunidades desfavorecidas.',
		image: '/image-objetivo2.jpg'
	},
	{
		id: 3,
		title: 'Empoderamiento femenino',
		description:
			'Capacitamos a mujeres para el emprendimiento y la autosuficiencia.',
		image: '/image-objetivo2.jpg'
	}
]

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-16 md:px-16 bg-gray-100">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					{/* Video a la izquierda */}
					<div className="relative min-w-72 w-2/5 h-[300px] md:h-[400px] lg:h-[450px]">
						<iframe
							className="w-full h-full rounded-2xl shadow-lg"
							src="https://www.youtube.com/embed/7U6M_FSG2Fs"
							title="Video de la Fundación"
							allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>

					{/* Cards a la derecha */}
					<div>
						<h3 className="text-5xl font-bold text-center text-blue-900 mb-8">
							Nuestros Proyectos
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{projects.map((project) => (
								<div
									key={project.id}
									className="bg-white rounded-2xl shadow-lg overflow-hidden"
								>
									<Image
										src={project.image}
										alt={project.title}
										width={400}
										height={250}
										className="w-full h-40 object-cover"
									/>
									<div className="p-4">
										<h3 className="text-lg font-semibold text-gray-800">
											{project.title}
										</h3>
										<p className="text-gray-600 text-sm mt-2">
											{project.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

import Image from 'next/image'
import React from 'react'

export const OurTarget = () => {
	return (
		<article className="my-20">
			<div className=" px-4 ">
				<div className="text-center mb-12 w-full flex flex-col items-center">
					<h4 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
						Nuestro Objetivo
					</h4>
					<p className="text-lg text-gray-700 max-w-2xl">
						Capacitar a Migrantes, Retornados y Desplazados para Integrarlos al
						Aparato productivo de la Región.
					</p>
				</div>
				<div className="grid md:grid-cols-[minmax(100px,500px)_minmax(100px,700px)] gap-8 items-center justify-center">
					{/* Imagen o ilustración */}
					<div className="flex justify-center flex-col items-center">
						<i className="text-2xl font-bold mb-3 text-blue-900">
							&quot;Sin miedo al éxito&quot;
						</i>
						<Image
							src="/image-objetivo2.jpg" // Ruta de la imagen
							alt="Objetivo de la Fundación"
							className="rounded-lg shadow-lg w-full max-w-md"
							width={1000}
							height={1000}
						/>
					</div>
					{/* Contenido del objetivo */}
					<div>
						<p className="text-lg text-gray-700 mb-6">
							En <strong>FUNDAMIAYE</strong>, nuestro objetivo principal es
							brindar apoyo a migrantes y a sus familiares que se encuentren en
							situación de vulnerabilidad o sin empleo, incorporandolos al
							aparato productivo de la República de Colombia, a través de la
							gestión de programas de capacitación para el trabajo, orientación
							al emprendimiento y a la eficaz y eficiencia de los recursos; y
							para tal fin coordinará con organismos gubernamentales y con otras
							organizaciones no gubernamentales, que tengan objetivos similares;
							así como también ejercer diversas actividades económicas en
							función de generar recursos para el cumplimiento
							del objeto social.
						</p>

						<a
							href="#" // Enlace a otra sección o página
							className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
						>
							Únete a Nuestra Causa
						</a>
					</div>
				</div>
			</div>
		</article>
	)
}

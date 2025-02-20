import React from 'react'
import { Card } from './Card'

export const WhatWeDoSection = () => {
	return (
		<section id="what-we-do" className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-5xl font-bold text-blue-900 mb-4">
						Lo que Hacemos
					</h2>
					<p className="text-lg text-gray-700 max-w-2xl mx-auto">
						Nuestros programas y proyectos están diseñados para transformar
						vidas y construir un futuro mejor.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Tarjeta 1: Capacitación Laboral */}
					<Card
						icon={
							<svg
								className="w-12 h-12 mx-auto"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								></path>
							</svg>
						}
						text="Ofrecemos cursos y talleres prácticos para que las personas adquieran
				habilidades útiles y puedan acceder a empleos formales."
						title="Capacitación Laboral"
					/>

					{/* Tarjeta 2: Inclusión Social */}
					<Card
						icon={
							<svg
								className="w-12 h-12 mx-auto"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								></path>
							</svg>
						}
						text="Promovemos la integración de migrantes, retornados y desplazados
							en la sociedad, fomentando la igualdad y el respeto."
						title="Inclusión Social"
					/>

					{/* Tarjeta 3: Desarrollo Comunitario */}
					<Card
						icon={
							<svg
								className="w-12 h-12 mx-auto"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								></path>
							</svg>
						}
						text="Trabajamos en proyectos que fortalecen las comunidades y mejoran
							las condiciones de vida de las personas más vulnerables."
						title="Desarrollo Comunitario"
					/>
				</div>
			</div>
		</section>
	)
}

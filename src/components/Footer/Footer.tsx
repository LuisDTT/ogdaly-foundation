export const Footer = () => {
	return (
		<footer id="contact" className="bg-blue-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Columna 1: Información de Contacto */}
					<div>
						<h3 className="text-xl font-bold mb-4">Contacto</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="mailto:recreo1971@gmail.com"
									className="hover:text-blue-300"
								>
									recreo1971@gmail.com
								</a>
							</li>
							<li>
								<a href="tel:+573001234567" className="hover:text-blue-300">
									+57 321 9254217
								</a>
							</li>
							<li>
								<p>Cartagena de Indias, Colombia</p>
							</li>
						</ul>
					</div>

					{/* Columna 2: Enlaces Rápidos */}
					<div>
						<h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
						<ul className="space-y-2">
							<li>
								<a href="#quienes-somos" className="hover:text-blue-300">
									Quiénes Somos
								</a>
							</li>
							<li>
								<a href="#lo-que-hacemos" className="hover:text-blue-300">
									Lo que Hacemos
								</a>
							</li>
							<li>
								<a href="#noticias" className="hover:text-blue-300">
									Noticias
								</a>
							</li>
							<li>
								<a href="#contacto" className="hover:text-blue-300">
									Contacto
								</a>
							</li>
						</ul>
					</div>

					{/* Columna 3: Redes Sociales */}
					<div>
						<h3 className="text-xl font-bold mb-4">Síguenos</h3>
						<div className="flex space-x-4">
							<a
								href="https://www.instagram.com/fundamiaye_migrante"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-300"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.259 0-3.667.014-4.947.072-2.905.14-3.954 1.694-4.094 4.094-.057 1.28-.072 1.688-.072 4.947 0 3.259.014 3.668.072 4.947.14 2.905 1.694 3.954 4.094 4.094 1.28.058 1.688.072 4.947.072 3.259 0 3.668-.014 4.948-.072 2.905-.14 3.954-1.694 4.094-4.094.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.14-2.905-1.694-3.954-4.094-4.094-1.28-.058-1.688-.072-4.948-.072zm0 5.838a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.838a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm5.833-6.666a1.166 1.166 0 100-2.332 1.166 1.166 0 000 2.332z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>

					{/* Columna 4: Suscripción al Boletín */}
					<div>
						<h3 className="text-xl font-bold mb-4">Encuéntranos</h3>
						<p className="mb-4">Aqui puedes llegar con nosotros.</p>
						<div className="flex gap-6">
							<svg
								width="200"
								height="100"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
									fill="currentColor"
								/>
							</svg>
							<p>
								Direccion de la Fundacion: Cartagena de Indias, barrio los
								cerros, sector cerromar Manzana D-10 Apartamento 03
							</p>
						</div>
					</div>
				</div>

				{/* Derechos de Autor */}
				<div className="border-t border-blue-800 mt-8 pt-8 text-center">
					<p>
						&copy; {new Date().getFullYear()} FUNDAMIAYE. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

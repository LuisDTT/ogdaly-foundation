import ProfileCard from '@/components/ProfileCard'
import { OurTarget } from './OurTarget'

export const WhoAreWeSection = () => {
	return (
		<section id="who-are-we" className="bg-blue-50 pb-14">
			<h3 className="text-2xl sm:text-4xl md:text-5xl w-full  text-center font-semibold bg-slate-400 p-4 text-white">
				Quienes somos: Una Fundación sin Fines de Lucro, que Trabaja para
				Construir Juntos a los Migrantes un Futuro Mejor
			</h3>

			<OurTarget />

			<h3 className="text-2xl sm:text-4xl md:text-5xl mt-20 w-3/4 mx-auto  text-center font-semibold p-4 text-blue-900">
				NUESTRA GERENCIA
			</h3>

			<div className="flex justify-center flex-wrap items-center  my-11 gap-16 px-5">
				<ProfileCard
					description="Migrante Venezolana, De profesión:
								Comerciante; Emprendedora y Líder de
								este gran Proyecto, el cual nace de la
								sensibilidad humana impartida en el
								seno familiar."
					image="/president-photo.jpg"
					name="Ogdaly Gomez Fernandez"
					role="Presidente de la fundación"
				/>
				<ProfileCard
					description="Migrante Venezolano, De Profesión:
								Licenciado en Administración y
								Abogado, con especialización en
								Derechos Humanos y Maestría en
								Gerencia Pública, Impulsor de este
								gran proyecto."
					image="/vice-president-photo.jpg"
					name="Franklin Rafael Conde"
					role="Vicepresidente de la fundación"
				/>
			</div>
		</section>
	)
}

import ProfileCard from '@/components/ProfileCard'
import { OurTarget } from './OurTarget'

export const WhoAreWeSection = () => {
	return (
		<section id="who-are-we" className="bg-blue-50 pb-14">
			<h3 className="text-2xl sm:text-4xl md:text-5xl w-full  text-center font-semibold bg-slate-400 p-4 text-white">
				Quiénes Somos: Construyendo un Futuro Mejor Juntos
			</h3>

			<OurTarget />

			<h3 className="text-2xl sm:text-4xl md:text-5xl mt-20 w-3/4 mx-auto  text-center font-semibold p-4 text-blue-900">
				NUESTRO GOBIERNO
			</h3>

			<div className="flex justify-center flex-wrap items-center my-11 gap-16 px-5">
				<ProfileCard
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione eum voluptatum rerum exercitationem, distinctio eius inventore officiis. Sunt alias a animi! Impedit magnam molestiae nihil non tempore amet explicabo!"
					image="/president-photo.jpg"
					name="Ogdaly Gomez Fernandez"
					role="Presidente"
				/>
				<ProfileCard
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione eum voluptatum rerum exercitationem, distinctio eius inventore officiis. Sunt alias a animi! Impedit magnam molestiae nihil non tempore amet explicabo!"
					image="/vice-president-photo.jpg"
					name="Franklin Rafael Conde"
					role="Vicepresidente"
				/>
			</div>
		</section>
	)
}

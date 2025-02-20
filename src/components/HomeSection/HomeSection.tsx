'use client'

import './HomeSection.css'
import ImageWithBorder from '../ImageWithBorder'
import useScroll from '@/hooks/useScroll'

export const HomeSection = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isScrolled, gotThreshold] = useScroll(408)

	return (
		<section className="relative h-[30rem] md:h-[50rem] flex justify-center items-center overflow-hidden">
			<div className="absolute w-full h-full -z-0 bg-[url('/bg-home.png')] bg-no-repeat bg-image opacity-30 "></div>
			<div
				className={`absolute shadow-2xl shadow-shadow-color left-[27rem]  ${gotThreshold && 'animate-slide-image-to-left'}`}
			>
				<ImageWithBorder imgURL="/image-objetivo.jpg" />
			</div>

			<p className="z-0 w-1/2 text-base sm:text-xl md:text-4xl text-center text-gray-600 font-extralight">
				&quot;En 2022, nace FUNDAMIAYE para integrar a migrantes, retornados y
				desplazados en Cartagena, ofreciendo capacitación y oportunidades
				laborales que promuevan su inclusión y el desarrollo sostenible de la
				región.&quot;
			</p>

			<div
				className={`absolute shadow-2xl shadow-shadow-color right-[27rem] ${gotThreshold && 'animate-slide-image-to-right'}`}
			>
				<ImageWithBorder imgURL="/image-objetivo2.jpg" />
			</div>
		</section>
	)
}

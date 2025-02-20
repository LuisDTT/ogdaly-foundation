import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header'
import { HomeSection } from '@/components/HomeSection/HomeSection'
import NewsSection from '@/components/NewsSection/NewsSection'
import { ProjectsSection } from '@/components/ProjectsSection/ProjectsSection'
import { WhatWeDoSection } from '@/components/WhatWeDoSection/WhatWeDoSection'
import { WhoAreWeSection } from '@/components/WhoAreWeSection/WhoAreWeSection'

export default function Home() {
	return (
		<>
			<Header />
			<main className="">
				<div
					id="home"
					className=" overflow-hidden h-[70vh] sm:h-screen w-full bg-[url('/banner-alternative.jpg')] bg-no-repeat bg-cover bg-fixed bg-center opacity-90 flex justify-center items-center"
				>
					<h2 className="mt-28 text-3xl  sm:text-5xl md:text-6xl xl:text-8xl  text-white font-medium sm:leading-[4rem] select-none animate-text-shadow">
						<div className="w-max opacity-0 animate-slide-in-left underline-above underline-above-yellow">
							FUNDACIÓN
						</div>
						<br />
						<div className="w-max opacity-0 animate-slide-in-right-1 underline-above underline-above-blue">
							MIGRANTES APRENDER
						</div>
						<br />
						<div className="w-max opacity-0 animate-slide-in-left-2 underline-above underline-above-red">
							Y EMPRENDER
						</div>
					</h2>
				</div>

				<HomeSection />
				<WhoAreWeSection />
				<WhatWeDoSection />
				<ProjectsSection />
				<NewsSection />
				<Footer />
			</main>
		</>
	)
}

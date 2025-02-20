'use client'
import useScroll from '@/hooks/useScroll'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { RiMenuUnfold4Line } from 'react-icons/ri'
import { RiMenuFold4Line } from 'react-icons/ri'
function Header() {
	const [isScrolled] = useScroll()
	const [showNav, setShowNav] = useState(false)

	useEffect(() => {
		if (showNav) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [showNav])

	return (
		<header
			className={`fixed transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-xl' : 'bg-transparent'} ${showNav && 'h-screen'} md:h-auto w-full z-10 shadow-shadow-color `}
		>
			<div
				className={`transition-all duration-200 ${isScrolled ? 'h-20' : 'h-32'} w-full flex justify-between gap-3 items-center px-3`}
			>
				<div
					className={`flex ${isScrolled ? 'h-full' : 'bg-transparentWhiteColor rounded-xl px-4'} min-w-max `}
				>
					<Image
						src={'/logo2.png'}
						alt="Logo"
						width={100}
						height={100}
						className="object-contain my-2 w-16 z-10  lg:w-24"
					/>
					<div className="my-auto ml-2 overflow-hidden z-10">
						<div className="animate-slide-in ">
							<h1 className="text-xl font-semibold leading-none lg:text-2xl ">
								FUNDACIÓN <br />
								<span className="text-yellow-300">FUNDA</span>
								<span className="text-blue-900">MIA</span>
								<span className="text-red-600">YE</span>
							</h1>
						</div>
					</div>
				</div>
				<nav className={``}>
					{showNav ? (
						<RiMenuFold4Line
							onClick={() => setShowNav(!showNav)}
							className="md:hidden text-6xl font-bold text-black relative z-10 hover:bg-transparentWhiteColor hover:text-gray-700 hover:cursor-pointer"
						/>
					) : (
						<RiMenuUnfold4Line
							onClick={() => setShowNav(!showNav)}
							className={`${showNav && 'hidden'} ${isScrolled ? 'text-gray-700' : 'text-white'}  md:hidden text-6xl z-10 relative hover:bg-transparentWhiteColor hover:text-gray-700 hover:cursor-pointer rounded-lg`}
						/>
					)}

					<ul
						className={`${showNav ? 'flex' : 'hidden'} absolute right-0 top-0 h-full flex-col w-full gap-y-10 md:static md:flex-row py-2 bg-white md:bg-transparentWhiteColor 
									md:min-h-16 px-4 rounded-xl md:flex md:flex-wrap md:max-w-lg lg:max-w-full justify-center items-center gap-x-8 md:gap-y-3  
									text-lg font-normal ${isScrolled ? 'text-gray-700' : 'text-black font-medium'} `}
					>
						<li
							onClick={() => setShowNav(false)}
							className={`${!isScrolled && !showNav ? 'hover:text-white' : 'hover:text-black'} hover:text-xl hover:font-medium  transition-all duration-200`}
						>
							<a href="#home">Inicio</a>
						</li>
						<li
							onClick={() => setShowNav(false)}
							className={`${!isScrolled && !showNav ? 'hover:text-white' : 'hover:text-black'} hover:text-xl  transition-all duration-200`}
						>
							<a href="#who-are-we">Quienes somos</a>
						</li>
						<li
							onClick={() => setShowNav(false)}
							className={`${!isScrolled && !showNav ? 'hover:text-white' : 'hover:text-black'} hover:text-xl  transition-all duration-200`}
						>
							<a href="#what-we-do">Lo que hacemos</a>
						</li>
						<li
							onClick={() => setShowNav(false)}
							className={`${!isScrolled && !showNav ? 'hover:text-white' : 'hover:text-black'} hover:text-xl   transition-all duration-200`}
						>
							<a href="#projects">Proyectos</a>
						</li>
						<li
							onClick={() => setShowNav(false)}
							className={`${!isScrolled && !showNav ? 'hover:text-white' : 'hover:text-black'} hover:text-xl  transition-all duration-200`}
						>
							<a href="#news">Noticias</a>
						</li>
						<li
							onClick={() => setShowNav(false)}
							className={`${!isScrolled && !showNav ? 'hover:text-white' : 'hover:text-black'} hover:text-xl   transition-all duration-200`}
						>
							<a href="#contact">Contacto</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

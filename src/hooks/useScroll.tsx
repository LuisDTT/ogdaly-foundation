import { useEffect, useState } from 'react'

const useScroll = (threshold = 50) => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [gotThreshold, setGotThreshold] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > threshold) {
				setGotThreshold(true)
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [threshold])

	return [isScrolled, gotThreshold]
}

export default useScroll

import Image from 'next/image'

export const ImageWithBorder = ({ imgURL }: { imgURL: string }) => {
	return (
		<div className="h-[260px] w-[100px]  md:h-[460px] md:w-[311px] relative rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-1">
			<div className="w-full h-full rounded-2xl bg-white">
				<Image
					src={imgURL}
					alt="Demostracion"
					width={1000}
					height={1000}
					className="w-full h-full object-cover rounded-2xl"
				/>
			</div>
		</div>
	)
}

export default ImageWithBorder

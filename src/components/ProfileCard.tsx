import Image from 'next/image'

const ProfileCard = ({
	image,
	name,
	description,
	role
}: {
	image: string
	name: string
	description: string
	role: string
}) => {
	return (
		<div className=" max-w-sm  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[url('/bg-profile.png')] bg-no-repeat bg-cover bg-center">
			<div className="relative h-72">
				<Image
					src={image}
					alt={name}
					width={100}
					height={100}
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="p-6 bg-[#ffffffbf]">
				<h2 className="text-xl font-bold text-gray-800 mb-2">
					{name}
					<br />
					<span className="text-base font-extralight">{role}</span>
				</h2>
				<p className="text-black">{description}</p>
			</div>
		</div>
	)
}

export default ProfileCard

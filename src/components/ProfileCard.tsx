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
		<div className=" max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[url('/venezuela-flag.png')] bg-no-repeat bg-contain bg-bottom ">
			<div className="relative h-72">
				<Image
					src={image}
					alt={name}
					width={1000}
					height={1000}
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="p-6 bg-[#ffffffdf] h-60">
				<h2 className="text-xl font-bold text-gray-700 mb-2">
					{name}
					<br />
					<span className="text-base font-extralight text-gray-500">
						{role}
					</span>
				</h2>
				<p className="text-gray-700">{description}</p>
			</div>
		</div>
	)
}

export default ProfileCard

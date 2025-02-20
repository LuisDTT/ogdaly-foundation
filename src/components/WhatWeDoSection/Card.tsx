export const Card = ({
	icon,
	title,
	text
}: {
	icon: React.ReactNode
	title: string
	text: string
}) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
			<div className="text-blue-500 mb-4">{icon}</div>
			<h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
			<p className="text-gray-700">{text}</p>
		</div>
	)
}

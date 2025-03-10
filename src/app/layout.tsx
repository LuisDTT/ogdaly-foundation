import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Fundacion - FUNDAMIAYE',
	description: 'Fundacion Migrantes Aprender y Emprender'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={rubik.className}>
			<body className={`antialiased`}>{children}</body>
		</html>
	)
}

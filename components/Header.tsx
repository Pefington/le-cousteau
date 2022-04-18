import { NextComponentType } from "next"

const Header: NextComponentType = () => {
	return (
		<header className="bg-lc-red flex items-center justify-center w-screen py-4 mb-1 bg-opacity-50">
			<h1>Le Cousteau</h1>
		</header>
	)
}

export default Header

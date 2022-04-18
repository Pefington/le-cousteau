import { NextComponentType } from "next"
import { useTranslation } from "next-i18next"

const Footer: NextComponentType = () => {
	const t = useTranslation()

	return (
		<footer className="bg-lc-red flex flex-col items-center justify-center w-screen py-2 mt-1 bg-opacity-50">
			<h3>Auberge Le Cousteau – 32360 Saint-Lary</h3>
			<h4>
				<a href="tel:+33 5 62 64 53 50">05 62 64 53 50</a> –{" "}
				<a href="mailto:lecousteau@gmail.com">lecousteau@gmail.com</a>
			</h4>
		</footer>
	)
}

export default Footer

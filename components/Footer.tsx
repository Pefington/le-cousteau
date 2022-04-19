import { NextComponentType } from "next"
import { useTranslation } from "next-i18next"

const Footer: NextComponentType = () => {
  const t = useTranslation()

  return (
    <footer className="mt-1 flex w-screen flex-col items-center justify-center bg-lc-red py-2 ">
      <h3>Auberge Le Cousteau – 32360 Saint-Lary</h3>
      <h4>
        <a href="tel:+33 5 62 64 53 50">05 62 64 53 50</a> –{" "}
        <a href="mailto:lecousteau@gmail.com">lecousteau@gmail.com</a>
      </h4>
    </footer>
  )
}

export default Footer

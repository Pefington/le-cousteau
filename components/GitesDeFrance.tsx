import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"

const GitesDeFrance: NextComponentType = () => {
  return (
    <Link
      href="https://www.gites-de-france.com/fr/occitanie/gers/chambres-au-cousteau-32g100039"
      passHref
    >
      <a target="_blank" className="h-10 w-10 opacity-60 transition-opacity">
        <Image
          src="/svg/Gites-de-France.svg"
          alt="Logo Gîtes de France"
          width="100%"
          height="100%"
        />
      </a>
    </Link>
  )
}

export default GitesDeFrance

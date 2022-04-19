import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"

const Header: NextComponentType = () => {
  return (
    <div className="flex w-screen items-center justify-center bg-lc-red p-4">
      <a href="#">
        <h1>Auberge Le Cousteau</h1>
      </a>
      <Link href="https://www.gites-de-france.com" passHref>
        <a
          target="_blank"
          className="opacity-50 transition-opacity hover:opacity-100"
        >
          <Image
            src="/svg/Gites-de-France.svg"
            alt="Gîtes de France logo"
            width="50%"
            height="50%"
          />
        </a>
      </Link>
    </div>
  )
}

export default Header

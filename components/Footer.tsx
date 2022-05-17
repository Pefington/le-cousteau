import { NextComponentType } from "next"
import Link from "next/link"
import { MdFacebook, MdLocationPin, MdPhone } from "react-icons/md"
import { SiGmail } from "react-icons/si"

const Footer: NextComponentType = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral p-2 text-sm text-neutral-content">
      <h4>Auberge Le Cousteau – 32360 Saint-Lary</h4>
      <div className="flex">
        <Link href="tel:+33 562645350" passHref>
          <a target="_blank">
            <MdPhone className="m-2 h-6 w-6" />
          </a>
        </Link>
        <Link href="https://www.facebook.com/aubergelecousteau" passHref>
          <a target="_blank">
            <MdFacebook className="m-2 h-6 w-6" />
          </a>
        </Link>
        <Link href="mailto:lecousteau@gmail.com" passHref>
          <a target="_blank">
            <SiGmail className="m-2 h-6 w-6" />
          </a>
        </Link>
        <Link href="https://goo.gl/maps/ckPLv97Ag51mFfSx5" passHref>
          <a target="_blank">
            <MdLocationPin className="m-2 h-6 w-6" />
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer

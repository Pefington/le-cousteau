import { NextComponentType } from "next"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { MdFacebook, MdLocationPin, MdPhone } from "react-icons/md"
import { SiGmail } from "react-icons/si"

const Footer: NextComponentType = () => {
  const t = useTranslation()

  return (
    //   <Link
    //     href="https://www.gites-de-france.com/fr/occitanie/gers/chambres-au-cousteau-32g100039"
    //     passHref
    //   >
    //     <a target="_blank" className="h-10 w-10 opacity-60 transition-opacity">
    //       <Image
    //         src="/svg/Gites-de-France.svg"
    //         alt="Logo Gîtes de France"
    //         width="100%"
    //         height="100%"
    //       />
    //     </a>
    //   </Link>

    <footer className="fixed bottom-0 flex flex-col items-center p-4 text-sm text-neutral-content">
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

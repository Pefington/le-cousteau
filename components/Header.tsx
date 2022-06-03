// import { NextComponentType } from "next"

import Link from "next/link"

import GitesDeFrance from "./GitesDeFrance"
import LanguageSelector from "./LanguageSelector"

type Props = {
  browsing: boolean
}

// const Header: NextComponentType = ({browsing}: Props) => {
const Header = ({ browsing }: Props) => {
  return (
    <nav className="navbar fixed top-0 z-10 bg-transparent">
      <div className="navbar-start bg-transparent">
        {/* MOBILE */}
        <GitesDeFrance />
        <a className="btn btn-ghost text-xl normal-case">
          {browsing && (
            <Link href="/" passHref>
              <a>
                <h1 className="text-2xl">Le Cousteau</h1>
              </a>
            </Link>
          )}
        </a>
      </div>
      <div className="navbar-end bg-transparent">
        <LanguageSelector />
      </div>
    </nav>
  )
}

export default Header

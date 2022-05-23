// import { NextComponentType } from "next"

import GitesDeFrance from "./GitesDeFrance"
import LanguageSelector from "./LanguageSelector"

type Props = {
  browsing: boolean
}

// const Header: NextComponentType = ({browsing}: Props) => {
const Header = ({browsing}: Props) => {
  return (
    <nav className="navbar bg-neutral text-neutral-content transition-all delay-300">
      <div className="navbar-start">
        {/* MOBILE */}
        <GitesDeFrance />
        <a className="btn btn-ghost text-xl normal-case">
          {browsing && <h1 className="text-2xl">Le Cousteau</h1>}
        </a>
      </div>
      <div className="navbar-end">
        <LanguageSelector />
      </div>
    </nav>
  )
}

export default Header

import { NextComponentType } from "next"
import template from "../template/template.json"
import LanguageSelector from "./LanguageSelector"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Header: NextComponentType = () => {
  const { locale } = useRouter()
  return (
    <nav className="navbar fixed top-0 z-50 text-neutral-content transition-all delay-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 p-2 shadow"
          >
            {template.sections.map(
              (section, i) =>
                (locale === "fr" && (
                  <li key={i}>
                    <h2>{section.fr}</h2>
                  </li>
                )) ||
                (locale === "en" && (
                  <li key={i}>
                    <h2>{section.en}</h2>
                  </li>
                )) ||
                (locale === "de" && (
                  <li key={i}>
                    <h2>{section.de}</h2>
                  </li>
                )) ||
                (locale === "es" && (
                  <li key={i}>
                    <h2>{section.es}</h2>
                  </li>
                )) ||
                (locale === "it" && (
                  <li key={i}>
                    <h2>{section.it}</h2>
                  </li>
                ))
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl normal-case">
          <h1>Le Cousteau</h1>
        </a>
        <Link
          href="https://www.gites-de-france.com/fr/occitanie/gers/chambres-au-cousteau-32g100039"
          passHref
        >
          <a
            target="_blank"
            className="h-10 w-10 opacity-60 transition-opacity"
          >
            <Image
              src="/svg/Gites-de-France.svg"
              alt="Logo Gîtes de France"
              width="100%"
              height="100%"
            />
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {template.sections.map(
            (section, i) =>
              (locale === "fr" && (
                <li key={i}>
                  <h2>{section.fr}</h2>
                </li>
              )) ||
              (locale === "en" && (
                <li key={i}>
                  <h2>{section.en}</h2>
                </li>
              )) ||
              (locale === "de" && (
                <li key={i}>
                  <h2>{section.de}</h2>
                </li>
              )) ||
              (locale === "es" && (
                <li key={i}>
                  <h2>{section.es}</h2>
                </li>
              )) ||
              (locale === "it" && (
                <li key={i}>
                  <h2>{section.it}</h2>
                </li>
              ))
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <LanguageSelector />
      </div>
    </nav>
  )
}

export default Header

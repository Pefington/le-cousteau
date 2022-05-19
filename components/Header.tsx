import { NextComponentType } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

import template from "../template/template.json"
import GitesDeFrance from "./GitesDeFrance"
import LanguageSelector from "./LanguageSelector"

const Header: NextComponentType = () => {
  const { locale } = useRouter()
  return (
    <nav className="navbar bg-neutral text-neutral-content transition-all delay-300">
      <div className="navbar-start">
        {/* MOBILE */}
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
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <h2>{section.fr}</h2>
                    </li>
                  </Link>
                )) ||
                (locale === "en" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <h2>{section.en}</h2>
                    </li>
                  </Link>
                )) ||
                (locale === "de" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <h2>{section.de}</h2>
                    </li>
                  </Link>
                )) ||
                (locale === "es" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <h2>{section.es}</h2>
                    </li>
                  </Link>
                )) ||
                (locale === "it" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <h2>{section.it}</h2>
                    </li>
                  </Link>
                ))
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl normal-case">
          <h1 className="text-2xl">Le Cousteau</h1>
        </a>
        <GitesDeFrance />
      </div>
      {/* LARGE SCREEN */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-lg">
          {template.sections.map(
            (section, i) =>
              (locale === "fr" && (
                <Link href={section.url} passHref>
                  <li key={i}>
                    <h2>{section.fr}</h2>
                  </li>
                </Link>
              )) ||
              (locale === "en" && (
                <Link href={section.url} passHref>
                  <li key={i}>
                    <h2>{section.en}</h2>
                  </li>
                </Link>
              )) ||
              (locale === "de" && (
                <Link href={section.url} passHref>
                  <li key={i}>
                    <h2>{section.de}</h2>
                  </li>
                </Link>
              )) ||
              (locale === "es" && (
                <Link href={section.url} passHref>
                  <li key={i}>
                    <h2>{section.es}</h2>
                  </li>
                </Link>
              )) ||
              (locale === "it" && (
                <Link href={section.url} passHref>
                  <li key={i}>
                    <h2>{section.it}</h2>
                  </li>
                </Link>
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

import { NextComponentType } from "next"
import template from "../public/locales/fr/template.json"
import { useTranslation } from "next-i18next"
import LanguageSelector from "./LanguageSelector"

const Header: NextComponentType = () => {
  const { t } = useTranslation()
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
            {template.sections.map((section, i) =>
              !section.subsections ? (
                <li key={i}>
                  <h2>{section.name}</h2>
                </li>
              ) : (
                <li key={i} tabIndex={0}>
                  <a className="justify-between">
                    <h2>{section.name}</h2>
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    {section.subsections.map((subsection, i) => (
                      <li key={i}>
                        <a>
                          <h3>{subsection.name}</h3>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl normal-case">
          <h1>Le Cousteau</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {template.sections.map((section, i) =>
            !section.subsections ? (
              <li key={i}>
                <h2>{section.name}</h2>
              </li>
            ) : (
              <li key={i} tabIndex={0}>
                <a>
                  <h2>{section.name}</h2>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  {section.subsections.map((subsection, i) => (
                    <li key={i}>
                      <a>
                        <h3>{subsection.name}</h3>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )
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

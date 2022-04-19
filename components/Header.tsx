import { NextComponentType } from "next"

const Header: NextComponentType = () => {
  return (
    <nav className="w-screen bg-lc-red bg-opacity-50 px-4">
      <div className="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="font-courgette text-2xl font-bold text-slate-300 transition-colors duration-200 lg:text-3xl"
              href="#"
            >
              Auberge Le Cousteau
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
              aria-label="toggle menu"
            ></button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className="items-center md:flex">
          <div className="flex flex-col md:mx-6 md:flex-row">
            <a
              className="my-1 transform text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              className="my-1 transform text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Shop
            </a>
            <a
              className="my-1 transform text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
            <a
              className="my-1 transform text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
// import Header from "../components/Header"
// import Footer from "../components/Footer"
import template from "../public/locales/fr/template.json"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Link from "next/link"

type staticProps = {
  locale: string
}

export async function getStaticProps({ locale }: staticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  }
}

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>Auberge Le Cousteau</title>
        <meta name="description" content={t("descriptionContent")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero min-h-screen bg-lc-main">
        <nav className="navbar fixed top-0 z-50 text-neutral-content transition-all delay-300 hover:bg-base-100">
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
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
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
                          <li key={i} className="bg-base-100">
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
                        <li key={i} className="bg-base-100">
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
          <div className="navbar-end"></div>
        </nav>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="z-40 max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Blablabla</h1>
            <p className="mb-5">
              Il était une fois, au pays des confits, rillettes, foie gras et
              magrets, un lieu surprenant qui fait le lien entre le passé, son
              savoir-faire séculaire et un présent plein de vie.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
        <footer className="footer fixed bottom-0 items-center p-4 text-neutral-content transition-colors delay-300 hover:bg-neutral">
          <div className="grid-flow-col items-center">
            <p>Copyright © 2022 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Link href="https://www.gites-de-france.com" passHref>
              <a
                target="_blank"
                className="h-10 w-10 opacity-60 transition-opacity hover:opacity-100"
              >
                <Image
                  src="/svg/Gites-de-France.svg"
                  alt="Logo Gîtes de France"
                  width="100%"
                  height="100%"
                />
              </a>
            </Link>

            <Link href="https://www.facebook.com/aubergelecousteau" passHref>
              <a
                target="_blank"
                className="h-10 w-10 opacity-60 transition-opacity hover:opacity-100"
              >
                <Image
                  src="/img/facebook_logo.png"
                  alt="Logo Facebook"
                  width="100%"
                  height="100%"
                />
              </a>
            </Link>
          </div>
        </footer>
      </div>

      {/* <Header /> */}
      {/* <main className="overflow-y-scroll">
        <p>
          Il était une fois, au pays des confits, rillettes, foie gras et
          magrets, un lieu surprenant qui fait le lien entre le passé, son
          savoir-faire séculaire et un présent plein de vie.
        </p>
        <p>
          Venez découvrir, au cœur de la campagne gersoise, à 10 minutes d’Auch,
          un lieu authentique par sa cuisine et par l’accueil chaleureux des
          propriétaires.
        </p>
        <p>
          Ce petit hameau de verdure situé dans la commune de Saint-Lary (Gers)
          où se conjuguent la gastronomie familiale et la convivialité, attire
          de plus en plus de personnes en quête de repos et de plaisir
          gastronomique.
        </p>
        <p>
          L’auberge se situe dans une ancienne ferme rénovée comprenant
          plusieurs dépendances, qui au fil du temps ont été restaurées avec
          gout, charme et confort.
        </p>
        <p>
          Les chambres et les gîtes permettent à nos hôtes de venir y séjourner
          à deux, avec des amis ou en famille. Vous pourrez vous profiter du
          soleil et vous baigner dans une piscine privative, clôturée et
          éclairée.
        </p>
        <p>
          Des jeux sont à votre disposition. Le restaurant est ouvert 6 jours
          sur 7, sur réservation, vous y apprécierez une cuisine fine et
          copieuse, des grillades au feu de bois, où l’alliance entre la
          convivialité et la qualité des produits vous rapprocheront un peu plus
          du bonheur.
        </p>
        <p>
          L’été, la table est dressée sur les terrasse ombragées, et l’hiver,
          près de la cheminée.
        </p>
        <p>
          Le lieu est également adapté pour accueillir divers évènements :
          cérémonies de mariage, baptêmes, cousinades, anniversaires, séminaires
          d’entreprises…
        </p>
        <p>
          Venez également apprendre les us et coutumes de la transformation du
          canard et à la découverte du patrimoine historique au cœur de la
          Gascogne où châteaux, abbayes, producteurs d’armagnacs vous donnent
          rendez-vous.
        </p>
        {template.sections.map(({ id, name }) => (
          <section key={id}>{name}</section>
        ))}
      </main>
      <Footer /> */}
    </>
  )
}

export default Home

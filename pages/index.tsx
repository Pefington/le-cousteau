import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import template from "../template/template.json"

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
  const [browsing, setBrowsing] = useState(false)
  const { locale } = useRouter()

  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      <Head>
        <title>Auberge Le Cousteau</title>
        <meta name="description" content={t("DescriptionContent")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header browsing={browsing} />
      <div className="hero flex-1 bg-lc-main">
        <div className="hero-overlay bg-opacity-60"></div>
        {browsing === false ? (
          <main className="hero-content text-center text-neutral-content">
            <div className="max-w-prose">
              <h1 className="mb-5 text-5xl font-bold ">Le Cousteau</h1>
              <p>{t("INTRO.01-IlÉtaitUneFois")}</p>
              <p>{t("INTRO.02-VenezDécouvrir")}</p>
              <p>{t("INTRO.03-CePetitHameau")}</p>
              <p>{t("INTRO.04-L'AubergeSeSitue")}</p>
              <button
                className="btn btn-primary"
                onClick={() => setBrowsing(!browsing)}
              >
                Go
              </button>
            </div>
          </main>
        ) : (
          <ul>
            {template.sections.map(
              (section, i) =>
                (locale === "fr" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <a href="">
                        <h1>{section.fr}</h1>
                      </a>
                    </li>
                  </Link>
                )) ||
                (locale === "en" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <a href="">
                        <h1>{section.en}</h1>
                      </a>
                    </li>
                  </Link>
                )) ||
                (locale === "de" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <a href="">
                        <h1>{section.de}</h1>
                      </a>
                    </li>
                  </Link>
                )) ||
                (locale === "es" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <a href="">
                        <h1>{section.es}</h1>
                      </a>
                    </li>
                  </Link>
                )) ||
                (locale === "it" && (
                  <Link href={section.url} passHref>
                    <li key={i}>
                      <a href="">
                        <h1>{section.it}</h1>
                      </a>
                    </li>
                  </Link>
                ))
            )}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Home

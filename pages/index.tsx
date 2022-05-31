import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Intro from "../components/Intro"
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
    <>
      <Head>
        <title>Auberge Le Cousteau</title>
        <meta name="description" content={t("DescriptionContent")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {browsing && <Header browsing={browsing} />}
      <div className="flex flex-1 flex-col items-center justify-center bg-stone-900 bg-lc-main bg-blend-overlay">
        {browsing === false ? (
          <main className="hero-content text-center flex-1 max-w-none w-11/12">
            <div className="font-courgette text-stone-300 overflow-x-scroll">
              <h1 className="mb-8 text-7xl font-bold ">Le Cousteau</h1>
              <Intro />
              <button
                className="btn btn-ghost btn-wide font-baskerville hover:btn-primary"
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
      {browsing && <Footer />}
    </>
  )
}

export default Home

import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

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
    <div className="w-screen h-screen flex flex-col justify-between">
      <Head>
        <title>Auberge Le Cousteau</title>
        <meta name="description" content={t("DescriptionContent")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="hero flex-1 bg-lc-main">
        <div className="hero-overlay bg-opacity-60"></div>
        <main className="hero-content text-center text-neutral-content">
          <div className="max-w-prose">
            <h1 className="mb-5 text-5xl font-bold ">Le Cousteau</h1>
            <p>{t("INTRO.01-IlÉtaitUneFois")}</p>
            <p>{t("INTRO.02-VenezDécouvrir")}</p>
            <p>{t("INTRO.03-CePetitHameau")}</p>
            <p>{t("INTRO.04-L'AubergeSeSitue")}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home

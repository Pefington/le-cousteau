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
    <>
      <Head>
        <title>Auberge Le Cousteau</title>
        <meta name="description" content={t("DescriptionContent")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero min-h-screen bg-lc-main">
        <Header />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="z-40 max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Le Cousteau</h1>
            <p className="mb-5">{t("INTRO.01-IlÉtaitUneFois")}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home

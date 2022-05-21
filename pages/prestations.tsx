import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

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

const Prestations: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Nos Prestations</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-lc-main">
        <div className="hero-overlay bg-opacity-60"></div>
        <main className="hero-content text-center text-neutral-content">
          <div className="z-40 max-w-md">
            <Image
              src="https://source.unsplash.com/collection/1027750/1024x768"
              alt=""
              width="1024"
              height="768"
            />
            <p className="mb-5">{t("PRESTATIONS.01-LeLieuEstÉgalementAdapté")}</p>
            <p className="mb-5">{t("PRESTATIONS.02-Jusque30Couchages")}</p>
            <p className="mb-5">{t("PRESTATIONS.03-ComposerAvecLeChef")}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Prestations

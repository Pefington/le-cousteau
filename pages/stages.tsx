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

const Stages: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Stages Foie Gras</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-lc-main">
        <div className="hero-overlay bg-opacity-80"></div>
        <main className="hero-content text-center text-neutral-content">
          <div className="z-40 max-w-md">
            <Image
              src="https://source.unsplash.com/collection/1027750/1024x768"
              alt=""
              width="1024"
              height="768"
            />
            <p className="mb-5">{t("STAGES.01-VenezÉgalementApprendre")}</p>
            <p className="mb-5">{t("STAGES.02-YannPédagogue")}</p>
            <p className="mb-5">{t("STAGES.03-VousApprendrezÀDécouper")}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Stages

import type { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Image from "next/image"
import Head from "next/head"
9
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

const restaurant: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Le Restaurant</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-lc-main">
        <div className="hero-overlay bg-opacity-60"></div>
        <main className="hero-content text-center text-neutral-content">
          <div className="z-40 max-w-md">
            <Image
              src="https://source.unsplash.com/collection/1027750/1024x768"
              width="1024"
              height="768"
              // layout="responsive"
            />
            <p className="mb-5">{t("RESTO.01-LeRestaurantEstOuvert")}</p>
            <p className="mb-5">{t("RESTO.02-LÉtéLaTableEstDressée")}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default restaurant

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { EffectFade, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import Header from "../components/Header"

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
      <Header browsing={false} />
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="flex h-screen w-screen flex-col items-center justify-center bg-stone-900 bg-opacity-80 bg-lc-main bg-cover text-stone-300 bg-blend-overlay">
            <article className="prose prose-2xl prose-stone font-courgette">
              <p className="pintro">{t("INTRO.01-IlÉtaitUneFois")}</p>
              <p className="pintro">{t("INTRO.02-VenezDécouvrir")}</p>
              <h1 className="mb-8 text-7xl text-center">Le Cousteau</h1>
              <p className="pintro">{t("INTRO.03-CePetitHameau")}</p>
              <p className="pintro">{t("INTRO.04-L'AubergeSeSitue")}</p>
            </article>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/1080" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/1060" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/1070" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home

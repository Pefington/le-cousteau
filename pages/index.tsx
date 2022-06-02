import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { EffectFade, Mousewheel, Navigation, Pagination } from "swiper"
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
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Mousewheel, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="flex h-screen w-screen flex-col items-center justify-center bg-stone-900 bg-opacity-80 bg-lc-main bg-cover text-stone-300 bg-blend-overlay">
            <article className="prose prose-2xl prose-stone font-courgette">
              {/* <p className="pintro">{t("INTRO.01-IlÉtaitUneFois")}</p>
              <p className="pintro">{t("INTRO.02-VenezDécouvrir")}</p> */}
              <h1 className="mb-8 text-center text-7xl">Le Cousteau</h1>
              {/* <p className="pintro">{t("INTRO.03-CePetitHameau")}</p>
              <p className="pintro">{t("INTRO.04-L'AubergeSeSitue")}</p> */}
            </article>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex h-screen w-screen flex-col items-center justify-center bg-stone-900 bg-opacity-80 bg-lc-resto bg-cover text-stone-300 bg-blend-overlay">
            <article className="prose prose-2xl prose-stone font-courgette">
              <h2 className="mb-8 text-center text-5xl">
                {t("STRUCTURE.Restaurant")}
              </h2>
              <p className="pintro">{t("RESTO.01-LeRestaurantEstOuvert")}</p>
              <p className="pintro">{t("RESTO.02-LÉtéLaTableEstDressée")}</p>
            </article>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex h-screen w-screen flex-col items-center justify-center bg-stone-900 bg-opacity-80 bg-lc-rooms bg-cover text-stone-300 bg-blend-overlay">
            <article className="prose prose-2xl prose-stone font-courgette">
              <h2 className="mb-8 text-center text-5xl">
                {t("STRUCTURE.Auberge")}
              </h2>
              <p className="pintro">{t("RESTO.01-LeRestaurantEstOuvert")}</p>
              <p className="pintro">{t("RESTO.02-LÉtéLaTableEstDressée")}</p>
            </article>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home

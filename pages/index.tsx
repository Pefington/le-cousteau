import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

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
          <div className="flex h-screen w-screen flex-col items-center justify-center bg-stone-900 bg-lc-main bg-cover text-7xl text-stone-300 bg-blend-overlay">
            <h1>Le Cousteau</h1>
          </div>
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

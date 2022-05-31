import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { NextComponentType } from "next"
import { useTranslation } from "next-i18next"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const Intro: NextComponentType = () => {
  const { t } = useTranslation()

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <p className="pintro">{t("INTRO.01-IlÉtaitUneFois")}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="pintro">{t("INTRO.02-VenezDécouvrir")}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="pintro">{t("INTRO.03-CePetitHameau")}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="pintro">{t("INTRO.04-L'AubergeSeSitue")}</p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Intro

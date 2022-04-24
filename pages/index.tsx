import type { NextPage } from "next"
import Image from "next/image"
import Head from "next/head"
import Header from "../components/Header"
// import Footer from "../components/Footer"
import template from "../public/locales/fr/template.json"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Link from "next/link"

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

console.log(useTranslation)

const Home: NextPage = () => {
  const { t } = useTranslation()
  console.log(t)
  return (
    <>
      <Head>
        <title>Auberge Le Cousteau</title>
        <meta name="description" content={t("descriptionContent")} />
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
        <footer className="footer fixed bottom-0 items-center p-4 text-neutral-content transition-colors delay-300">
          <h3>Auberge Le Cousteau – 32360 Saint-Lary</h3>
          <h4>
            <a href="tel:+33 5 62 64 53 50">05 62 64 53 50</a> –{" "}
            <a href="mailto:lecousteau@gmail.com">lecousteau@gmail.com</a>
          </h4>
          <Link href="https://www.gites-de-france.com" passHref>
            <a
              target="_blank"
              className="h-10 w-10 opacity-60 transition-opacity"
            >
              <Image
                src="/svg/Gites-de-France.svg"
                alt="Logo Gîtes de France"
                width="100%"
                height="100%"
              />
            </a>
          </Link>

          <Link href="https://www.facebook.com/aubergelecousteau" passHref>
            <a
              target="_blank"
              className="h-10 w-10 opacity-60 transition-opacity"
            >
              <Image
                src="/img/facebook_logo.png"
                alt="Logo Facebook"
                width="100%"
                height="100%"
              />
            </a>
          </Link>
        </footer>
      </div>

      {/* <Header /> */}
      {/* <main className="overflow-y-scroll">
        <p>
          Il était une fois, au pays des confits, rillettes, foie gras et
          magrets, un lieu surprenant qui fait le lien entre le passé, son
          savoir-faire séculaire et un présent plein de vie.
        </p>
        <p>
          Venez découvrir, au cœur de la campagne gersoise, à 10 minutes d’Auch,
          un lieu authentique par sa cuisine et par l’accueil chaleureux des
          propriétaires.
        </p>
        <p>
          Ce petit hameau de verdure situé dans la commune de Saint-Lary (Gers)
          où se conjuguent la gastronomie familiale et la convivialité, attire
          de plus en plus de personnes en quête de repos et de plaisir
          gastronomique.
        </p>
        <p>
          L’auberge se situe dans une ancienne ferme rénovée comprenant
          plusieurs dépendances, qui au fil du temps ont été restaurées avec
          gout, charme et confort.
        </p>
        <p>
          Les chambres et les gîtes permettent à nos hôtes de venir y séjourner
          à deux, avec des amis ou en famille. Vous pourrez vous profiter du
          soleil et vous baigner dans une piscine privative, clôturée et
          éclairée.
        </p>
        <p>
          Des jeux sont à votre disposition. Le restaurant est ouvert 6 jours
          sur 7, sur réservation, vous y apprécierez une cuisine fine et
          copieuse, des grillades au feu de bois, où l’alliance entre la
          convivialité et la qualité des produits vous rapprocheront un peu plus
          du bonheur.
        </p>
        <p>
          L’été, la table est dressée sur les terrasse ombragées, et l’hiver,
          près de la cheminée.
        </p>
        <p>
          Le lieu est également adapté pour accueillir divers évènements :
          cérémonies de mariage, baptêmes, cousinades, anniversaires, séminaires
          d’entreprises…
        </p>
        <p>
          Venez également apprendre les us et coutumes de la transformation du
          canard et à la découverte du patrimoine historique au cœur de la
          Gascogne où châteaux, abbayes, producteurs d’armagnacs vous donnent
          rendez-vous.
        </p>
        {template.sections.map(({ id, name }) => (
          <section key={id}>{name}</section>
        ))}
      </main>
      <Footer /> */}
    </>
  )
}

export default Home

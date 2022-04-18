import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import template from "../template/template.json"
// import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// import { useTranslation } from "next-i18next"

// type staticProps = {
//   locale: string
// }

// export async function getStaticProps({ locale }: staticProps) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       // Will be passed to the page component as props
//     },
//   }
// }

const Home: NextPage = () => {
  // const t = useTranslation()
  return (
    <>
      <Head>
        <title>Auberge Le Cousteau</title>
        <meta name="description" content="sous-titre ici" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-y-scroll">
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
      <Footer />
    </>
  )
}

export default Home

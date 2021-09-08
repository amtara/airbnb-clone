import Head from "next/head";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import Banner from '../components/Banner'
export default function Home({ exploreData, cardData }) {

  return (
    <div>
      <Head>
        <title>Create Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-10">
          <h1 className="text-4xl font-semibold pb-5 ">explore Nearby</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>

          <h1 className="text-4xl font-semibold py-8">Live Anywhere</h1>

          <div className="flex space-x-3 overflow-y-scroll scrollbar-hide">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="WishLists curated by Airbnb."
          buttonText="Get inspired"
        
        />
      </main>
     
      <Fotter/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );



  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
 
    },
  };
}

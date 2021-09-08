import React from "react";
import Header from "../components/header";
import Footer from "../components/Fotter";
import { useRouter } from "next/router";
// import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
function search({ getAllDataLocation }) {


  console.log(getAllDataLocation);
  const router = useRouter();
  const { location, startDate, endDate, numberGuests } = router.query;

  return (
    <div>
      <Header placeholder={`${location} | ${endDate} ${numberGuests}`} />
      <main className="flex flex-grow pt-14 px-6">
        <section>
          <p className="text-sm">
            300+ Stays for {numberGuests} {} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stay in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation flexibility</p>
            <p className="button">Type of place </p>
            <p className="button">Price </p>
            <p className="button">Room and Beds</p>
            <p className="button">More filter</p>
          </div>
          <div className="flex flex-col">
            {getAllDataLocation.map(
              ({ img, location, title, description, star, total,price }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  total={total}
              
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const getAllDataLocation = await fetch(
    "https://links.papareact.com/isz"
  ).then((res) => res.json());

  return {
    props: {
      getAllDataLocation,
    },
  };
}

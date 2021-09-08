import React, { useState } from "react";

import Image  from "next/image";
import { useRouter } from 'next/router'
import {
  GlobeAltIcon,
  UserCircleIcon,
  SearchIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Header({placeholder}) {
  
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  
  const search = () => {
    router.push({
      pathname:'/search',
      query:{
        location: searchInput, 
        startDate:startDate.toString(),
        endDate: endDate.toISOString(),
        numberGuests
      }
    }); 
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };



  return (
    <div>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 cursor-pointer my-auto"
        >
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        <div class="radius-xl border-2 rounded-full flex items-center py-2 px-8">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            className="outline-none bg-tranparent flex-grow"
            placeholder={placeholder}


          />
          <SearchIcon className="hidden md:inline-flex h-12  bg-red-300 rounded-full p-2 cursor-pointer mx-auto " />
        </div>

        <div className="flex items-center justify-end space-x-4 ">
          <p className=" hidden sm:block md:block">Become a host</p>
          <GlobeAltIcon className="h-8 flex" />
          <div className="rounded-full flex space-x-4 items-center border-2 px-2 py-2">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
        {/* si il n'y rien dans la valeur searchInput m'affiche l'éléments */}
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto mt-10">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              onChange={handleSelect}
              rangeColor={["#fD5B61"]}
            />

            <div className="flex items-center border-b mb-4">
              <h1 className="text-2xl flex-grow">Number of Guest</h1>
              <UserIcon className="h-5" />
              <input
                type="number"
                value={numberGuests}
                min={1}
                onChange={(e) => setNumberGuests(e.target.value)}
                className=" w-12 pl-2 text-lg text-red-400"
              />
            </div>

            <div className="flex">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button
              onClick={search} 
              className="flex-grow text-red-400">search</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;


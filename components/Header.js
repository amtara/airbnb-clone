import React from "react";
import Image from "next/image";
import Banner from './Banner'
import {
  GlobeAltIcon,
  UserCircleIcon,
  SearchIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
  <div>

   <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
       
        />
      </div>

      <div class="radius-xl border-2 rounded-full flex items-center py-2 px-8">
        <input
          type="text"
          className="outline-none pl-7 bg-tranparent  flex-grow"
          placeholder="start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-12  bg-red-300 rounded-full p-2 cursor-pointer mx-auto " />
      </div>

      <div className="flex items-center justify-end space-x-4 ">
        <p className=" hidden sm:block md:block">Become a host</p>
        <GlobeAltIcon className="h-8 flex" />
        <div className="rounded-full flex space-x-4 items-center border-2 px-2 py-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
    <Banner />
  </div>


  );
}

export default Header;

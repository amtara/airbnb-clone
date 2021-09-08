import Image from 'next/image'
import React from 'react'
import { HeartIcon, StarIcon } from "@heroicons/react/outline"

function InfoCard({img, location, description, lat,long, total, title, star}) {
    return (
        <div className="flex px-2 py-10 cursor-pointer hover:opacity-90 hover:shadow-lg border-b transform transition delay-90 ease-out ">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-sm hover:opacity-95"/>
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className=" flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h1 className="text-2xl text-bold">{title}</h1>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm  flex-grow">{description}</p>

                <div>
                    <div className="flex item-center">

                    <StarIcon className="h-6 text-red-400 hover:text-red-500"/>
                    
                    </div>
                    <div className="flex justify-between">
                    <p>{star}</p>
                    <p className="font-extrabold text-xl">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard

import React from 'react'
import Image from "next/image"
function SmallCard({img, location, distance}) {
    return (

        <div className="flex items-center m-2 mt-5 space-x-4 rounded-md hover:bg-gray-200 cursor-pointer hover:scale-105 transition transform duration-200 ease-out ">

            <div className="relative h-16 w-16 ">
    
                <Image src={img} layout="fill" className="rounded-lg" />
              
            </div>
            <div>

            <h1 className="text-xl font-semibold">{location}</h1>
            <h1 className="text-gray-600 font-light">{distance}</h1>
            </div>
        </div>
    )
}

export default SmallCard
